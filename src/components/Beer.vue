<template>
    <div>
      <div></div>
      <div class="content">
        <div class="imgDiv">
          <img :src="this.beer.image_url" alt="">
        </div>
        <div class="beerData">
          <div>
            <label for="">Name: </label>
            <p>{{ beer.name}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class Beer extends Vue {
  beer = {}

  @Watch('$route.params.beerID', { immediate: true, deep: true })
  onRouteChanged (val: string) {
    this.beer = this.$store.getters.getBeer(val)
  }
}
</script>
<style scoped lang="scss">
  .content{
    display: flex;
    flex-wrap: wrap;
    -webkit-box-shadow: 5px 5px 20px 5px rgba(160,160,160,0.8);
    box-shadow: 5px 5px 20px 5px rgba(160,160,160,0.8);
    max-width: 96%;
    margin: 0 auto;
    .imgDiv{
      margin: 30px;
      flex: 0 0 30%;
      img{
        float: left;
        max-height: 300px;
        max-width: 100%;
      }
    }
  }
</style>
