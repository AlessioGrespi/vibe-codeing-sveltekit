<script lang="ts">
  import { enhance } from '$app/forms';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Button } from '$lib/components/ui/button';
  import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
  
  export let form: any;
</script>

<div class="container mx-auto max-w-2xl p-6 space-y-6">
  <div class="space-y-2">
    <h1 class="text-3xl font-bold">Settings</h1>
    <p class="text-muted-foreground">Manage your account settings and preferences.</p>
  </div>

  <!-- Theme Settings -->
  <Card>
    <CardHeader>
      <CardTitle>Theme</CardTitle>
      <CardDescription>
        Choose your preferred theme for the application.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center justify-between">
        <div class="space-y-1">
          <Label>Dark Mode</Label>
          <p class="text-sm text-muted-foreground">
            Switch between light and dark themes
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </CardContent>
  </Card>

  <!-- Email Settings -->
  <Card>
    <CardHeader>
      <CardTitle>Change Email</CardTitle>
      <CardDescription>
        Update your email address for account notifications and login.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form method="POST" action="?/change-email" use:enhance class="space-y-4">
        <div class="space-y-2">
          <Label for="email">New Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            required 
            autocomplete="email"
            placeholder="Enter your new email"
          />
        </div>
        <Button type="submit">Change Email</Button>
        
        {#if form?.changeEmailError}
          <p class="text-sm text-destructive">{form.changeEmailError}</p>
        {/if}
        {#if form?.changeEmailSuccess}
          <p class="text-sm text-green-600 dark:text-green-400">{form.changeEmailSuccess}</p>
        {/if}
      </form>
    </CardContent>
  </Card>

  <!-- Password Settings -->
  <Card>
    <CardHeader>
      <CardTitle>Change Password</CardTitle>
      <CardDescription>
        Update your password to keep your account secure.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form method="POST" action="?/change-password" use:enhance class="space-y-4">
        <div class="space-y-2">
          <Label for="current_password">Current Password</Label>
          <Input 
            id="current_password" 
            name="current_password" 
            type="password" 
            required 
            autocomplete="current-password"
            placeholder="Enter your current password"
          />
        </div>
        <div class="space-y-2">
          <Label for="new_password">New Password</Label>
          <Input 
            id="new_password" 
            name="new_password" 
            type="password" 
            required 
            autocomplete="new-password"
            placeholder="Enter your new password"
          />
        </div>
        <Button type="submit">Change Password</Button>
        
        {#if form?.changePasswordError}
          <p class="text-sm text-destructive">{form.changePasswordError}</p>
        {/if}
        {#if form?.changePasswordSuccess}
          <p class="text-sm text-green-600 dark:text-green-400">{form.changePasswordSuccess}</p>
        {/if}
      </form>
    </CardContent>
  </Card>
</div> 