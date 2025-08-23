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
	class="mt-[5lvh] mb-12 flex w-full flex-col gap-12 px-6 text-white sm:flex-row lg:gap-24 xl:mt-[35lvh] xl:mb-0 xl:-translate-y-[calc(50%+4.5rem)] xl:px-0"
	id="hero-main"
>
	<div class="sm:basis-1/3">
		<SvgLogo />
	</div>
	<div class="flex flex-col items-start justify-center gap-4 sm:basis-2/3">
		<h1 class="font-serif text-5xl lg:text-6xl xl:text-8xl">
			<Typewriter text={'Your files,\nneatly \0handled.'} breaks="sm" speed={75} delay={500} />
		</h1>
		<div class="flex w-[75%] flex-col items-start gap-4">
			<hr class="w-0 border border-white opacity-0" />
			<h2 class="text-base md:text-lg lg:text-xl xl:text-2xl">
				<Typewriter
					text={'fast, secure, \0and beautifully minimal.'}
					breaks="md"
					speed={50}
					delay={3000}
				/>
			</h2>
		</div>
	</div>
</hgroup>

<h2
	class="mb-8 text-center text-sm font-thin text-white lowercase lg:text-base xl:mb-0 xl:-translate-y-[calc(50%+8.5rem)] xl:text-lg"
>
	Open Source | Written in Rust | Cross-Platform
</h2>

<Download />

<br />
<br />

<UiWindow title="Nyvo" />
