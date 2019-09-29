<template>
    <header class="large">
      <MainNav></MainNav>
      <div id="company-branding"><a href="index.html"><img  src="Logo/logo.svg" id="logo" alt="logo"/></a><h2><a href="index.html">{{company}}</a></h2></div>
    </header>
</template>

<script>
import MainNav from './Navigation.vue';

export default {
  name: 'HeaderNav',
  props: {
    company: String
  },
  components: {
    MainNav
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
