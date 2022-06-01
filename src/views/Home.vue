<template>
  <the-head></the-head>
  <the-effect-cards></the-effect-cards>
  <the-contr-list></the-contr-list>
  <the-stages></the-stages>
  <the-results></the-results>
  <the-reviews></the-reviews>
  <the-questions id="questions"></the-questions>
  <the-contacts id="contacts"></the-contacts>
</template>

<script>
import TheEffectCards from '@/components/TheEffectCards.vue'
import TheHead from '@/components/TheHead.vue'
import TheContrList from '@/components/TheContrList.vue'
import TheStages from '@/components/TheStages.vue'
import TheResults from '@/components/TheResults.vue'
import TheReviews from '@/components/TheReviews.vue'
import TheQuestions from '@/components/TheQuestions.vue'
import TheContacts from '@/components/TheContacts.vue'
export default {
  name: 'Home',
  components: {
    TheHead,
    TheEffectCards,
    TheContrList,
    TheStages,
    TheResults,
    TheReviews,
    TheQuestions,
    TheContacts,
  },
}
</script>
