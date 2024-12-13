<template>

  <!-- Banner -->
  <v-row no-gutters>
   <v-col cols="12" class="px-0">
     <v-img
     src="@/assets/banner2.jpg"
        alt="Banner"
       class="banner"
       cover
       
     ></v-img>
    
   </v-col>
 </v-row>

 <v-row class="mt-0">
  <v-col
  
    cols="12"
    md="6"
    xs="6"
    sm="6"
    class="custom-height d-flex align-center justify-end pa-0"
    style="background-color: #e4e1d9"
  >
  <v-card
    max-width="400"
    class="pa-4"
    elevation="3"
    outlined
  >
    <!-- Contenido dentro del card -->
    <v-card-text class="text-justify">
      <p>  
        Hernández es un salón pensado para los niños, jóvenes y adultos de la casa, que buscan
          ser atendidos y lucir como un Rey. Nuestra temática adaptada a un reino moderno,
          permite que vivan dicha experiencia.
          Además tenemos servicios de cortesía como café capuchino, chocolate, entre otras
          bebidas calientes y un sistema de registro que facilita la atención de los clientes siendo
          la barbería donde menos tiempo esperarás a tu barbero.
</p>
    </v-card-text>
  </v-card>
 
  </v-col>

  
  <v-col
  cols="12"
  md="6"
  xs="6"
  sm="6"
  class="custom-height"
  style="padding: 0"
>
  <div class="d-flex" style="width: 100%; height: 100%">
    <!-- Parte izquierda: 60% con color #ec9b27 y texto centrado -->
    <div class="responsive-div" style="width: 60%; background-color: #ec9b27; display: flex; align-items: center; justify-content: center; padding: 16px;">
      <p class="text-center text-black">
      <span class="text-h5 font-weight-black text-uppercase text-brown-darken-4 d-block">Tradición</span>
      <span class="text-h5 font-weight-black text-uppercase text-white d-block">Innovación</span>
      <span class="text-h5 font-weight-black text-uppercase text-brown-darken-4 d-block">Excelencia</span>
      <span class="text-h5 font-weight-black text-uppercase text-white d-block">Confort</span>
      <span class="text-h5 font-weight-black text-uppercase text-brown-darken-4 d-block">Tradición</span>
      <span class="text-h5 font-weight-black text-uppercase text-white d-block">Calidad</span>
      <span class="text-h5 font-weight-black text-uppercase text-brown-darken-4 d-block">Refinamiento</span>
      <span class="text-h5 font-weight-black text-uppercase text-white d-block">Bienestar</span>
      <span class="text-h5 font-weight-black text-uppercase text-brown-darken-4 d-block">Amistad</span>
      <span class="text-h5 font-weight-black text-uppercase text-white d-block">Confort</span>
      <span class="text-h5 font-weight-black text-uppercase text-brown-darken-4 d-block">Caballería</span>
      <span class="text-h5 font-weight-black text-uppercase text-white d-block">Compromiso</span>
    </p>
    </div>
    
    <!-- Parte derecha: 40% con color #e4e1d9 -->
   
  </div>
</v-col>

</v-row>

<v-row class="mt-0 ">
  <v-col
    cols="12"
    md="6"
    xs="6"
    sm="6"
    
    class=" justify-end pa-2  d-md-flex"
    style="background-color: #e4e1d9"
  >
    <v-card
      max-width="400"
      class="pa-0 mr-8 transparent-card "
      elevation="0"
    >
      <!-- Contenido dentro del card -->
      <v-img
        src="@/assets/admin/image-bh-admin1.png"
        
        height="320"
        
        width="320"
      ></v-img>
    </v-card>
    <v-card
      max-width="200"
      class="pa-4 transparent-card"
      elevation="0"
    >
      <!-- Contenido dentro del card -->
      <v-img
        src="@/assets/icons-mustache.png"
        height="300"
        contain
        width="200"
        class="d-none d-md-flex"
      ></v-img>
    </v-card>
  </v-col>

  <v-col
    cols="12"
    md="6"
    xs="12"
    sm="12"
    class="custom-height"
    style="padding: 0"
  >
  
  
    <div class="text-black text-justify ma-6"> <!-- Ajuste aquí con margen externo -->
      <br>
      <span class="text-h3  font-weight-black text-uppercase text-brown-darken-4 d-block">Historia</span>
      
      
      <p>
        Fundada ****en 2019 por los hermanos Hernández jóvenes emprendedores con un
          deseo ardiente de emprender, fueron en busca de la excelencia educándose con los
          mejores exponentes a nivel nacional e internacional, de esta manera lograron definir su
          estilo y concepto del salón la cual permite adaptar un reino moderno para nuestros
          clientes.
      </p>
      <br>
      <span class="text-h3  font-weight-black text-uppercase text-brown-darken-4 d-block">Misión</span>
      <p>
        Lograr el equilibrio entre el precio y la calidad brindando la mejor atención para
          nuestros clientes que podamos ser accesibles para las familias chilenas.
      </p>
     
    </div>
  </v-col>
