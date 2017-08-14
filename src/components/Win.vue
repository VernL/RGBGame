<template>

    <div class="panel panel-success" align="center" style="width: 500px; margin-left:-250px">
        <div class="panel-heading">
            </div>
        <div class="panel-body">
            <H3>Congratulations, You Won!</H3>
            <br>
            <div class="col-xs-offset-4 col-xs-4" >
                <div class="btn-group btn-group-justified" role="group" aria-label="Play Again?">
                    <div class="btn-group" role="group">
                        <button class="btn btn-success btn-lg" @click="playAgain">Play Again?</button>
                    </div>
                </div>
            </div>
        </div>
    </div>





</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions({
                newGame : 'newGame'
            }),
            playAgain(){
                this.newGame();
            }
        }
    }
</script>

<style scoped>

</style>