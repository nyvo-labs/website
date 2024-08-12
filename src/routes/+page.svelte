<script lang="ts">
	import Button from '$c/Button.svelte';
</script>

<svelte:head>
	<title>Home | Acridotheres</title>
</svelte:head>

<div class="m-0 flex h-[calc(66vh)] items-center">
	<div class="flex flex-auto flex-col justify-center">
		<h1 class="m-0 text-6xl font-normal">
			This is<br /><span class="fancy font-semibold">Acridotheres</span>.
		</h1>
		<p class="mb-0 text-xl lowercase">Fast. Modern. Open-source. Secure.</p>
		<Button url="/download">Download now</Button>
	</div>
	<img src="/logo.png" alt="Acridotheres logo" class="m-0 size-96" />
</div>

<div class="mb-16 flex items-center">
	<div class="flex flex-auto flex-col justify-center">
		<h1 class="m-0 text-4xl font-normal">Supports Over <span class="fancy font-semibold">100 Formats</span></h1>
		<p class="mb-0 text-xl">
			Acridotheres offers compatibility with more than 100 file formats, ensuring you can work with
			virtually any archive you encounter. Whether it's legacy formats like ZIP or RAR, or more
			modern ones like 7Z and PEA, Acridotheres has you covered.
		</p>
		<Button url="https://developers.acridotheres.com/formats">View supported formats</Button>
	</div>
</div>

<div class="my-16 flex items-center">
	<div class="flex flex-auto flex-col justify-center">
		<h1 class="m-0 text-4xl font-normal">Introducing the <span class="fancy font-semibold">HSSP format</span></h1>
		<p class="mb-0 text-xl">
			Experience the next generation of file archiving with the HSSP format, developed exclusively
			for Acridotheres. Designed to outperform most of the existing archiving formats, the HSSP
			format offers a wide spectrum of supported compression algorithms, faster processing times,
			enhanced security and many more features — all fully documented and open-source with new
			features being added regularly.
		</p>
		<Button url="https://developers.acridotheres.com/formats/hssp">Read the specification</Button>
	</div>
</div>

<div class="my-16 flex items-center">
	<div class="flex flex-auto flex-col justify-center">
		<h1 class="m-0 text-4xl font-normal"><span class="fancy font-semibold">Open Source</span>, Community-Driven</h1>
		<p class="mb-0 text-xl">
			Acridotheres is built with transparency and collaboration in mind. The CLI, Desktop, Mobile
			apps, and Core Library are all fully open-source, allowing you to explore, modify, and
			contribute to the project. Whether you're looking to customize your experience or contribute
			to a growing community, Acridotheres provides the tools you need.
		</p>
		<Button url="https://github.com/acridotheres/acridotheres">Contribute on GitHub</Button>
	</div>
</div>

<div class="my-16 flex items-center">
	<div class="flex flex-auto flex-col justify-center">
		<h1 class="m-0 text-4xl font-normal">Comprehensive <span class="fancy font-semibold">Documentation</span></h1>
		<p class="mb-0 text-xl">
			Dive into detailed documentation that covers every aspect of Acridotheres, from basic usage to
			advanced features. Whether you're a developer looking to integrate Acridotheres into your own
			projects, or a power user wanting to master every function, our documentation has you covered.
		</p>
		<Button url="/guide/get-started">Get Started</Button>
	</div>
</div>

<div class="my-16 flex items-center">
	<div class="flex flex-auto flex-col justify-center">
		<h1 class="m-0 text-4xl font-normal"><span class="fancy font-semibold">Customizable</span> Compression Settings</h1>
		<p class="mb-0 text-xl">
			Tailor your archiving process with Acridotheres' advanced compression settings. Choose the
			perfect balance between speed and file size, or opt for maximum security with encrypted
			archives. Whatever your needs, Acridotheres adapts to you.
		</p>
		<Button url="/guide/advanced">View Advanced options</Button>
	</div>
</div>

<div class="my-16 flex items-center">
	<div class="flex flex-auto flex-col justify-center">
		<h1 class="m-0 text-4xl font-normal">Lightweight and <span class="fancy font-semibold">Efficient</span></h1>
		<p class="mb-0 text-xl">
			Acridotheres is designed to be lightweight, using minimal system resources while delivering
			maximum performance. Whether you're working on an older machine or the latest hardware,
			Acridotheres ensures smooth operation without compromising on power.
		</p>
		<p class="mb-0 text-xl">
			To achieve that, Acridotheres was written in <a href="https://www.rust-lang.org/">Rust</a>, a very fast & memory safe programming
			language.
		</p>
	</div>
</div>

<div class="my-16 flex items-center">
	<div class="flex flex-auto flex-col justify-center">
		<h1 class="m-0 text-4xl font-normal"><span class="fancy font-semibold">Cross-Platform</span> Availability</h1>
		<p class="mb-0 text-xl">
			No matter your operating system, Acridotheres is ready to work. With support for Windows,
			macOS, and Linux, as well as mobile compatibility, you can manage your archives seamlessly
			across all your devices. (Mobile apps are coming soon!)
		</p>
		<Button url="/download">Download Acridotheres for Your Platform</Button>
	</div>
</div>
