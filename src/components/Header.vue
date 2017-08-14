<template>
    <div>
        <div class="row top" :style="backgroundColor">
            <div class="col-xs-12" align="center" style="border-bottom: solid 1px white"><h1>THE GREAT</h1><h1>RGB GUESSING GAME</h1></div>
            <div class="col-xs-12" align="center"><h1 style="font-size: 54px;">{{ targetRGB | toUpperCase }}</h1></div>
        </div>
        <div class="row bot">
            <div class="col-xs-4">
                <button class="btn btn-primary btn-lg" @click="reset">New Colors</button></div>
            <div class="col-xs-4" align="center">
                    <button class="btn btn-success btn-lg" @click="start" v-if="!game">START GAME</button>
                    <h3 class="text-center" style="height: 100%; text-align: center; margin: 10px 0 0 0; display: inline-block">{{ message }}</h3></div>
            <div class="col-xs-4">
                <button class="btn btn-primary btn-lg pull-right" style="margin-left:20px"  @click="hardMode" >Hard</button>
                <button class="btn btn-primary btn-lg pull-right"  @click="easyMode">Easy</button>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions} from 'vuex';

    export default{
        data(){
            return {
                color : '255, 255, 255'
            }
        },
        methods: {
            ...mapActions({
                setEasyMode : 'easyMode',
                setHardMode : 'hardMode',
                callReset : 'reset',
                startGame : 'game',
               }),
            easyMode(){
                this.setEasyMode();
            },
            hardMode(){
                this.setHardMode();
            },
            reset(){
                this.callReset();
            },
            start(){
                this.startGame();
            }
        },
        computed: {
            targetRGB(){
                return this.$store.getters.targetRGB
            },
            message(){
                return this.$store.getters.message
            },
            game(){
                return this.$store.getters.game
            },
            previousRGB(){
                return this.$store.getters.previousRGB
            },
            backgroundColor(){
                return {
                    backgroundColor : this.previousRGB
                }
            }
        },
        filters:{
            toUpperCase(value){
                return value.toUpperCase();
            }
        }

    }
</script>

<style scoped>
    .top {
        padding: 10px

    }

    h1{
        color: white;
        font-weight: bold;
        margin-top: 10px;
    }

    .bot {
        background: whitesmoke;
        padding: 10px;
        margin-bottom: 15px;
    }

</style>