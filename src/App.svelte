<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";
  import Menu from "./pages/Menu.svelte";

  export let url = "";
</script>

<!-- <Navbar /> -->
<main data-testid="main">
  <Router {url}>
    <Route path="/about" component={About} />
    <Route path="/menu" component={Menu} />
    <Route path="/contact" component={Contact} />
    <Route path="/"><Home /></Route>
  </Router>
</main>

<!-- <Footer /> -->
<style>
</style>
