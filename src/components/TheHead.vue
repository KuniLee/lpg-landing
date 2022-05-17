<template>
  <div class="first-page">
    <div role="main" class="px-3 big-container h-100">
      <div
        class="row h-100 align-content-between align-content-lg-center justify-content-lg-center align-items-lg-center"
      >
        <div class="col-lg-6 col-xl-5">
          <h1 class="heading__top mt-5 mt-lg-0">LPG-массаж</h1>
          <p class="slogan">
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
          class="col-lg-3 col-md-5 col-8 col-sm-6 offset-md-5 offset-4 offset-lg-1 mb-sm-5 mb-lg-0"
        >
          <img
            class="w-100"
            src="../images/Header-image.png"
            alt="header img"
          />
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
  color: $black;
}

.heading__top {
  font-size: 36px;
  font-weight: 700;
}

.first-page {
  overflow: hidden;
  height: calc(100vh - $navbar-height);
  background-image: url(/src/images/DG_image.png);
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;
}
@include media-breakpoint-up(md) {
  .heading__top {
    font-size: 72px;
  }
  .slogan {
    font-size: 34px;
  }
}
</style>
