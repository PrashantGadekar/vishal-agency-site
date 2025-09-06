export default async function Icon() {
  // Redirect to the ICO file
  return new Response(null, {
    status: 302,
    headers: {
      'Location': '/TheViSocial.ico'
    }
  })
}
