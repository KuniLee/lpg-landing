<template>
  <div class="cards container-fluid">
    <h1 class="heading text-center">Эффект от процедуры</h1>
    <div class="row gy-3">
      <div v-for="card in cards" :key="card.id" class="col-12">
        <div class="card__effects position-relative">
          <h2 class="text-center">{{ card.title }}</h2>
          <img
            class="w-100 position-absolute bottom-0"
            :src="require(`@/images/efforts/${card.id}.png`)"
            :alt="'effort_image_' + card.id"
          />
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
  min-height: 269px;
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
