import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

const directus = createDirectus('http://qac.projektvenice.ch').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});