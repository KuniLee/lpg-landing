<template>
  <div class="back-margin">
    <h1 class="heading text-center">Контакты</h1>
    <div class="big-container d-lg-none">
      <div class="row align-items-center">
        <div class="col-12 col-lg-3 offset-lg-1 order-sm-1 col-sm-7">
          <p class="subheahing">Адрес</p>
          <p>Челябинск, проспект Ленина 81</p>
          <p class="subheahing">Телефон</p>
          <p>89030917888</p>
          <p class="subheahing">Режим работы</p>
          <p>Пн-Сб с 08-00 до 21-00</p>
        </div>
        <div class="col-12 col-lg-7 order-sm-0">
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27043.12316948006!2d50.16505459783853!3d53.194589161855504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1654058739039!5m2!1sru!2sru"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-12 mt-3 mt-sm-0 order-sm-2 col-sm-5">
          <a class="btn btn-primary btn-lg w-100" href="#" role="button"
            >Оставить заявку</a
          >
        </div>
      </div>
    </div>
    <div class="big-container d-lg-block d-none">
      <div class="row align-items-center">
        <div class="col-7">
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27043.12316948006!2d50.16505459783853!3d53.194589161855504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1654058739039!5m2!1sru!2sru"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-3 offset-1">
          <div class="col-12">
            <p class="subheading">Адрес</p>
            <p>Челябинск, проспект Ленина 81</p>
            <p class="subheading">Телефон</p>
            <p>89030917888</p>
            <p class="subheading">Режим работы</p>
            <p>Пн-Сб с 08-00 до 21-00</p>
          </div>
          <div class="col-12">
            <a class="btn btn-primary btn-lg w-100 mt-4" href="#" role="button"
              >Оставить заявку</a
            >
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
.google-map {
  width: 100%;
  height: 60vw;
}
@include media-breakpoint-up(sm) {
  .google-map {
    margin-bottom: 40px;
  }
}
@include media-breakpoint-up(lg) {
  .google-map {
    height: 520px;
    margin-bottom: 0;
  }
}
</style>
