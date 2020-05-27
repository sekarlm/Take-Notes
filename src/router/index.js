import Vue from 'vue'
import Router from 'vue-router'
import ItemsContainer from '@/components/ItemsContainer.vue'
import DetailContainer from '@/components/DetailContainer.vue'
import AddForm from '@/components/AddEditContainer.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Items',
            component:ItemsContainer
        },
        {
            path:'/details',
            name: 'Details',
            component:DetailContainer
        },
        {
            path:'/take-a-note',
            name: 'Add',
            component:AddForm
        }
    ]
})