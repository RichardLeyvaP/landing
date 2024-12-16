import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes de las vistas
import HomeView from '../views/HomeView.vue';
import BranchesView from '../views/BranchesView.vue';
import ListaDeServicios from '../views/ListaDeServicios.vue';
import ListaDeCursos from '../views/ListaDeCursos.vue';
import AboutUsView from '../views/AboutUsView.vue';
import StudentView from '@/views/StudentView.vue';
import DisplayView from '@/views/DisplayView.vue';

// Define las rutas
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/display',
    name: 'display',
    component: DisplayView,
  },
  {
    path: '/student',
    name: 'student',
    props: true,
    component: StudentView,
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ListaDeServicios,
  },
  {
    path: '/sobre-nosotros',
    name: 'sobre-nosotros',
    component: AboutUsView,
  },
  {
    path: '/sucursales',
    name: 'sucursales',
    component: BranchesView,
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: ListaDeCursos,
  },
  // Aquí puedes agregar más rutas según sea necesario
];

// Configura el router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth', // Desplazamiento suave
        };
    } else {
        return { top: 0 }; // Volver al inicio si no hay hash
    }
}
,
});

// Middleware de navegación
router.beforeEach((to, from, next) => {
  next();
});

export default router;
