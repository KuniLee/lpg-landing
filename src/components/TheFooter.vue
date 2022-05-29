<template>
  <footer class="footer mt-auto py-3 py-sm-4 py-lg-5">
    <div
      class="big-container d-flex justify-content-between align-items-center"
    >
      <a class="navbar-brand text-black me-xl-4" href="#">Pro&nbsp;Telo</a>

      <div
        class="d-flex flex-wrap-reverse justify-content-end gap__footer align-items-center"
      >
        <span class="subheading">89030917888</span>
        <div class="d-flex">
          <a class="" href="#" target="_blank" rel="noopener"
            ><img
              src="@/images/social-icons/Instagram_black.svg"
              alt="instagram"
          /></a>
          <a class="" href="#" target="_blank" rel="noopener"
            ><img src="@/images/social-icons/Telegram_black.svg" alt="Telegram"
          /></a>
          <a class="" href="#" target="_blank" rel="noopener"
            ><img src="@/images/social-icons/WhatsApp_black.svg" alt="WhatsApp"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  background-color: $mint;
}
.gap__footer {
  gap: 16px;
  div {
    gap: 22px;
  }
}
@include media-breakpoint-up(sm) {
  .gap__footer {
    gap: 40px;
    div {
      gap: 40px;
    }
  }
}

@include media-breakpoint-up(lg) {
  .gap__footer {
    gap: 80px;
    div {
      gap: 80px;
    }
  }
}
@include media-breakpoint-up(xl) {
  .gap__footer {
    gap: 90px;
    div {
      gap: 90px;
    }
  }
}
</style>
