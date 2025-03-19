import { NextResponse } from 'next/server'
import pagarme from 'pagarme'

export async function POST(request) {
  try {
    const data = await request.json()

    const client = await pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY })

    const transaction = await client.transactions.create({
      amount: data.amount,
      card_number: data.card_number,
      card_holder_name: data.card_holder_name,
      card_expiration_date: data.card_expiration_date,
      card_cvv: data.card_cvv,
      customer: {
        external_id: data.cpf,
        name: data.fullName,
        email: data.email,
        type: 'individual',
        country: 'br',
        documents: [{
          type: 'cpf',
          number: data.cpf
        }]
      },
      billing: {
        name: data.fullName,
        address: data.address
      }
    })

    if (transaction.status === 'paid') {
      // Enviar email de confirmação
      await sendConfirmationEmail(data.email, transaction)
    }

    return NextResponse.json({ status: transaction.status })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}