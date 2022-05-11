<template>
  <div class="first-page">
    <div role="main" class="px-3 container-fluid h-100">
      <div class="row h-100">
        <div class="col-12 col-md-10 col-lg-5 d-flex flex-column">
          <h1 class="mt-5">LPG-массаж</h1>
          <p class="col-10 slogan">
            Твой приятный путь к стройному и подтянутому телу
          </p>
          <p class="text-black">
            Оставь заявку сейчас и получи скидку 50% на первое посещение
          </p>
          <a class="btn btn-primary btn-lg mt-4 col-md-6" href="#" role="button"
            >Оставить заявку</a
          >
        </div>
        <div
          class="row align-items-end align-items-md-center justify-content-end justify-content-lg-start flex-grow-1 header__img"
        >
          <div class="col-8 col-sm-6">
            <img class="w-100" src="../images/MaskGroup.png" alt="header img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.slogan {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: #2e2e2e;
}
.first-page {
  height: calc(100vh - $navbar-height);
  background-image: url(/src/images/DG_image.png);
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;
}
@include media-breakpoint-up(md) {
  h1 {
    font-size: 72px;
  }
  .slogan {
    font-size: 34px;
  }
}
</style>
