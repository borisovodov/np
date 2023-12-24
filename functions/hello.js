export function onRequest(context) {
	async function getAllNewspapers(env) {
  		return await env.db.prepare('SELECT * FROM newspaper').all()
	}

	async function getFilesList(env) {
	  return await env.bucket.list()
	}

	function getResponse(answer) {
	  return new Response(
	    JSON.stringify(answer))
	}

	let text = "results": allNewspapers,
      "files": files.objects,

    let response = getResponse(text)

  return response
}