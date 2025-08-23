<script lang="ts">
	type Props = {
		text: string;
		speed?: number;
		delay?: number;
		breaks?: 'sm' | 'md' | 'lg' | 'xl';
	};

	let { text, speed = 100, delay = 0, breaks = 'xl' }: Props = $props();

	let letters = $derived(text.split(''));
</script>

{#each letters as letter, i}
	{#if letter === '\n'}
		<br />
	{:else if letter === '\0'}
		<br
			class={[
				breaks === 'sm' ? 'sm:hidden' : '',
				breaks === 'md' ? 'md:hidden' : '',
				breaks === 'lg' ? 'lg:hidden' : '',
				breaks === 'xl' ? 'xl:hidden' : ''
			]}
		/>
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
