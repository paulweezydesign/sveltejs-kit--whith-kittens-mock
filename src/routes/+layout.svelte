<script>
	import Header from './Header.svelte';
	import './styles.css';
		import { SvelteUIProvider } from '@svelteuidev/core';
</script>
<SvelteUIProvider  withGlobalStyles themeObserver={'dark'}>
<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
</SvelteUIProvider >
<style>
	.dark-theme {
		background: black;
		color: white;
	}
</style>
