<script>
  import { Link } from 'svelte-routing';
</script>

<div class="homepage" data-testid="home-container">
  <div class="home-header hero is-large is-Link" style="background-image: url('images/food.jpeg');" data-testid="home-hero">
    <div class="hero-body">
      <h1 class="title">Food Corner</h1>
      <h2 class="subtitle">Indian Food at a Click</h2>

      <Link to="/menu">
        <button class="button is-medium is-responsive is-dark">Order Now!</button>
      </Link>
    </div>
  </div>
</div>

<style lang="scss">
  .home-header {
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: 600) and (max-width: 960) {
      background-position-x: -30%;
    };
  }
</style>