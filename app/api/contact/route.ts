import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, level, message } = await req.json()

    await resend.emails.send({
      from: 'Website Contact <noreply@behindtheseamsbaseball.com>',
      to: 'joseph@behindtheseamsbaseball.com',
      subject: `New inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:2rem;">
          <h2 style="color:#1A1818;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:1rem;">
            <tr><td style="padding:0.5rem 0;color:#5A5652;font-size:0.9rem;">Name:</td><td style="padding:0.5rem 0;font-weight:600;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:0.5rem 0;color:#5A5652;font-size:0.9rem;">Email:</td><td style="padding:0.5rem 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:0.5rem 0;color:#5A5652;font-size:0.9rem;">Level:</td><td style="padding:0.5rem 0;">${level}</td></tr>
          </table>
          <div style="margin-top:1.5rem;padding:1rem;background:#f5f2ed;border-left:3px solid #C8102E;">
            <p style="color:#1A1818;line-height:1.7;">${message}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
