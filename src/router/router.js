/**En el router es donde se van a configurar todas las rutas de la página web */

import { createRouter, createWebHashHistory } from 'vue-router'
 
//import EstudianteActualizar from '../pages/EstudianteActualizar.vue'
//import EstudianteConsultar from '../pages/EstudianteConsultar.vue'
//import EstudianteEliminar from '../pages/EstudianteEliminar.vue'
//import EstudianteGuardar from '../pages/EstudianteGuardar.vue'
//import NoFoundPage from '../pages/NoFoundPage.vue'
 
const routes = [
    {
        path: '/actualizar',
        component: ()=> import('@/pages/EstudianteActualizar')//carga perezosa
    },
    {
        path: '/consultar/:id',
        component: ()=> import('@/pages/EstudianteConsultar')
    },
    {
        path: '/eliminar',
        component:()=> import('@/pages/EstudianteEliminar')
    },
    {
        path: '/guardar',
        component: ()=> import('@/pages/EstudianteGuardar')
    },
    {
        path: '/:pathMatch(.*)*',
        component:  ()=> import('@/pages/NoFoundPage')
    }
]
 
const router = createRouter({history: createWebHashHistory(), routes})
 
export default router