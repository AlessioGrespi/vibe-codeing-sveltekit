<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { Button } from '$lib/components/ui/button';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  
  export let data: { user: { id: number; email: string } | null };
</script>

<nav class="w-full border-b border-border bg-background">
  <div class="flex justify-between items-center container mx-auto px-4 py-3">
    <div class="flex items-center gap-4">
      <Button variant="ghost" asChild>
        <a href="/">Home</a>
      </Button>
    </div>
    <div class="flex items-center gap-4">
      <Button variant="ghost" asChild>
        <a href="/protected">Protected</a>
      </Button>
      <Button variant="ghost" asChild>
        <a href="/protected/settings">Settings</a>
      </Button>
    </div>
    <div class="flex items-center gap-4">
      {#if data.user}
        <Button variant="ghost" asChild>
          <a href="/logout">Logout</a>
        </Button>
      {:else}
        <Button variant="ghost" asChild>
          <a href="/login">Login</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="/register">Register</a>
        </Button>
      {/if}
      <ThemeSwitcher />
    </div>
  </div>
</nav>