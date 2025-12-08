import { cookies } from "next/headers";

const API_URL = process.env.EXTERNAL_API_URL!;
const CLIENT_ID = process.env.OAUTH_CLIENT_ID!;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET!;

async function requestToken(body: Record<string, string>) {
  const res = await fetch(`${API_URL}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      ...body,
    }),
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export async function loginWithCredentials(email: string, password: string) {
  return await requestToken({
    grant_type: "password",
    username: email,
    password,
  });
}

export async function refreshTokens(refresh: string) {
  return await requestToken({
    grant_type: "refresh_token",
    refresh_token: refresh,
  });
}

export async function validateAccessToken(token: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/oauth/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      },
      body: new URLSearchParams({
        token,
        token_type_hint: "access_token",
      }).toString(),
      cache: "no-store",
    });

    if (!res.ok) return false;
    const data = await res.json();
    return !!data.active;
  } catch {
    return false;
  }
}

export async function setServerCookies(tokens: {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}) {
  const cookieStore = await cookies();

  cookieStore.set("access_token", tokens.access_token, {
    httpOnly: false,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: tokens.expires_in,
  });

  cookieStore.set("refresh_token", tokens.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60, // 30 дней
  });
}

export async function clearServerCookies() {
  const store = await cookies();
  store.delete("access_token");
  store.delete("refresh_token");
}

export async function getValidAccessToken(): Promise<string | null> {
  const store = await cookies();
  let access = store.get("access_token")?.value;
  const refresh = store.get("refresh_token")?.value;

  if (!access && !refresh) return null;

  const valid = access ? await validateAccessToken(access) : false;

  if (valid) return access ?? null;

  if (!valid && refresh) {
    const newTokens = await refreshTokens(refresh);
    if (newTokens?.access_token) {
      setServerCookies(newTokens);
      return newTokens.access_token;
    }
  }

  return null;
}
