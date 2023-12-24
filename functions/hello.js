export async function onRequest(context) {
	let allNewspapers = await context.env.db.prepare('SELECT * FROM newspaper').all()
	let files = await context.env.bucket.list()

	let text = {"results": allNewspapers,
				"files": files.objects,}

  return new Response(JSON.stringify(text))
}