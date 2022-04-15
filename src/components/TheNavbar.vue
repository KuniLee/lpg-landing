<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand text-black" href="#">Pro&nbsp;Telo</a>
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
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a href="#miID" class="nav-link">Контакты</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="offcanvas" href="#"
                  >Отзывы</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="offcanvas" href="#"
                  >Результаты</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="offcanvas" href="#"
                  >Этапы процедуры</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="offcanvas" href="#"
                  >Противопоказания</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="offcanvas" href="#"
                  >Эффект от процедуры</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
}
</script>
