<template>prepend-icon="$vuetify"

  <v-app style="background-color: #e4e1d9">
    <v-app-bar color="#e4e1d9" elevation="12">
      <v-app-bar-nav-icon @click="drawer = !drawer" class=""></v-app-bar-nav-icon>
      <v-toolbar-title style="max-height: auto;">
        <router-link to="/">
  <v-img
    src="@/assets/LOGOS/LOGOS/BARBERIAtransparente.png"
    alt="Logo de la barbería"
    class="logo-responsive"
    contain
  ></v-img>
</router-link>

      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn size="small" variant="plain" href="https://reservasbh.simplifies.cl" class=" font-weight-bold text-capitalize d-none d-md-flex">RESERVAS</v-btn>
      <v-btn size="small" variant="plain" to="/servicios" class="font-weight-bold text-capitalize d-none d-md-flex">SERVICIOS</v-btn>
      <v-btn size="small" variant="plain" to="/sobre-nosotros"  class="font-weight-bold text-capitalize d-none d-md-flex">SOBRE NOSOTROS</v-btn>
      <v-btn size="small" variant="plain" to="/sucursales" class="font-weight-bold text-capitalize d-none d-md-flex">SUCURSALES</v-btn>
      <v-btn size="small" variant="plain" href="#tienda-online" class="font-weight-bold text-capitalize d-none d-md-flex">TIENDA ONLINE</v-btn>

      <v-menu class="d-none d-md-flex">
        <template v-slot:activator="{ props }">
          <v-btn  size="small" class="d-none d-md-flex font-weight-bold" v-bind="props">
            Cursos
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/cursos" v-for="(item, index) in courseData" :key="index">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <v-btn icon size="small" density="comfortable" class="ml-2" href="https://www.instagram.com/barberiahernandeztv/" target="_blank">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn size="small" bg-color="#FFFFFF00" icon density="comfortable" href="https://www.facebook.com/profile.php?id=100065259200120" target="_blank">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn size="small" icon density="comfortable" class="ml-2" href="https://www.youtube.com/channel/UCRVTESNlCnAS45J4DEBi7tQ" target="_blank">
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
     
      <v-btn size="small" icon density="comfortable" class="ml-2" href="https://www.tiktok.com/@barberiahernandeztv" target="_blank">
          <v-icon>
            <img src="@/assets/logo-tiktok.svg" alt="TikTok Icon" style="width: 17px; height: 17px;">
          </v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
  <v-list dense>
    <v-list-item to="/" class="d-flex align-center" prepend-icon="mdi-home">
      <v-list-item-content class="px-0">
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item href="https://reservasbh.simplifies.cl" class="d-flex align-center" prepend-icon="mdi-calendar">
      <v-list-item-content class="px-0">
        <v-list-item-title>Reserva</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item to="/servicios" class="d-flex align-center" prepend-icon="mdi-format-list-bulleted-triangle">
      <v-list-item-content class="px-0">
        <v-list-item-title>Servicios</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item to="/sobre-nosotros" class="d-flex align-center" prepend-icon="mdi-account-group">
      <v-list-item-content class="px-0">
        <v-list-item-title>Sobre nosotros</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item to="/sucursales" class="d-flex align-center" prepend-icon="mdi-store">
      <v-list-item-content class="px-0">
        <v-list-item-title>Sucursales</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item href="#tienda-online" class="d-flex align-center" prepend-icon="mdi-store">
      <v-list-item-content class="px-0">
        <v-list-item-title>Tienda online</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  <!-- Cursos dentro del Drawer -->
  <v-list-item @click="toggleCursos" class="d-flex align-center" prepend-icon="mdi-school">
  <v-list-item-content class="px-0">
    <v-list-item-title>Cursos</v-list-item-title>
  </v-list-item-content>
  <v-list-item-icon>
    <v-icon>{{ cursosAbiertos ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
  </v-list-item-icon>
</v-list-item>

<v-expand-transition>
  <div v-show="cursosAbiertos">
    <v-list-item v-for="(item, index) in courseData" :key="index" :value="index" to="/cursos" class="d-flex align-center" prepend-icon="mdi-book-open-page-variant">
      <v-list-item-content class="px-0">
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</v-expand-transition>
    <!-- Cursos dentro del Drawer 
    <v-subheader>Cursos</v-subheader>
    <v-list-item v-for="(item, index) in courseData" :key="index" :value="index" to="/cursos" class="d-flex align-center" prepend-icon="mdi-book-open-page-variant">
      <v-list-item-content class="px-0">
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>-->
  </v-list>
</v-navigation-drawer>


    <br>
    <br>

    <router-view></router-view>

    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import axios from "axios";
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    cursosAbiertos: false,
    courseData: [],
    isCoursesOpen: false,
  }),
  components: {
    AppFooter
  },
  mounted() {
    axios
      .get('https://api2.simplifies.cl/api/course')
      .then((response) => {
        this.courseData = response.data.courses;
      });
  },
  methods: {
    toggleCursos() {
      this.cursosAbiertos = !this.cursosAbiertos;
    },
  },
};
</script>

<style>


body {
  font-family: 'Raleway', sans-serif;
}

.logo-responsive {
  width: 200px; /* Tamaño por defecto para escritorio */
 
}

/* Ajuste de tamaño para pantallas móviles */
@media (max-width: 600px) {
  .logo-responsive {
    width: 400px; /* Tamaño mayor para pantallas móviles */
    height: 400px;
  }
}
</style>
