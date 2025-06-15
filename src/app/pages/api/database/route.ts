import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import mongoose from "mongoose";

export async function GET() {
  try {
    await dbConnect();

    if (mongoose.connection.readyState === 1) {
      return NextResponse.json({ status: "✅ Database Connected" }, { status: 200 });
    } else {
      return NextResponse.json({ status: "⚠️ Database Not Connected" }, { status: 500 });
    }
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
    return NextResponse.json({ status: "❌ Database Connection Failed", error }, { status: 500 });
  }
}
