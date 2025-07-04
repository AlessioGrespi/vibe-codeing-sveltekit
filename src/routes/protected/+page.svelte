<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Settings, User, Shield, Activity } from 'lucide-svelte';
	import type { PageProps } from './$types';
	
	let { data }: PageProps = $props();
</script>

<div class="container mx-auto max-w-6xl p-6 space-y-6">
	<!-- Header -->
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
		<div>
			<h1 class="text-3xl font-bold">Dashboard</h1>
			<p class="text-muted-foreground">Welcome back! Here's what's happening with your account.</p>
		</div>
		<Button asChild>
			<a class="flex gap-2 place-items-center" href="/protected/settings">
				<Settings class="h-4 w-4" />
				Settings
			</a>
		</Button>
	</div>

	<!-- User Info Card -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<User class="h-5 w-5" />
				Account Information
			</CardTitle>
			<CardDescription>
				Your account details and current status
			</CardDescription>
		</CardHeader>
		<CardContent class="space-y-4">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label class="text-sm font-medium text-muted-foreground">Email</label>
					<p class="text-lg">{data.user?.email}</p>
				</div>
				<div>
					<label class="text-sm font-medium text-muted-foreground">User ID</label>
					<p class="text-lg">{data.user?.id}</p>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<Badge variant="secondary" class="flex items-center gap-1">
					<Shield class="h-3 w-3" />
					Authenticated
				</Badge>
			</div>
		</CardContent>
	</Card>

	<!-- Quick Actions -->
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Settings class="h-5 w-5" />
					Account Settings
				</CardTitle>
				<CardDescription>
					Manage your account preferences and security settings
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button variant="outline" class="w-full" asChild>
					<a href="/protected/settings">Go to Settings</a>
				</Button>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Activity class="h-5 w-5" />
					Activity
				</CardTitle>
				<CardDescription>
					View your recent activity and account usage
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button variant="outline" class="w-full" disabled>
					Coming Soon
				</Button>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Shield class="h-5 w-5" />
					Security
				</CardTitle>
				<CardDescription>
					Review and manage your security settings
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button variant="outline" class="w-full" disabled>
					Coming Soon
				</Button>
			</CardContent>
		</Card>
	</div>

	<!-- Welcome Message -->
	<Card class="bg-muted/50">
		<CardContent class="pt-6">
			<div class="text-center space-y-2">
				<h3 class="text-lg font-semibold">🎉 Welcome to your protected dashboard!</h3>
				<p class="text-muted-foreground">
					This page is only accessible to authenticated users. You can manage your account settings, 
					view your profile information, and access other protected features from here.
				</p>
			</div>
		</CardContent>
	</Card>
</div>
