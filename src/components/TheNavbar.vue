<template>
  <nav class="navbar navbar-expand-xl fixed-top navbar-light">
    <div
      class="big-container d-flex align-items-center justify-content-between"
    >
      <a class="navbar-brand text-black me-xl-5" href="#">Pro&nbsp;Telo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header justify-content-end">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1 justify-content-xl-between">
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="scrollTo($event)"
                href="#effect"
                >Эффект от процедуры</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="scrollTo($event)"
                href="#contr"
                >Противопоказания</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="scrollTo($event)"
                href="#stages"
                >Этапы процедуры</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="scrollTo($event)"
                href="#results"
                >Результаты</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="scrollTo($event)"
                href="#reviews"
                >Отзывы</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="scrollTo($event)"
                href="#questions"
                >Ваши вопросы</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#contacts"
                @click.prevent="scrollTo($event)"
                class="nav-link"
                >Контакты</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted } from 'vue'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'
export default {
  name: 'TheNavbar',
  setup() {
    let bsOffcanvas = null

    onMounted(() => {
      const navOffcanvas = document.getElementById('offcanvasNavbar')
      bsOffcanvas = new bootstrap.Offcanvas(navOffcanvas)
    })

    const scrollTo = ({ target }) => {
      const scrollFunc = () => {
        document.querySelector(target.getAttribute('href')).scrollIntoView({
          behavior: 'auto',
          block: 'start',
        })
      }
      if (bsOffcanvas._isShown) {
        bsOffcanvas.hide()
        setTimeout(() => {
          scrollFunc()
        }, 500)
        return
      }
      scrollFunc()
    }
    return { scrollTo }
  },
}
</script>

<style lang="scss">
.navbar-light .navbar-toggler-icon {
  background-image: url(/src/images/Burger.svg);
}
.navbar-toggler {
  padding: 0.25rem 0.25rem;
  border: 0;
}
.navbar {
  max-height: $navbar-height;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
}
.navbar-brand {
  padding: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 110%;
}
.navbar-light .navbar-nav .nav-link {
  padding-top: 0;
  padding-bottom: 26px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  color: $black;
}
.offcanvas-body {
  background-image: url(/src/images/Offcanvas_img.png);
  background-position: left bottom;
  background-repeat: no-repeat;
}

@include media-breakpoint-up(xl) {
  .navbar-light .navbar-nav .nav-link {
    padding-bottom: 0px;
    font-style: normal;
    font-size: 18px;
    line-height: 30px;
  }
  .offcanvas-body {
    background: #fff;
  }
  .navbar-expand-xl {
    align-items: baseline;
  }
}
@include media-breakpoint-up(md) {
  .offcanvas.offcanvas-end {
    width: 50%;
  }
}
</style>
