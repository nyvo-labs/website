<script lang="ts">
	import Download from '$c/Download.svelte';
	import SvgLogo from '$c/SvgLogo.svelte';
	import Typewriter from '$c/Typewriter.svelte';
	import UiWindow from '$c/UiWindow.svelte';
</script>

<svelte:head>
	<title>Home | Nyvo</title>
</svelte:head>

<hgroup
	class="mt-[35lvh] flex w-full -translate-y-[calc(50%+4.5rem)] gap-24 text-white"
	id="hero-main"
>
	<div class="basis-1/3">
		<SvgLogo />
	</div>
	<div class="flex basis-2/3 flex-col items-start justify-center gap-4">
		<h1 class="font-serif text-8xl">
			<Typewriter text={'Your files,\nneatly handled.'} speed={75} delay={500} />
		</h1>
		<div class="flex w-[75%] flex-col items-start gap-4">
			<hr class="w-0 border border-white opacity-0" />
			<h2 class="text-2xl">
				<Typewriter text="fast, secure, and beautifully minimal." speed={50} delay={3000} />
			</h2>
		</div>
	</div>
</hgroup>

<Download />

<br />
<br />

<UiWindow title="Nyvo" />
