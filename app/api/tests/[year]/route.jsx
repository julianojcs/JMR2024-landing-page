import { connectToDatabase } from '@/app/lib/database'
import Speaker from '@/models/Speaker'

export const GET = async (request, { params }) => {
  try {
    const { year } = params
    console.log('year', year)

    await connectToDatabase()

    // const speakers = await Speaker.find({ year }).sort({ name: 1 })
    // console.log('speakers', speakers)

    // return new Response(JSON.stringify(speakers), {
    return new Response(
      { message: 'Hello from the Test API' },
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60, s-maxage=60' },
      }
    )
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}