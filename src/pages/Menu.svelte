<script>
  import MenuItem from "../components/MenuItem.svelte";
  import { dishes } from "../helpers/data";
</script>

<div class="menu-page mt-6 mb-6">
  <h1 class="title">Our Dishes</h1>
  <div class="menu-container pt-4 pb-4" data-testid="menu-container">
    {#each dishes as dish}
      <MenuItem {dish} />
    {/each}
  </div>
</div>

<style lang="scss">
  $row-gap: 1.5rem;

  .menu-container {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-row-gap: $row-gap;

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }


    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
