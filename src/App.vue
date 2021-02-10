<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AllBeers from './components/AllBeers.vue'
import Header from './components/Header.vue'
import axios from 'axios'

@Component({
  components: {
    AllBeers,
    Header
  }
})
export default class App extends Vue {
  beers = [];
  created () {
    axios.get('https://api.punkapi.com/v2/beers').then(response => {
      if (this.$store.getters.getBeers.length === 0) {
        this.$store.commit('addBeers', response.data)
      }
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
