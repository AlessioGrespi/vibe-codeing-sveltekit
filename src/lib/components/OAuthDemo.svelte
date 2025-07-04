<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import OAuthSection from './OAuthSection.svelte';
	
	const allProviders = [
		{ provider: 'google', href: '/oauth/google' },
		{ provider: 'github', href: '/oauth/github' },
		{ provider: 'discord', href: '/oauth/discord' },
		{ provider: 'twitter', href: '/oauth/twitter' },
		{ provider: 'microsoft', href: '/oauth/microsoft' }
	];
</script>

<Card class="w-full max-w-md">
	<CardHeader>
		<CardTitle>OAuth Providers Demo</CardTitle>
		<CardDescription>
			All available OAuth providers with their brand guidelines
		</CardDescription>
	</CardHeader>
	<CardContent>
		<OAuthSection providers={allProviders} title="Available providers" />
	</CardContent>
</Card> 