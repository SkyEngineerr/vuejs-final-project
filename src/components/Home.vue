<template>
  <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Trade or View your Portfolio</h1>
                <p>You may Save & Load your data</p>
                <p>Click on 'End Day' to begin a new Day!</p>
                <hr>
                <h3>Your Funds: ${{funds}}</h3>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  computed:{
        funds(){
            return this.$store.state.funds
        }
    }
}
</script>