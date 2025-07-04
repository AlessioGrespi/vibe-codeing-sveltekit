<script lang="ts">
  import { enhance } from '$app/forms';
  export let form: any;
</script>

<h2>Change Email</h2>
<form method="POST" action="?/change-email" use:enhance>
  <label for="email">New Email</label>
  <input id="email" name="email" type="email" required autocomplete="email" />
  <button type="submit">Change Email</button>
  {#if form?.changeEmailError}
    <p>{form.changeEmailError}</p>
  {/if}
  {#if form?.changeEmailSuccess}
    <p>{form.changeEmailSuccess}</p>
  {/if}
</form>

<h2>Change Password</h2>
<form method="POST" action="?/change-password" use:enhance>
  <label for="current_password">Current Password</label>
  <input id="current_password" name="current_password" type="password" required autocomplete="current-password" />
  <label for="new_password">New Password</label>
  <input id="new_password" name="new_password" type="password" required autocomplete="new-password" />
  <button type="submit">Change Password</button>
  {#if form?.changePasswordError}
    <p>{form.changePasswordError}</p>
  {/if}
  {#if form?.changePasswordSuccess}
    <p>{form.changePasswordSuccess}</p>
  {/if}
</form> 