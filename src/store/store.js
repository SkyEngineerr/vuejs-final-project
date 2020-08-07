import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stocks: [{
                name: 'BMW',
                price: 100,
                quantity: 0,
            },
            {
                name: 'Google',
                price: 300,
                quantity: 0,
            },
            {
                name: 'Apple',
                price: 22,
                quantity: 0,
            },
            {
                name: 'Twitter',
                price: 4,
                quantity: 0,
            },
        ]
    },

    getters: {

    },

    mutations: {
        updateStocksPrice: (state) => {
            for (const item of state.stocks) {
                item.price = Math.floor(Math.random() * 400);
            }
        },
        buyStock: (state, event) => {
            const id = event.target.id
            let quantity = parseInt(event.target.value)

            for (const item of state.stocks) {
                if (item.name == id) {
                    console.log(typeof item.quantity, typeof quantity);
                    item.quantity += quantity
                    state.funds -= quantity * item.price
                    console.log(item.quantity);
                }
            }

        },
        sellStock: (state, event) => {
            const id = event.target.id
            let quantity = parseInt(event.target.value)

            for (const item of state.stocks) {
                if (item.name == id) {

                    item.quantity -= quantity
                    state.funds += quantity * item.price
                    console.log(item.quantity);
                }
            }
        },

    },

    actions: {
        updateStocksPrice: ({ commit }) => {
            commit('updateStocksPrice');
        },
        buyStock: ({ commit }, event) => {
            console.log(event);
            commit('buyStock', event);
        },
        sellStock: ({ commit }, event) => {

            commit('sellStock', event);
        },

    }
})