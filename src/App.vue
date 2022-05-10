<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layout/MainLayout.vue'

export default {
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout),
    }
  },
  components: { MainLayout },
}
</script>

<style lang="scss">
body {
  padding-top: $navbar-height;
}
h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
}
</style>
