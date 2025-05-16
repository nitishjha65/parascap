import { sendEmail } from "@/lib/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    console.log("reqBody", reqBody);

    const { name, email, subject, message } = reqBody;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields", success: false },
        { status: 400 }
      );
    }

    await sendEmail({ name, email, subject, message });

    return NextResponse.json(
      { message: "Email sent successfully", success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
