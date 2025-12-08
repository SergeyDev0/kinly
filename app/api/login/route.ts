import { NextResponse } from "next/server";
import { loginWithCredentials, setServerCookies } from "@/lib/auth";

export async function POST(request: Request) {
	const { email, password } = await request.json();
	const tokens = await loginWithCredentials(email, password);
	if (!tokens) {
		return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
	}
	await setServerCookies(tokens);
	return NextResponse.json({ message: "Login successful" }, { status: 200 });
};