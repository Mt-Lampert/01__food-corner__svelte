<div class="about-page" data-testid="about">
  <div class="top hero is-medium" data-testid='top' style="background-image: url('images/masala.jpg');">
    <div class="hero-body" />
  </div>
  <div class="bottom" data-testid="bottom">
    <h1 class="title">About Us</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas
      officia nam numquam porro rem! Voluptate dolorem repellendus porro,
      quaerat aperiam minima neque totam, eum sapiente rem soluta, quo
      obcaecati.
    </p>
  </div>
</div>

<style lang="scss">
  .top {
    background-position-y: -40%;
    background-position-x: center;

    @media screen and (min-width: 800px) {
      background-position: top left;
    }
  }

  .bottom {
    // width: 70%;
    padding-top: 3em;
    padding-bottom: 3em;
    padding-left: 10%;
    padding-right: 10%;
  }
</style>