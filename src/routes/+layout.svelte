<script lang="ts">
	import '$styles/tailwind.css';
	import '$styles/global.scss';

	import app from '$appconfig';
	import { page } from '$app/state';

	let root = $derived(page.url.pathname === '/');

	let { children } = $props();

	const oneYear = new Date().getFullYear() == app.footer.copyright.since;
</script>

<svelte:head>
	<title>Untitled | {app.name}</title>
</svelte:head>

<!-- TODO: add navigation for mobile -->
<nav
	class="fixed top-4 left-4 flex h-12 w-[calc(100%-2rem)] rounded-lg border border-neutral-500 bg-transparent text-zinc-800 backdrop-blur-md {root
		? 'rootstyle'
		: ''} z-100"
>
	<a href="/" class="flex basis-1/4 items-center gap-2 px-3 py-2">
		<img src="/logo.svg" alt="{app.name} logo" class="size-7" />
		<h1 class="font-serif text-2xl font-bold">{app.name}</h1>
	</a>
	<ul class="mr-3 flex basis-1/2 items-center justify-center gap-2">
		{#each app.nav as { title, url }, i}
			<li
				class="flex h-6 items-center pl-1 {i + 1 == app.nav.length
					? ''
					: 'border-r border-r-neutral-500 pr-3'}"
			>
				<a href={url} class="underline decoration-transparent transition hover:decoration-white"
					>{title}</a
				>
			</li>
		{/each}
	</ul>
	<ul class="flex basis-1/4 justify-end gap-2 p-2">
		{#each app.buttons as { title, url, highlight }}
			<a
				href={url}
				class="flex h-full items-center justify-center rounded-md border border-white px-2 font-bold transition hover:border-sky-600 hover:bg-sky-600 hover:text-white {highlight
					? 'bg-white text-black'
					: ''}"
			>
				{title}
			</a>
		{/each}
	</ul>
</nav>
<main class="min-h-lvh w-full p-2 pt-18 text-zinc-800 {root ? 'rootstyle' : ''}">
	<div class="{root ? '' : 'prose prose-zinc'} mx-auto my-6 h-fit w-full max-w-[50rem]">
		{@render children()}
	</div>
</main>
<footer class="bg-green-800 text-white">
	<p class="p-1 text-center text-sm font-medium">
		&copy; {oneYear
			? app.footer.copyright.since
			: `${app.footer.copyright.since}-${new Date().getFullYear()}`}
		<a href={app.footer.copyright.url ?? '/'} class="underline">{app.footer.copyright.owner}</a>
	</p>
</footer>
