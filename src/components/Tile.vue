<template>

    <div class="tile col-xs-4" :class="{disabled: squaresColor[index].clicked || !game}" :style="{backgroundColor: squaresColor[index].color}" style="max-width: 30%" @click="checkWin">
    </div>

</template>

<script>

     import {mapActions} from 'vuex';

     export default {
         props:['index'],
         data(){
             return {
                 clicked : false
             }
         },
         methods: {
             ...mapActions({
                 checkTile: 'checkTile'

                }),
             checkWin() {
                 if(this.game){
                     this.checkTile((this.index));
                 }
                 }
            },
             computed : {
                 squaresColor(){
                     return this.$store.getters.squaresColor
                 },
                 game(){
                     return this.$store.getters.game
                 }
             }
     }

</script>

<style scoped>
    .tile {
        padding-bottom: 30%;
        width: 30%;
        margin: 1.6%;
        border-radius: 25px;
        background-color: red;
        transition: background 1.0s;
        color:white;
        cursor: pointer;
    }
    .disabled {
        cursor: not-allowed;
    }
</style>

