import { getValidAccessToken } from "@/lib/auth";

const API_URL = process.env.EXTERNAL_API_URL!;

export async function apiFetch(
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    const res = await fetch(`/api${path}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        "Content-Type":
          (options.headers as Record<string, string>)?.["Content-Type"] ||
          "application/json",
      },
    });
    return res;
  }

  const access = await getValidAccessToken();
  if (!access) throw new Error("Unauthorized");

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${access}`,
      "Content-Type":
        (options.headers as Record<string, string>)?.["Content-Type"] ||
        "application/json",
    },
    cache: "no-store",
  });

  if (res.status === 401) throw new Error("Token expired or invalid");
  return res;
}

export async function apiGet<T = unknown>(path: string): Promise<T> {
  const res = await apiFetch(path, { method: "GET" });
  return res.json();
}

export async function apiPost<T = unknown>(
  path: string,
  body: any
): Promise<T> {
  const res = await apiFetch(path, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res.json();
}
