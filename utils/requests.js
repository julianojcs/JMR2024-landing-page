//const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null
//
////Fetch all properties
//async function fetchProperties() {
//  try {
//    //Handle the case where the API domain is not set
//    if (!apiDomain) {
//      throw new Error('API domain not set')
//    }
//
//    const response = await fetch(`${apiDomain}/properties`, {
//      cache: 'no-store'
//    })
//
//    if (!response.ok) {
//      throw new Error('Error fetching properties')
//    }
//
//    return await response.json()
//  } catch (error) {
//    console.error(`Error: ${error.message}`)
//    return []
//  }
//}
//
////Fetch single property
//async function fetchProperty(id) {
//  try {
//    //Handle the case where the API domain is not set
//    if (!apiDomain) {
//      throw new Error('API domain not set')
//    }
//
//    const response = await fetch(`${apiDomain}/properties/${id}`)
//
//    if (!response.ok) {
//      throw new Error('Error fetching properties')
//    }
//
//    return await response.json()
//  } catch (error) {
//    console.error(`Error: ${error.message}`)
//    return null
//  }
//}
//
//export { fetchProperties, fetchProperty }
