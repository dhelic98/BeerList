<template>
  <div>
    <Header/>
    <div class="content">
      <div class="beerDiv" v-for="beer in this.beers" v-bind:key="beer.id" @click="showBeer(beer.id)">
        <div class="beerImg">
          <img :src="beer.image_url" alt="Image of beer">
        </div>
        <div class="beerData">
          <div>
            <label for="">Name: </label>
            <p>{{ beer.name}}</p>
          </div>
          <div>
            <label for="">Tagline: </label>
            <p>{{ beer.tagline }}</p>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class AllBeers extends Vue {
  @Prop() private msg!: string;

  beers = []

  showBeer (beerID: number) {
    this.$router.push(`/beer/${beerID}`)
  }

  created () {
    this.beers = this.$store.getters.getBeers
    console.log(this.beers)
  }
}
</script>

<style scoped lang="scss">
.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5%;
  .beerDiv {
    flex:0 0 30%;
    height: 140px;
    border-radius: 5px;
    margin: 10px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    -webkit-box-shadow: 5px 5px 20px 5px rgba(160,160,160,0.8);
    box-shadow: 5px 5px 20px 5px rgba(160,160,160,0.8 );
    .beerImg{
      flex: 0 0 20%;
      img{
        max-width: 100%;
        max-height: 100px;
        padding: 0 0 0 20px;
      }
    }
    .beerData{
      margin-left: 20px;
      flex: 1;
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      div{
        display:flex;
        flex-direction: row;
        align-items: center;
        label{
          font-weight: bold;
        }
        p{
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
