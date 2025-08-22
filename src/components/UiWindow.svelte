<script lang="ts">
	import { X, Maximize, Minus } from 'lucide-svelte';

	export let title: string;
</script>

<div
	class="flex aspect-3/2 w-full overflow-x-hidden overflow-y-auto rounded-lg border border-white/25 bg-black/25 text-white"
>
	<div class="flex h-6 w-full items-center justify-center bg-black/25 pl-2 text-sm">
		<img src="/logo.svg" alt="Nyvo logo" class="mr-1.5 size-3" />
		<span class="grow">{title}</span>
		<div class="flex h-full w-9 items-center justify-center bg-transparent hover:bg-white/10">
			<Minus class="size-4" />
		</div>
		<div class="flex h-full w-9 items-center justify-center bg-transparent hover:bg-white/10">
			<Maximize class="size-4" />
		</div>
		<div class="flex h-full w-9 items-center justify-center bg-transparent hover:bg-red-600">
			<X class="size-4" />
		</div>
	</div>
	<div>
		<slot />
	</div>
</div>
