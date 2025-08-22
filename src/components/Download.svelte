<script lang="ts">
	import { UAParser, type IOS, type ICPU } from 'ua-parser-js';
	import { onMount } from 'svelte';
	import { Grid2x2, TreePalm } from 'lucide-svelte';

	let osData: IOS = $state({} as IOS);
	let cpuData: ICPU = $state({} as ICPU);

	let os = $derived(osData.name);
	let cpu = $derived(cpuData.architecture);

	onMount(() => {
		const uap = new UAParser();
		osData = uap.getOS();
		cpuData = uap.getCPU();
		(uap.getOS().withClientHints() as Promise<IOS>).then((os) => (osData = os));
		(uap.getCPU().withClientHints() as Promise<ICPU>).then((cpu) => (cpuData = cpu));
	});

	const links: Record<string, Record<string, string>> = {
		windows: {
			amd64: 'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-windows-amd64.msi',
			arm64: 'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-windows-amd64.msi'
		},
		macos: {
			amd64: 'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-macos-amd64.dmg',
			arm64: 'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-macos-amd64.dmg'
		},
		linux: {
			amd64_deb: 'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-linux-amd64.deb',
			amd64_rpm: 'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-linux-amd64.rpm',
			amd64_appimage:
				'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-linux-amd64.AppImage',
			amd64_tar:
				'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-linux-amd64.tar.xz',

			arm64_deb: 'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-linux-arm64.deb',
			arm64_rpm: 'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-linux-arm64.rpm',
			arm64_appimage:
				'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-linux-arm64.AppImage',
			arm64_tar:
				'https://github.com/nyvo-labs/nyvo/releases/download/latest/nyvo-linux-arm64.tar.xz',

			aur: 'https://aur.archlinux.org/packages/nyvo-bin',
			flathub: 'https://flathub.org/apps/dev.leox.nyvo',
			snapcraft: 'https://snapcraft.io/nyvo'
		}
	};
</script>

<p class="mb-1 text-center text-xs font-semibold text-white uppercase">download for</p>

<div class="flex w-full items-center justify-center gap-2 text-white">
	<div
		class="flex aspect-5/1 h-12 items-center gap-2 rounded-lg bg-white p-2 px-3 text-green-600 transition hover:bg-green-600 hover:text-white"
	>
		<div>
			{#if os?.includes('Win')}
				<Grid2x2 />
			{:else}
				<TreePalm />
			{/if}
		</div>

		<div class="flex flex-col justify-center">
			<h3 class="text-lg leading-5 font-bold">
				{#if os?.includes('Win')}
					Windows
				{:else if os?.includes('macOS')}
					macOS
				{:else if os?.includes('Linux')}
					Linux
				{:else}
					Other
				{/if}
			</h3>
			<h4 class="text-xs leading-3">
				{#if os?.includes('Win')}
					Windows 10 or newer
				{:else if os?.includes('macOS')}
					macOS 10.13 or newer
				{:else if os?.includes('Linux')}
					Debian oldstable or newer
				{/if}
			</h4>
		</div>
	</div>

	<a href="/download" class="uppercase hover:underline">more</a>
</div>

<p class="mt-1 scale-80 text-center text-xs font-thin text-white uppercase">
	amd64 / arm64 cpu required
</p>
