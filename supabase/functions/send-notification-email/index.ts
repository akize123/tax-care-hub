import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const body = await req.json();
    const { type, data } = body;

    let subject = "";
    let html = "";

    if (type === "contact") {
      const { firstName, lastName, email, phone, country, message } = data;
      subject = `New Contact Message from ${firstName} ${lastName}`;
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #1a2744; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <h1 style="color: #c9a84c; margin: 0; font-size: 22px;">Tax Care Hub</h1>
            <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">New Contact Message</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 0 0 6px 6px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #555; font-size: 14px; width: 130px;"><strong>Full Name:</strong></td><td style="padding: 8px 0; font-size: 14px;">${firstName} ${lastName}</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding: 8px 0; color: #555; font-size: 14px;"><strong>Email:</strong></td><td style="padding: 8px 0; font-size: 14px;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: #555; font-size: 14px;"><strong>Phone:</strong></td><td style="padding: 8px 0; font-size: 14px;">${phone || "N/A"}</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding: 8px 0; color: #555; font-size: 14px;"><strong>Country:</strong></td><td style="padding: 8px 0; font-size: 14px;">${country || "N/A"}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 14px; background: #f4f4f4; border-left: 4px solid #c9a84c; border-radius: 4px;">
              <p style="margin: 0; color: #555; font-size: 13px;"><strong>Message:</strong></p>
              <p style="margin: 8px 0 0; font-size: 14px; color: #333; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">This email was sent from the Tax Care Hub contact form.</p>
          </div>
        </div>
      `;
    } else if (type === "booking") {
      const { firstName, lastName, email, phone, service } = data;
      subject = `New Service Booking from ${firstName} ${lastName}`;
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #1a2744; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <h1 style="color: #c9a84c; margin: 0; font-size: 22px;">Tax Care Hub</h1>
            <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">New Service Application</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 0 0 6px 6px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #555; font-size: 14px; width: 130px;"><strong>Full Name:</strong></td><td style="padding: 8px 0; font-size: 14px;">${firstName} ${lastName}</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding: 8px 0; color: #555; font-size: 14px;"><strong>Email:</strong></td><td style="padding: 8px 0; font-size: 14px;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: #555; font-size: 14px;"><strong>Phone:</strong></td><td style="padding: 8px 0; font-size: 14px;">${phone}</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding: 8px 0; color: #555; font-size: 14px;"><strong>Service:</strong></td><td style="padding: 8px 0; font-size: 14px; color: #1a2744; font-weight: bold;">${service || "Tax Declaration"}</td></tr>
            </table>
            <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">This email was sent from the Tax Care Hub booking form.</p>
          </div>
        </div>
      `;
    } else if (type === "homepage") {
      const { fullName, email, message } = data;
      subject = `New Message from ${fullName} (Homepage)`;
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #1a2744; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <h1 style="color: #c9a84c; margin: 0; font-size: 22px;">Tax Care Hub</h1>
            <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">New Homepage Message</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 0 0 6px 6px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #555; font-size: 14px; width: 130px;"><strong>Full Name:</strong></td><td style="padding: 8px 0; font-size: 14px;">${fullName}</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding: 8px 0; color: #555; font-size: 14px;"><strong>Email:</strong></td><td style="padding: 8px 0; font-size: 14px;">${email}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 14px; background: #f4f4f4; border-left: 4px solid #c9a84c; border-radius: 4px;">
              <p style="margin: 0; color: #555; font-size: 13px;"><strong>Message:</strong></p>
              <p style="margin: 8px 0 0; font-size: 14px; color: #333; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">This email was sent from the Tax Care Hub homepage contact form.</p>
          </div>
        </div>
      `;
    } else {
      throw new Error("Unknown notification type");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Tax Care Hub <onboarding@resend.dev>",
        to: ["akizeisrael123@gmail.com"],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Resend API error: ${error}`);
    }

    const result = await res.json();
    return new Response(JSON.stringify({ success: true, id: result.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
