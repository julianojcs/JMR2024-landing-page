import { NextResponse } from 'next/server'

export const GET = async (request) => {
  return NextResponse.json(
    {
      prismaUrl: process.env.POSTGRES_PRISMA_URL,
      nodeEnv: process.env.NODE_ENV,
      envSource: process.env
    }
  );
}