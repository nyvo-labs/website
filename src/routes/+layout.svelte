<script lang="ts">
	import '$styles/global.scss';

	import app from '$appconfig';

	const oneYear = new Date().getFullYear() == app.footer.copyright.since;
</script>

<svelte:head>
	<title>Untitled | {app.name}</title>
</svelte:head>

<div class="h-12 w-full bg-black"></div>

<!-- TODO: add navigation for mobile -->
<nav
	class="fixed left-0 top-0 flex h-12 w-full border-b border-b-neutral-500 bg-transparent text-white backdrop-blur-lg"
>
	<a href="/" class="flex">
		<header class="flex w-fit items-center gap-2 px-2 py-2">
			<img src="/logo.svg" alt="{app.name} logo" class="size-8" />
			<h1 class="text-xl font-medium">{app.name}</h1>
		</header>
	</a>
	<ul class="mr-3 flex grow items-center justify-center gap-2">
		{#each app.nav as { title, url }, i}
			<li
				class="flex h-6 items-center pl-1 {i + 1 == app.nav.length
					? ''
					: 'border-r-2 border-r-neutral-500 pr-3'}"
			>
				<a href={url} class="underline decoration-transparent transition hover:decoration-teal-600"
					>{title}</a
				>
			</li>
		{/each}
	</ul>
	<ul class="mr-2 flex items-center gap-2">
		{#each app.buttons as { title, url, highlight }}
			<li class="flex h-6 items-center">
				<a
					href={url}
					class="rounded-lg border-2 border-white px-2 py-1 font-bold transition {highlight
						? 'bg-white text-black hover:border-teal-600 hover:bg-teal-600 hover:text-white'
						: 'hover:bg-white hover:text-black'}">{title}</a
				>
			</li>
		{/each}
	</ul>
</nav>
<main class="min-h-[calc(100vh-3rem)] w-full bg-black p-2 text-white">
	<div class="prose prose-slate prose-invert mx-auto my-6 h-fit w-full max-w-[50rem]">
		<slot />
	</div>
</main>
<footer class="border-t border-t-neutral-500 bg-black text-white">
	<p class="p-1 text-center text-sm font-medium">
		&copy; {oneYear
			? app.footer.copyright.since
			: `${app.footer.copyright.since}-${new Date().getFullYear()}`}
		<a href={app.footer.copyright.url ?? '/'} class="underline">{app.footer.copyright.owner}</a>
	</p>
</footer>
