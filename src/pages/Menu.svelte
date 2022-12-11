<script>
  import MenuItem from "../components/MenuItem.svelte";
  import { dishes } from "../helpers/data";
</script>

<div class="menu-page mt-6 mb-6">
  <h1 class="title">Our Dishes</h1>
  <div class="menu-container pt-4 pb-4" data-testid="menu-container">
    {#each dishes as dish}
      <MenuItem dish={dish} />
    {/each}
  </div>
</div>
