<script lang="ts">
	import { enhance } from '$app/forms';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import OAuthSection from '$lib/components/OAuthSection.svelte';
	
	export let form: any;
	
	const oauthProviders = [
		{ provider: 'google', href: '/oauth/google' },
		{ provider: 'github', href: '/oauth/github' }
	];
</script>

<div class="min-h-screen flex items-center justify-center bg-background p-4">
	<Card class="w-full max-w-md">
		<CardHeader class="space-y-1">
			<CardTitle class="text-2xl text-center">Login</CardTitle>
			<CardDescription class="text-center">
				Enter your credentials to access your account
			</CardDescription>
		</CardHeader>
		<CardContent class="space-y-4">
			<form method="POST" use:enhance class="space-y-4">
				<div class="space-y-2">
					<Label for="email">Email</Label>
					<Input 
						id="email" 
						name="email" 
						type="email" 
						required 
						autocomplete="email"
						placeholder="Enter your email"
					/>
				</div>

				<div class="space-y-2">
					<Label for="password">Password</Label>
					<Input 
						id="password" 
						name="password" 
						type="password" 
						required 
						autocomplete="current-password"
						placeholder="Enter your password"
					/>
				</div>

				<Button type="submit" class="w-full">
					Login
				</Button>

				{#if form?.error}
					<p class="text-sm text-destructive text-center">{form.error}</p>
				{/if}
			</form>

			<OAuthSection providers={oauthProviders} />
		</CardContent>
	</Card>
</div>
