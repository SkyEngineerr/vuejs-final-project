import Home from './components/Home.vue';
import Stocks from './components/Stocks.vue';
import Portfolio from './components/Portfolio.vue';
import Header from './components/Header.vue'

export const routes = [{
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header

        }
    },
    {
        path: '/stocks',
        components: {
            default: Stocks,
            'header-top': Header
        }
    },
    {
        path: '/portfolio',
        components: {
            default: Portfolio
        }
    },

]