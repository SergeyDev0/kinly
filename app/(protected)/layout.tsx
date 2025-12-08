import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateAccessToken, refreshTokens, setServerCookies } from "@/lib/auth";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  let access = cookieStore.get("access_token")?.value;
  const refresh = cookieStore.get("refresh_token")?.value;

  // if (!access && !refresh) redirect("/login");

  const valid = access ? await validateAccessToken(access) : false;

  // if (!valid && refresh) {
  //   const newTokens = await refreshTokens(refresh);
  //   if (newTokens) {
  //     setServerCookies(newTokens);
  //     access = newTokens.access_token;
  //   } else {
  //     redirect("/login");
  //   }
  // }

  // if (!access) redirect("/login");

  return <>{children}</>;
}