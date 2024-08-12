<script lang="ts">
	import { name } from '$appconfig';

	export let data;
</script>

<svelte:head>
	<title>{data.meta?.title ?? 'Untitled'} | {name}</title>
</svelte:head>

<article data-pgname={data.pgname}>
	<svelte:component this={data.content} />
</article>
