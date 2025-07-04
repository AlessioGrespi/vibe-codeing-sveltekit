<form method="POST" use:enhance class="flex flex-col gap-2 w-fit mx-auto">
    <div>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" required autocomplete="email" />
    </div>
    <div>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" required autocomplete="new-password" />
    </div>
    <button type="submit">Register</button>

  {#if form?.error}
    <p>{form.error}</p>
  {/if}
</form>

<script lang="ts">
  import { enhance } from '$app/forms';
  export let form: any;
</script>
