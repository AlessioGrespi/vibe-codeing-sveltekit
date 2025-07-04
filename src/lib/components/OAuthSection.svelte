<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import OAuthButton from './OAuthButton.svelte';
	
	export let providers: Array<{ provider: 'google' | 'github' | 'discord' | 'twitter' | 'microsoft'; href: string }>;
	export let title: string = 'Or continue with';
</script>

<div class="space-y-4">
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<Separator class="w-full" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background px-2 text-muted-foreground">
				{title}
			</span>
		</div>
	</div>

	<div class="flex flex-col gap-3">
		{#each providers as { provider, href }}
			<OAuthButton {provider} {href} />
		{/each}
	</div>
</div> 