<script>
  function submitHandler(e) {
    alert("submitted!");
  }
</script>

<div class="contacts mb-6" data-testid="contact-container">
  <div class="left-side" data-testid="image-container" style="background-image: url('images/photo.jpeg');"/>

  <div
    class="form-container pt-5 pb-5 pl-3 pr-3"
    data-testid="form-container"
  >
    <h1 class="title">Contact Us!</h1>
    <form aria-label="contact-form" on:submit|preventDefault={submitHandler}>
      <div class="form-top columns pl-1">
        <div class="field column">
          <label for="name">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
          </div>
        </div>
        <div class="field column">
          <label for="email">Email</label>
          <div class="control">
            <input
              class="input"
              type="text"
              id="email"
              name="email"
              placeholder="Your email address"
              width="400"
            />
          </div>
        </div>
      </div>
      <div class="form-center field">
        <label for="message">Your message</label>
        <div class="control">
          <textarea
            class="textarea"
            name="messsage"
            id="message"
            rows="7"
          />
        </div>
      </div>
      <div class="content field has-text-centered pt-4">
        <button class="button is-dark is-medium is-responsive"
          >Submit</button
        >
      </div>
    </form>
  </div>
</div>

<style lang="scss">
  .contacts {
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  > .left-side {
    min-height: 30vh;
    background-position-x: center;
    background-position-y: 60%;
  }
}

</style>