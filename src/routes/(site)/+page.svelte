<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { 
		ArrowRight, 
		Shield, 
		Zap, 
		Users, 
		Palette, 
		Lock, 
		Key, 
		Eye, 
		ShieldCheck, 
		AlertTriangle,
		CheckCircle,
		Clock,
		Database,
		Globe,
		Settings,
		Fingerprint,
		Server,
		Code,
		BarChart3
	} from 'lucide-svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<!-- Security Checklist -->
<section class="container mx-auto px-4 py-16">
	<div class="text-center mb-12">
		<h2 class="text-3xl font-bold mb-4">Security Implementation Checklist</h2>
		<p class="text-muted-foreground max-w-2xl mx-auto">
			Comprehensive overview of all security measures implemented in this application
		</p>
	</div>
	
	<div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
		<!-- Implemented Security Measures -->
		<Card>
			<CardHeader>
				<div class="flex items-center gap-3">
					<CheckCircle class="h-6 w-6 text-green-600" />
					<CardTitle>✅ Implemented Security Measures</CardTitle>
				</div>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-3">
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Strong password requirements (8+ chars, uppercase, number, symbol)</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Secure password hashing with bcrypt (cost factor 12)</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Session-based authentication with secure cookies</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">OAuth 2.0 integration with PKCE for Google</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">GitHub OAuth integration with standard flow</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Rate limiting for login and registration</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Input validation and sanitization</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Route protection with centralized authentication</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">SQL injection prevention with Drizzle ORM</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">CSRF protection with state parameters and SameSite cookies</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">XSS prevention with HttpOnly cookies</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Secure error handling without information disclosure</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Automatic session cleanup and expiration</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Environment-based security configuration</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Type-safe database operations</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-4 w-4 text-green-600" />
						<span class="text-sm">Modern, maintained security libraries</span>
					</div>
				</div>
			</CardContent>
		</Card>

		<!-- Future Security Enhancements -->
		<Card>
			<CardHeader>
				<div class="flex items-center gap-3">
					<Clock class="h-6 w-6 text-blue-600" />
					<CardTitle>🔄 Future Security Enhancements</CardTitle>
				</div>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-3">
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Two-factor authentication (2FA) implementation</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Email verification system</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Password reset functionality</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Account lockout after failed attempts</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Security audit logging</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Content Security Policy (CSP) headers</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Security headers middleware</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">API rate limiting</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Database connection pooling</span>
					</div>
					<div class="flex items-center gap-2">
						<AlertTriangle class="h-4 w-4 text-yellow-600" />
						<span class="text-sm">Backup and recovery procedures</span>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</section>


