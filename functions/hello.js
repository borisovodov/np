export async function onRequest(context) {
	async function getAllNewspapers(env) {
  		return await env.db.prepare('SELECT * FROM newspaper').all()
	}

	//async function getFilesList(env) {
	//  return await env.bucket.list()
	//}

	let allNewspapers = await getAllNewspapers(env)

	//let text = {"results": allNewspapers}

  //return new Response(JSON.stringify(text))
	return new Response("Helllllooooooo!!")
}