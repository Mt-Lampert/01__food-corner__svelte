<script>
  import { Router, Route } from "svelte-routing";
  import Footer from "./components/Footer.svelte"
  import Navbar from "./components/Navbar.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";
  import Home from "./pages/Home.svelte";
  import Menu from "./pages/Menu.svelte";

  export let url = "";
</script>

<Router {url}>
  <Navbar />
  <main data-testid="main">
    <Route path="/about" component={About} />
    <Route path="/menu" component={Menu} />
    <Route path="/contact" component={Contact} />
    <Route path="/"><Home /></Route>
  </main>
  <Footer />
</Router>

<style>
</style>
