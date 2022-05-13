<template>
  <the-head></the-head>
  <the-effect-cards></the-effect-cards>
</template>

<script>
import TheEffectCards from '@/components/TheEffectCards.vue'
import TheHead from '@/components/TheHead.vue'
export default {
  name: 'Home',
  components: { TheHead, TheEffectCards },
}
</script>
