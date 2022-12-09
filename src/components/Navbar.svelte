<script>
  import { Link } from "svelte-routing";
  const logo = "images/logo.png";

  const links = [
    { id: "1", name: "Home", link: "/" },
    { id: "2", name: "Menu", link: "/menu" },
    { id: "3", name: "About", link: "/about" },
    { id: "4", name: "Contact", link: "/contact" },
  ];

  let navbarMenu;
</script>

<nav class="navbar is-dark">
  <div class="navbar-brand">
    <figure class="image is-48x48">
      <Link to="/">
        <img src={logo} width="48" alt="The Logo" />
      </Link>
    </figure>
    <!-- <a
      href="#/"
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbar-burger"
      onClick={burgerHandler}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a> -->
  </div>
  <div bind:this={navbarMenu} class="navbar-menu">
    <div class="navbar-end" data-testid="navbar-end">
      {#each links as link}
        <div class="navbar-item">
          <Link to={link.link} class="has-text-light">{link.name}</Link>
        </div>
      {/each}
    </div>
  </div>
</nav>


<style lang="scss">
  a{ color: hsl(0, 0%, 91%)}
</style>
