<template>
  <the-head></the-head>
  <the-effect-cards></the-effect-cards>
  <the-contr-list></the-contr-list>
  <the-stages></the-stages>
  <the-results></the-results>
</template>

<script>
import TheEffectCards from '@/components/TheEffectCards.vue'
import TheHead from '@/components/TheHead.vue'
import TheContrList from '@/components/TheContrList.vue'
import TheStages from '@/components/TheStages.vue'

import TheResults from '@/components/TheResults.vue'
export default {
  name: 'Home',
  components: { TheHead, TheEffectCards, TheContrList, TheStages, TheResults },
}
</script>
