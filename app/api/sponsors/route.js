export const GET = async (request) => {
  try {
    return new Response(
      JSON.stringify({ message: 'Hello from the Sponsors API' }),
      {
        status: 200
      }
    )
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}
