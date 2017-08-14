<template>
  <div class="container-fluid" style="max-width: 1000px; min-width: 600px">
    <div class="row">
        <app-header></app-header>
    </div>
      <div class="row">
          <app-board></app-board>
      </div>
    </div>
</template>

<script>

import Header from './components/Header.vue'
import Board from './components/Board.vue'

export default {
    components:{
        appHeader : Header,
        appBoard : Board
    },
    created() {
        this.$store.dispatch('start')
    }
}
</script>

<style>

</style>
