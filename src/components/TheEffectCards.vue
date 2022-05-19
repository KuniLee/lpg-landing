<template>
  <div class="cards">
    <div class="big-container">
      <h1 class="heading text-center">Эффект от процедуры</h1>
      <div class="row row-flex gy-3 justify-content-lg-center">
        <div
          v-for="card in cards"
          :key="card.id"
          class="col-12 col-sm-6 col-lg-4 col-xl-3"
        >
          <div
            class="card__effects position-relative pt-4 d-flex flex-column justify-content-between"
          >
            <p class="text-black text-center">{{ card.title }}</p>
            <img
              class="w-100"
              :src="require(`@/images/efforts/${card.id}.png`)"
              :alt="'effort_image_' + card.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const cards = store.state.effect.cards
    return { cards }
  },
}
</script>

<style lang="scss">
.card__effects {
  height: 100%;

  background-color: $white;
  border-radius: 20px;
}
.cards {
  background-color: $pink;
  padding-top: 8vh;
  padding-bottom: 8vh;
}
.card-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
}

@include media-breakpoint-up(md) {
  .slogan {
    font-size: 34px;
  }
}
</style>
