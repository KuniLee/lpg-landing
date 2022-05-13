<template>
  <div class="cards container-fluid">
    <h1 class="heading text-center">Эффект от процедуры</h1>
    <div class="row gy-3">
      <div class="col-12">
        <div class="card__effects"></div>
      </div>
      <div class="col-12">
        <div class="card__effects"></div>
      </div>
      <div class="col-12">
        <div class="card__effects"></div>
      </div>
      <div class="col-12">
        <div class="card__effects"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.card__effects {
  height: 269px;
  background-color: $white;
  border-radius: 20px;
}
.cards {
  background-color: $pink;
}
@include media-breakpoint-up(md) {
  .slogan {
    font-size: 34px;
  }
}
</style>
