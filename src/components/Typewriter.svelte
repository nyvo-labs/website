<script lang="ts">
	type Props = {
		text: string;
		speed?: number;
		delay?: number;
	};

	let { text, speed = 100, delay = 0 }: Props = $props();

	let letters = $derived(text.split(''));
</script>

{#each letters as letter, i}
	{#if letter === '\n'}
		<br />
	{:else}
		<span
			class="inline-block -translate-y-[5%] opacity-0"
			style="animation: fade-in {speed}ms linear forwards, fly-in {speed}ms linear forwards; animation-delay: {i *
				speed +
				delay}ms;"
		>
			{#if letter === ' '}
				&nbsp;
			{:else}
				{letter}
			{/if}
		</span>
	{/if}
{/each}
