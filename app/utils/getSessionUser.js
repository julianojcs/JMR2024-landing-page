import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/src/utils/authOptions'

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated
    if (!session || !session.user) {
      return null
    }
    return {
      user: session.user,
      userId: session.user.id
    }
  } catch (error) {
    console.error(`Error: ${error.message}`)
    return null
  }
}
