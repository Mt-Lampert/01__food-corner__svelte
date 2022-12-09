<script>
  import { Link } from "svelte-routing"
  const logo = "images/logo.png"
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
</nav>
