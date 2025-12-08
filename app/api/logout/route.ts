import { clearServerCookies } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	await clearServerCookies();
	return NextResponse.json({ message: "Logout successful" }, { status: 200 });
};