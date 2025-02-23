import { connectToDatabase } from '@/lib/mongodb'
import Speaker from '@/models/Speaker'

export const GET = async (request, { params }) => {
  try {
    const { year } = params
    await connectToDatabase()

    // Use mongoose aggregation
    const speakers = await Speaker.aggregate([
      {
        $match: { year: Number(year) }
      },
      {
        $sort: { updatedAt: -1 }
      },
      {
        $group: {
          _id: "$cpf",
          doc: { $first: "$$ROOT" }
        }
      },
      {
        $replaceRoot: { newRoot: "$doc" }
      },
      {
        $sort: { fullName: 1 }
      }
    ]);

    return new Response(JSON.stringify(speakers), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}