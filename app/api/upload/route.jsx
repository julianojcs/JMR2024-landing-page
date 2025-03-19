import { NextResponse } from 'next/server'
import cloudinary from '@/app/lib/cloudinary'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const result = await cloudinary.uploader.upload(
      `data:${file.type};base64,${buffer.toString('base64')}`,
      { folder: 'registration-docs' }
    )

    return NextResponse.json({ url: result.secure_url })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}