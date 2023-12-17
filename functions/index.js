export function onRequest(context) {
	console.log(await context.env.db.prepare('SELECT * FROM newspaper').all())
}