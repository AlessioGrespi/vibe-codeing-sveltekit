<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { ArrowRight, Shield, Zap, Users, Palette } from 'lucide-svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<div class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-16 text-center">
		<div class="max-w-3xl mx-auto space-y-6">
			<h1 class="text-4xl md:text-6xl font-bold tracking-tight">
				Welcome to <span class="text-primary">Vibe Coding</span>
			</h1>
			<p class="text-xl text-muted-foreground max-w-2xl mx-auto">
				A modern SvelteKit application with authentication, built with shadcn-svelte components for a beautiful and accessible user experience.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button size="lg" asChild>
					<a class="flex gap-2 place-items-center" href="/login">
						Get Started
						<ArrowRight class="h-4 w-4" />
					</a>
				</Button>
				<Button variant="outline" size="lg" asChild>
					<a href="/protected">Explore</a>
				</Button>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="container mx-auto px-4 py-16">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Features</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				Built with modern technologies and best practices for a seamless development experience.
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
			<Card>
				<CardHeader>
					<Shield class="h-8 w-8 text-primary mb-2" />
					<CardTitle>Secure Authentication</CardTitle>
					<CardDescription>
						Built-in authentication with OAuth support for Google and GitHub, plus secure password management.
					</CardDescription>
				</CardHeader>
			</Card>
			
			<Card>
				<CardHeader>
					<Zap class="h-8 w-8 text-primary mb-2" />
					<CardTitle>Modern UI</CardTitle>
					<CardDescription>
						Beautiful, accessible components built with shadcn-svelte and Tailwind CSS for a consistent design system.
					</CardDescription>
				</CardHeader>
			</Card>
			
			<Card>
				<CardHeader>
					<Users class="h-8 w-8 text-primary mb-2" />
					<CardTitle>User Management</CardTitle>
					<CardDescription>
						Complete user profile management with email and password updates, protected routes, and session handling.
					</CardDescription>
				</CardHeader>
			</Card>
		</div>
	</section>

	<!-- Theme Switcher Demo -->
	<section class="container mx-auto px-4 py-16">
		<Card class="max-w-md mx-auto text-center">
			<CardHeader>
				<Palette class="h-8 w-8 text-primary mx-auto mb-2" />
				<CardTitle>Theme Switcher</CardTitle>
				<CardDescription>
					Try our new theme switcher with smooth transitions and visual feedback.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="flex justify-center">
					<ThemeSwitcher />
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- CTA Section -->
	<section class="container mx-auto px-4 py-16">
		<Card class="max-w-2xl mx-auto text-center">
			<CardHeader>
				<CardTitle class="text-2xl">Ready to get started?</CardTitle>
				<CardDescription>
					Join thousands of developers building amazing applications with modern tools and best practices.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button size="lg" asChild>
					<a href="/register">Create Account</a>
				</Button>
			</CardContent>
		</Card>
	</section>
</div>
