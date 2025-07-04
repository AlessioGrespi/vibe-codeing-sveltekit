<script lang="ts">
  export let data: { user: { id: number; email: string } | null };
</script>

<nav class="w-full border-neutral-200">
  <div class="flex justify-between items-center  container mx-auto">
    <div class="flex items-center gap-4">
      <a href="/">Home</a>
    </div>
    <div class="flex items-center gap-4">
      <a href="/protected">Protected</a>
      <a href="/protected/settings">Settings</a>
    </div>
    <div class="flex items-center gap-4">
      {#if data.user}
        <a href="/logout">Logout</a>
      {:else}
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      {/if}
    </div>
  </div>
</nav>