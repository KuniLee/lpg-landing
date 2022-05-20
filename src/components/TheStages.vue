<template>
  <div class="back bg-light-mint">
    <div class="big-container">
      <h1 class="heading text-center">Этапы процедуры</h1>
      <div v-if="changed" class="row">
        <div v-for="stage in stages" :key="stage.id" class="col-12 col-xl-3">
          <div class="row">
            <div
              class="col-1 col-xl-12 d-sm-block d-none offset-sm-2 position-relative"
            >
              <p class="figure position-absolute start-50 translate-middle-x">
                {{ stage.id }}
              </p>
            </div>
            <div class="col-3 col-xl-12 col-sm-1 position-relative">
              <div class="line position-absolute"></div>
              <div
                class="circle text-center position-absolute start-50 translate-middle-x"
              >
                <span class="d-sm-none">{{ stage.id }}</span>
              </div>
            </div>
            <div class="col-9 col-xl-12 col-sm-8">
              <p class="heading stage-title">{{ stage.title }}</p>
              <p
                :class="[stage.id == stages.length ? 'mb-0' : '', 'stage-text']"
              >
                {{ stage.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row row-cols-4 align-items-end text-center">
          <div v-for="stage in stages" :key="stage.id" class="col">
            <p v-if="stage.id % 2" class="figure m-0">
              {{ stage.id }}
            </p>
            <div v-else>
              <p class="heading stage-title">{{ stage.title }}</p>
              <p class="stage-text">
                {{ stage.text }}
              </p>
            </div>
          </div>
        </div>
        <div class="row row-cols-4 my-4 position-relative">
          <hr class="line-xxl position-absolute top-50 w-100" />
          <div
            class="col d-flex justify-content-center"
            v-for="item in stages.length"
            :key="item"
          >
            <div class="circle"></div>
          </div>
        </div>
        <div class="row row-cols-4 text-center">
          <div v-for="stage in stages" :key="stage.id" class="col">
            <p v-if="!(stage.id % 2)" class="figure">
              {{ stage.id }}
            </p>
            <div v-else>
              <p class="stage-title">{{ stage.title }}</p>
              <p class="stage-text">
                {{ stage.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const stages = [
      {
        id: 1,
        title: 'Консультация',
        text: 'Специалист проводит осмотр проблемных участков тела',
      },
      {
        id: 2,
        title: 'Подготовка',
        text: 'Пациент надевает индивидуальный костюм',
      },
      {
        id: 3,
        title: 'Массаж',
        text: 'Обработка тела пациента манипулами',
      },
      {
        id: 4,
        title: 'Рекомендации',
        text: 'Специалист дает рекомендации как улучшить эффект от процедуры',
      },
    ]

    const changed = ref()

    const updateWidth = () => {
      window.innerWidth <= 1200
        ? (changed.value = true)
        : (changed.value = false)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return { stages, updateWidth, changed }
  },
}
</script>

<style lang="scss">
.bg-light-mint {
  background-color: $light-pink;
}
.circle {
  background: #f0e4e4;
  border: 1px solid $black;
  border-radius: 50%;
  top: 10%;
  width: 50px;
  height: 50px;
  font-size: 36px;
  line-height: 48px;
  z-index: 1;
}
.figure {
  font-size: 60px;
  line-height: 80%;
  top: 10%;
}
.line {
  width: 1px; /* Line width */
  background-color: black;
  height: 100%;
  left: 50%;
  position: absolute;
}
.stage-text {
  margin-bottom: 2em;
}
.line-xxl {
  z-index: 0;
  opacity: 1;
}

.stage-title {
  line-height: 140%;
  margin-bottom: 0.3em;
}
@include media-breakpoint-up(md) {
  .stage-title {
    font-size: 26px;
  }
}
@include media-breakpoint-up(xl) {
  .stage-title {
    font-size: 30px;
  }
}

@include media-breakpoint-up(lg) {
  .circle {
    width: 59px;
    height: 59px;
  }
  .figure {
    font-size: 75px;
    line-height: 80%;
    top: 10%;
  }
}
@include media-breakpoint-up(xl) {
  .stage-text {
    margin-bottom: 0em;
  }
}
</style>
