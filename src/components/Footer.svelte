<script>
  import Twitter from "svelte-material-icons/Twitter.svelte";
  import Instagram from "svelte-material-icons/Instagram.svelte";
  import FacebookBox from "svelte-material-icons/FacebookBox.svelte";
  import Linkedin from "svelte-material-icons/Linkedin.svelte";

  let iconSize = "150%";
</script>

<footer class="footer content is-dark" data-testid="footer-container">
  <div class="social-media content" data-testid="socialMedia-container">
    <p class="has-text-centered">
      <span class="icon"><Twitter size={iconSize} /></span>
      <span class="icon"><Instagram size={iconSize} /></span>
      <span class="icon"><FacebookBox size={iconSize} /></span>
      <span class="icon"><Linkedin size={iconSize} /></span>
    </p>
  </div>
  <div class="copyright container" data-testid="copyright-container">
    <p class="has-text-light has-text-centered">
      &copy; Food Corner 2020. All rights reserved.
    </p>
  </div>
</footer>

<style lang="scss">
  .icon {
    display: inline-block;
    width: 2rem;

    & + .icon {
      margin-left: 1.5rem;
    }
  }

  footer {
    background-color: $dark-background;
    color: $dark-background-text;
  }
</style>
