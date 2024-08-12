import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(
			`$pages/${params.path.length > 0 ? params.path.split('.')[0].replaceAll('/', '_') : 'index'}.md`
		);

		return {
			content: post.default,
			meta: post.metadata,
			pgname: params.path.length > 0 ? params.path.split('.')[0].replaceAll('/', '_') : 'index'
		};
	} catch (e) {
		console.error(e);
		try {
			const post = await import(`$pages/${params.path.split('.')[0].replaceAll('/', '_') + (params.path.endsWith('/') ? '' : '_')}.md`);

			return {
				content: post.default,
				meta: post.metadata,
				pgname: params.path.split('.')[0].replaceAll('/', '_') + (params.path.endsWith('/') ? '' : '_')
			};
		} catch (e) {
			console.error(e);
			error(404, `Not Found`);
		}
	}
}
