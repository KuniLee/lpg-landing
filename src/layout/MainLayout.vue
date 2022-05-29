<template>
  <the-navbar></the-navbar>
  <router-view></router-view>

  <the-footer></the-footer>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheNavbar from '../components/TheNavbar.vue'

export default {
  components: { TheNavbar, TheFooter },
}
</script>

<style></style>
