import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(req) {
  // Redirecionamento simples para a página de confirmação
  return NextResponse.redirect(new URL('/payment/confirmation', req.url));
}

export async function POST(req) {
  // O mesmo redirecionamento para chamadas POST
  return NextResponse.redirect(new URL('/payment/confirmation', req.url));
}