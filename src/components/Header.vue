<template>
  <div>
    <header>
      <nav id="main-nav">
        <div class="wrapper">
          <ul>
            <li><router-link to="/">Home</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default class Header extends Vue {

}
</script>
<style lang="scss">
    $deepBlue: #032f3e;
    $offWhite: #f8f9fb;
    @mixin clearFix{
        &:after{
            content: "";
            display: block;
            clear: both;
        }
    }
    #main-nav{
        background: $deepBlue;
        ul{
            width: 100%;
        }
        li{
            float: left;
            width: (100% / 6);
        }
        a{
            color: $offWhite;
            text-decoration: none;
            padding: 16px;
            display: block;
            text-align: center;
            &:hover{
            background: lighten($deepBlue, 6);
            }
        }

        @include clearFix;
}
</style>