<div class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-16 text-center">
		<div class="max-w-4xl mx-auto space-y-6">
			<div class="flex justify-center mb-4">
				<Badge variant="secondary" class="text-sm">
					<ShieldCheck class="h-3 w-3 mr-1" />
					Enterprise-Grade Security
				</Badge>
			</div>
			<h1 class="text-4xl md:text-6xl font-bold tracking-tight">
				Secure by <span class="text-primary">Design</span>
			</h1>
			<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
				A production-ready SvelteKit application implementing industry-standard security practices. 
				From OAuth 2.0 to rate limiting, every aspect is built with security in mind.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button size="lg" asChild>
					<a class="flex gap-2 place-items-center" href="/login">
						<Shield class="h-4 w-4" />
						Secure Login
						<ArrowRight class="h-4 w-4" />
					</a>
				</Button>
				<Button variant="outline" size="lg" asChild>
					<a href="/protected">Protected Demo</a>
				</Button>
			</div>
		</div>
	</section>

	<!-- Security Overview -->
	<section class="container mx-auto px-4 py-16">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Comprehensive Security Implementation</h2>
			<p class="text-muted-foreground max-w-3xl mx-auto">
				This application implements multiple layers of security following OWASP guidelines and industry best practices.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
			<Card class="border-green-200 dark:border-green-800">
				<CardHeader class="text-center">
					<Lock class="h-8 w-8 text-green-600 mx-auto mb-2" />
					<CardTitle>Authentication</CardTitle>
					<CardDescription>
						Multi-provider auth with OAuth 2.0, bcrypt hashing, and secure sessions
					</CardDescription>
				</CardHeader>
			</Card>
			
			<Card class="border-blue-200 dark:border-blue-800">
				<CardHeader class="text-center">
					<Shield class="h-8 w-8 text-blue-600 mx-auto mb-2" />
					<CardTitle>Session Security</CardTitle>
					<CardDescription>
						Secure cookies, automatic expiration, and single session per user
					</CardDescription>
				</CardHeader>
			</Card>
			
			<Card class="border-purple-200 dark:border-purple-800">
				<CardHeader class="text-center">
					<BarChart3 class="h-8 w-8 text-purple-600 mx-auto mb-2" />
					<CardTitle>Rate Limiting</CardTitle>
					<CardDescription>
						Protection against brute force attacks with intelligent throttling
					</CardDescription>
				</CardHeader>
			</Card>
			
			<Card class="border-orange-200 dark:border-orange-800">
				<CardHeader class="text-center">
					<Database class="h-8 w-8 text-orange-600 mx-auto mb-2" />
					<CardTitle>Data Protection</CardTitle>
					<CardDescription>
						Type-safe database operations with SQL injection prevention
					</CardDescription>
				</CardHeader>
			</Card>
		</div>
	</section>

	<!-- Detailed Security Features -->
	<section class="container mx-auto px-4 py-16">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Security Features Breakdown</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				Explore the comprehensive security measures implemented in this application
			</p>
		</div>
		
		<div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
			<!-- Authentication Security -->
			<Card>
				<CardHeader>
					<div class="flex items-center gap-3">
						<Fingerprint class="h-6 w-6 text-primary" />
						<CardTitle>Authentication Security</CardTitle>
					</div>
				</CardHeader>
				<CardContent class="space-y-4">
					<div class="space-y-3">
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">Strong password requirements (8+ chars, uppercase, number, symbol)</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">bcrypt password hashing with cost factor 12</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">OAuth 2.0 with PKCE for Google, standard flow for GitHub</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">CSRF protection with state parameters</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Session Management -->
			<Card>
				<CardHeader>
					<div class="flex items-center gap-3">
						<Key class="h-6 w-6 text-primary" />
						<CardTitle>Session Management</CardTitle>
					</div>
				</CardHeader>
				<CardContent class="space-y-4">
					<div class="space-y-3">
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">Cryptographically secure session tokens (nanoid)</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">HttpOnly cookies with SameSite protection</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">30-day session expiration with automatic cleanup</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">Single active session per user</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Rate Limiting & Protection -->
			<Card>
				<CardHeader>
					<div class="flex items-center gap-3">
						<AlertTriangle class="h-6 w-6 text-primary" />
						<CardTitle>Rate Limiting & Protection</CardTitle>
					</div>
				</CardHeader>
				<CardContent class="space-y-4">
					<div class="space-y-3">
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">5 failed login attempts per IP (10-minute window)</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">Registration rate limiting (5 attempts per IP)</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">HTTP 429 responses with user-friendly messages</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">Automatic counter reset on successful authentication</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Data Security -->
			<Card>
				<CardHeader>
					<div class="flex items-center gap-3">
						<Server class="h-6 w-6 text-primary" />
						<CardTitle>Data & Infrastructure Security</CardTitle>
					</div>
				</CardHeader>
				<CardContent class="space-y-4">
					<div class="space-y-3">
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">Type-safe database operations with Drizzle ORM</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">SQL injection prevention with parameterized queries</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">Environment-based security configuration</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle class="h-4 w-4 text-green-600" />
							<span class="text-sm">Secure error handling without information disclosure</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>

	<!-- Security Standards -->
	<section class="container mx-auto px-4 py-16">
		<Card class="max-w-4xl mx-auto">
			<CardHeader class="text-center">
				<div class="flex justify-center mb-4">
					<ShieldCheck class="h-12 w-12 text-primary" />
				</div>
				<CardTitle class="text-2xl">Built to Industry Standards</CardTitle>
				<CardDescription>
					This application follows OWASP guidelines and implements NIST Digital Identity Guidelines
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="grid md:grid-cols-3 gap-6">
					<div class="text-center">
						<Globe class="h-8 w-8 text-blue-600 mx-auto mb-2" />
						<h3 class="font-semibold mb-1">OWASP Compliant</h3>
						<p class="text-sm text-muted-foreground">Follows OWASP Top 10 security guidelines</p>
					</div>
					<div class="text-center">
						<Settings class="h-8 w-8 text-green-600 mx-auto mb-2" />
						<h3 class="font-semibold mb-1">NIST Guidelines</h3>
						<p class="text-sm text-muted-foreground">Implements NIST Digital Identity Guidelines</p>
					</div>
					<div class="text-center">
						<Code class="h-8 w-8 text-purple-600 mx-auto mb-2" />
						<h3 class="font-semibold mb-1">Modern Stack</h3>
						<p class="text-sm text-muted-foreground">Uses current, maintained security libraries</p>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Theme Switcher Demo -->
	<section class="container mx-auto px-4 py-16">
		<Card class="max-w-md mx-auto text-center">
			<CardHeader>
				<Palette class="h-8 w-8 text-primary mx-auto mb-2" />
				<CardTitle>Theme Switcher</CardTitle>
				<CardDescription>
					Experience our secure theme switcher with smooth transitions
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
		<Card class="max-w-2xl mx-auto text-center border-primary/20">
			<CardHeader>
				<div class="flex justify-center mb-4">
					<Shield class="h-12 w-12 text-primary" />
				</div>
				<CardTitle class="text-2xl">Ready to Experience Secure Authentication?</CardTitle>
				<CardDescription>
					Join developers who trust our enterprise-grade security implementation. 
					Try our OAuth providers or traditional email/password authentication.
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="flex flex-col sm:flex-row gap-3 justify-center">
					<Button size="lg" asChild>
						<a href="/register">
							<Users class="h-4 w-4 mr-2" />
							Create Secure Account
						</a>
					</Button>
					<Button variant="outline" size="lg" asChild>
						<a href="/login">
							<Lock class="h-4 w-4 mr-2" />
							Secure Login
						</a>
					</Button>
				</div>
				<p class="text-xs text-muted-foreground">
					All authentication methods are protected by industry-standard security measures
				</p>
			</CardContent>
		</Card>
	</section>

	
	<!-- Security Testing Recommendations -->
	<section class="container mx-auto px-4 py-16">
		<Card class="max-w-4xl mx-auto">
			<CardHeader class="text-center">
				<div class="flex justify-center mb-4">
					<Eye class="h-12 w-12 text-primary" />
				</div>
				<CardTitle class="text-2xl">Recommended Security Testing</CardTitle>
				<CardDescription>
					Comprehensive testing approach to validate security implementation
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div class="text-center">
						<Fingerprint class="h-8 w-8 text-blue-600 mx-auto mb-2" />
						<h3 class="font-semibold mb-1">Authentication Testing</h3>
						<p class="text-sm text-muted-foreground">Test login/logout flows and OAuth integration</p>
					</div>
					<div class="text-center">
						<BarChart3 class="h-8 w-8 text-green-600 mx-auto mb-2" />
						<h3 class="font-semibold mb-1">Rate Limiting</h3>
						<p class="text-sm text-muted-foreground">Verify rate limiting functionality</p>
					</div>
					<div class="text-center">
						<Key class="h-8 w-8 text-purple-600 mx-auto mb-2" />
						<h3 class="font-semibold mb-1">Session Management</h3>
						<p class="text-sm text-muted-foreground">Test session security and expiration</p>
					</div>
					<div class="text-center">
						<Shield class="h-8 w-8 text-orange-600 mx-auto mb-2" />
						<h3 class="font-semibold mb-1">Route Protection</h3>
						<p class="text-sm text-muted-foreground">Verify protected route access controls</p>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>
</div>
