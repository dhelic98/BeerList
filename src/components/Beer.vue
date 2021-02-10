<template>
    <div>
      <div class="content">
        <div class="imgDiv">
          <img :src="this.beer.image_url" alt="">
        </div>
        <div class="beerData">
          <div class="groupInfo">
            <div>
              <p><span>Name: </span>{{ beer.name}}</p>
            </div>
            <div>
              <p><span>Tagline: </span> "{{ beer.tagline }}"</p>
            </div>
            <div>
              <p><span>First brewed: </span>{{ beer.first_brewed }}</p>
            </div>
            <div>
              <p><span>Contributed by: </span>{{ beer.contributed_by}}</p>
            </div>
          </div>

          <div>
            <div>
              <p><span>Description: </span>{{ beer.description }}</p>
            </div>
          </div>

          <div class="groupInfo">
            <div>
              <p><span>PH: </span>{{ beer.ph }}</p>
            </div>
            <div>
              <p><span>ABV: </span>{{ beer.abv }}%  </p>
            </div>
            <div>
              <p><span>Boil volume: </span>{{ beer.boil_volume.value + ' ' + beer.boil_volume.unit }}</p>
            </div>
            <div>
              <p><span>Volume: </span>{{ beer.volume.value + ' ' + beer.volume.unit }}</p>
            </div>
          </div>
          <div class="food">
            <h2>Goes good with food: </h2>
            <div v-for="(food, index) in beer.food_pairing" v-bind:key="index">
              <p>{{food}}</p>
            </div>
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
    console.log(this.beer.ingredients)
  }
}
</script>
<style scoped lang="scss">
  @mixin grid($cols, $mgn){
    float: left;
    margin-right: $mgn;
    margin-bottom: $mgn;
    width: ((100% - (($cols - 1) * $mgn)) / $cols);
    &:nth-child(#{$cols}n){
      margin-right: 0;
    }
  }

  h2{
    margin: 50px 15px 10px 15px;
    text-align: left;
  }
  .food{
    display: block !important;
    p{
      margin: 2px;
      margin-left: 0px;
      padding-left: 0px;
    }
  }
  .content{
    div{
      margin-bottom: 15px;
    }
    display: flex;
    flex-wrap: wrap;
    -webkit-box-shadow: 5px 5px 20px 5px rgba(160,160,160,0.8);
    box-shadow: 5px 5px 20px 5px rgba(160,160,160,0.8);
    max-width: 98%;
    margin: 0 auto;
    .imgDiv{
      margin: 30px;
      flex: 0 0 10%;
      img{
        float: left;
        max-height: 300px;
        max-width: 100%;
        margin-left: 30px;
      }
    }
    .groupInfo{
      div{
        @include grid(4, 2%)
      }
    }
    .beerData{
      flex: 1;
      margin: 30px;
      margin-left: 0px;
      div{
        display:flex;
        div{
          margin: 0 15px;
          display:flex;
          flex-direction: row;
          align-items: center;
        }
        p{
          text-align: left;
          padding-left: 5px;
          span{
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
