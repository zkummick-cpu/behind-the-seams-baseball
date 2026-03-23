import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any

    const email = session.customer_details?.email
    const customerId = session.customer
    const sessionId = session.id
    const programName = session.metadata?.programName || 'Program'
    const amount = session.amount_total || 0

    // Get the price ID from line items
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId)
    const priceId = lineItems.data[0]?.price?.id || ''
    const productId = lineItems.data[0]?.price?.product as string || ''

    // Store purchase in Supabase
    await supabaseAdmin.from('purchases').insert({
      email,
      stripe_session_id: sessionId,
      stripe_customer_id: customerId,
      product_id: productId,
      product_name: programName,
      price_id: priceId,
      amount,
    })

    // Send welcome email via Resend
    await resend.emails.send({
      from: 'Joseph Kummick <joseph@behindtheseamsbaseball.com>',
      to: email,
      subject: `✅ You're in — ${programName}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:2rem;">
          <h1 style="font-size:2rem;color:#1A1818;margin-bottom:0.5rem;">Welcome to the program.</h1>
          <p style="color:#5A5652;font-size:1rem;line-height:1.7;margin-bottom:1.5rem;">
            You just purchased <strong style="color:#1A1818;">${programName}</strong>.
            Create your account to access your materials anytime from your dashboard.
          </p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/sign-up"
             style="display:inline-block;background:#C8102E;color:#fff;padding:0.75rem 1.5rem;text-decoration:none;font-size:0.85rem;letter-spacing:0.15em;text-transform:uppercase;">
            Create Your Account →
          </a>
          <p style="margin-top:2rem;color:#8A8480;font-size:0.85rem;line-height:1.7;">
            Use the same email address you purchased with (<strong>${email}</strong>) when creating your account
            so your programs are linked automatically.<br/><br/>
            Questions? DM me on Instagram <a href="https://instagram.com/behind.the.seams.baseball" style="color:#C8102E;">@behind.the.seams.baseball</a>
          </p>
          <hr style="border:none;border-top:1px solid #eee;margin:2rem 0;"/>
          <p style="color:#8A8480;font-size:0.8rem;">Behind the Seams Baseball · Joseph Kummick</p>
        </div>
      `,
    })
  }

  return NextResponse.json({ received: true })
}
