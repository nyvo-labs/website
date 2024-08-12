<script lang="ts">
	export let url;
</script>

<a
	href={url}
	class="mt-4 w-fit rounded-lg border-2 border-white p-2 px-3 font-semibold no-underline transition hover:bg-white hover:text-black"
	><slot /></a
>
