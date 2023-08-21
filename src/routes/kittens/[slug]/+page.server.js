import { error } from '@sveltejs/kit';

import { kittens } from '../data.js';

export function load({ params }) {
	const kitten = kittens.find((kitten) => kitten.id === params.slug);
	if (!kitten) throw error(404);
	return {
		kitten
	};
}