</v-row>


<v-container fluid class="d-flex justify-center pb-2 pt-0">
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="8" class="position-relative">
        <!-- Título superpuesto alineado a la izquierda -->

        <!-- Card que ajusta su altura automáticamente -->
        <v-card class="yellow-card elevation-3 mx-auto card-content" max-width="600">
          <v-card-text class="text-brown-darken-4 text-justify font-weight-bold text-h6"><!-- Cambiado el color del texto -->
            Ser la franquicia de barberías con más sucursales a nivel nacional para poder
          llegar a todos los hogares cambiando su estilo y su autoestima haciéndolos sentir como
          un rey.
          </v-card-text>
        </v-card>
        
        <span class="title-over-card text-h3 text-brown-darken-4 d-block font-weight-black text-uppercase">
          Visión
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";


export default {
 name: 'ListaDeServicios',
 data: () => ({
   services: [],
 }),

 mounted() {
   this.init()
 },

 methods: {
   formatNumber(value) {
     if (value < 1000) {
       return (Math.round((value + Number.EPSILON) * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
     }
     value = Math.round((value + Number.EPSILON) * 100) / 100;
     let formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
     return formattedValue;
   },
   convertirMinutosAHorasYMinutos(minutos) {
     var horas = Math.floor(minutos / 60);
     var minutosRestantes = minutos % 60;
     var mensaje = "";
     if (horas > 0) {
       mensaje += horas + " hora";
       if (horas !== 1) {
         mensaje += "s";
       }
     }
     if (minutosRestantes > 0) {
       if (mensaje !== "") {
         mensaje += " y ";
       }
       mensaje += minutosRestantes + " minuto";
       if (minutosRestantes !== 1) {
         mensaje += "s";
       }
     }
     return mensaje;
   },
   init() {
     axios
       .get('https://api2.simplifies.cl/api/service', {
         headers: {
           'Content-Type': 'application/json',
         }
       })
       .then((response) => {
         this.services = response.data.services;
         console.log(this.services)
       });
   },
 }
};
</script>

<style>
  .responsive-div {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 599px) {
    .responsive-div {
      width: 100%;
    }
  }
.custom-height {
 min-height: 400px; /* Altura para vista móvil */
}

/* Altura para vista de escritorio (tabletas y más grandes) */
@media (min-width: 960px) {
 .custom-height {
   min-height: 500px;
 }
}

@media (max-width: 599px) {
.translate-desktop {
 
 transform: translate(8%, -216%) !important;
}
}
@media (max-width: 599px) {
.translate-image {
 transform: translate(0%, -10%) !important;
}
}

@media (max-width: 599px) {
.responsive-card {
 max-width: 300px !important;
}
}

.banner {
height: 500px; /* Altura por defecto para pantallas grandes */
}

@media (max-width: 600px) { /* Cambia el tamaño para móviles */
.banner {
 height: 400px; /* Altura para móviles */
}
}


.rounded-lg {
 border-radius: 12px;
}

.standard-size {
 width: 100%;
 max-width: 500px;
 height: 140px; /* Ajusta la altura según tus necesidades */
 display: flex;
 flex-direction: column;
}

.avatar-col {
 background-color: #000000;
}

.text-col {
 display: flex;
 flex-direction: column;
}

.text-center {
 text-align: center;
}

.pa-4 {
 padding: 4px; /* Puedes ajustar este valor según tus necesidades */
}

.text-multiline-ellipsis {
 display: -webkit-box;
 -webkit-line-clamp: 2; /* Número de líneas permitidas */
 -webkit-box-orient: vertical;
 overflow: hidden;
 text-overflow: ellipsis;
 max-width: 100%;
 height: 3em; /* Ajustar según el tamaño de la fuente para permitir dos líneas */
}

@media (max-width: 600px) {
 .standard-size {
   height: 170px; /* Altura en dispositivos móviles */
 }

 .pa-4 {
   padding: 4px; /* Reduce el padding en dispositivos móviles */
 }
}

.transparent-card {
  background-color: transparent; /* Fondo transparente */
  box-shadow: none; /* Elimina cualquier sombra */
}

/* esto es para lo de mision */
.title-over-card {
  position: absolute;
  top: -20px;
  left: 35%;
  transform: translateX(-50%);
  
  padding: 0 12px;
  font-size: 24px;
  font-weight: bold;
}

.card-content {
  padding-top: 24px;
  padding-bottom: 24px;
}

@media (max-width: 600px) {
  .title-over-card {
    
    
    top: -10px;
  }
  .card-content {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
.yellow-card {
  background-color: #ec9b27; /* Color amarillo (quemado) */
  color: #4E3B31; /* Color marrón oscuro para el texto */
}
/* esto es para lo de mision */
</style>
