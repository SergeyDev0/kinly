import { NextResponse } from "next/server";
import { apiGet } from "@/lib/api";

export async function GET() {
  const data = await apiGet("/user/data");
  return NextResponse.json(data);
}