<script>
  export let dish;
</script>

<div class="mi-container card" data-testid="mi-container">
  <div class="card-image pt-5">
    <figure class="has-text-centered">
      <img src={dish.image} width="300" alt={dish.name + " image"} />
    </figure>
  </div>
  <div class="card-content">
    <h1
      class="mi-title is-size-4-desktop is-size-5-mobile has-text-weight-semibold mt-3"
    >
      {dish.name}
    </h1>
    <div class="mi-price has-text-weight-semibold has-text-right">
      {dish.price} &euro;
    </div>
  </div>
</div>
