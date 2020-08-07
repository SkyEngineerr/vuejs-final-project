<template>
  <div class="container">
    <div class="row" >
    
      <div class="col-6 mb-4" v-for="item in stocks" v-if="item.quantity">
        <div class="card">
          <div class="card-header">{{item.name}} (Price: {{item.price}} | Quantity: {{item.quantity}})</div>
          <div class="card-body">
            <input :id="item.name" type="text" placeholder="Quantity" 
            @change="quantity=$event"/>
            <button class="btn btn-danger" @click="sellStock(quantity)">Sell</button>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
   
    methods:{
        ...mapActions([
            'sellStock',   
        ]),
    },
    computed:{
        stocks(quantity){
            
            return this.$store.state.stocks
        },
        
    }
}
</script>