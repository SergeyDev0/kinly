import { validateAccessToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login() {
	const cookieStore = await cookies();
	const access = cookieStore.get("access_token")?.value;

	if (access) {
		const valid = await validateAccessToken(access);
		if (valid) {
			redirect("/constructor");
		}
	};
	

  return <div>Login</div>;
}
