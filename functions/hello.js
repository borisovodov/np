export async function onRequest(context) {
	//async function getFilesList(env) {
	//  return await env.bucket.list()
	//}

	let allNewspapers = await context.env.db.prepare('SELECT * FROM newspaper').all()

	let text = {"results": allNewspapers}

  return new Response(JSON.stringify(text))
	//return new Response("Helllllooooooo!!")
}