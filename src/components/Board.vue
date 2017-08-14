<template>
<div class="col-xs-12" align="center">
        <app-tile v-for="index in numSquares" :index="index -1 "></app-tile>
        <app-win v-if="win" style="z-index: 1; position: absolute; top: 30%; left: 50%"></app-win>
</div>
</template>

<script>
    import Tile from './Tile.vue'
    import Win from './Win.vue'
    export default {
        components:{
            appTile : Tile,
            appWin : Win
        },
        computed : {
            numSquares(){
                return this.$store.getters.numSquares;
            },
            win(){
                return this.$store.getters.win;
            }
        }
    }
</script>

<style scoped>

</style>