<template>

     <!-- Banner -->
     <v-row no-gutters>
      <v-col cols="12" class="px-0">
        <v-img
        
        src="@/assets/banner/b3.jpg"
        alt="Banner"
          class="banner"
          cover
          
        ></v-img>
        <!-- Texto sobre el banner -->
      <div class=" ">

        <h2  class="fadeInRight1 fade-in fadeInRight raleway-font text-h2 text-justify text-uppercase font-weight-black mobile-yellow"
    style="color: #ffffff; line-height: 1.9; font-size: 3.6rem;">
    Nuestros
      </h2>
        <h1  class="fadeInRight2 fade-in fadeInRight raleway-font text-h1 text-justify text-uppercase font-weight-black mobile-yellow"
    style="color: #ec9b27; line-height: 1.9; font-size: 3.5rem;">
    Servicios
      </h1>
      
        <!-- <h1 class="fadeInRight1 text-white text-h2 font-weight-bold fade-in text-left" style="color: #ffffff; line-height: 0.9; font-size: 3.5rem;"><p>Barbería </p></h1>
        <h1 class="fadeInRight2 text-white text-h2 font-weight-bold fade-in text-left" style="color: #ffffff; line-height: 0.9; font-size: 3.5rem;"><p>HERNÁNDEZ </p></h1>
         -->
      </div>
       
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col
      cols="6"
      md="6"
      xs="6"
      sm="6"
      class="custom-height"
      style="background-color: #e4e1d9"
    >
      <!-- Contenido de la columna -->
      
    </v-col>

    <v-col
      cols="6"
      md="6"
      xs="6"
      sm="6"
      class="custom-height"
      style="background-color: #ec9b27"
    >
      <!-- Contenido de la columna -->
    
    </v-col>
  </v-row>
  

     
  <!-- <v-row class="mt-16 position-relative">
    <v-card
      elevation="3"
      max-width="700"
      max-height="300"      
      width="700"
      height="250"
      class="responsive-card translate-desktop overflow-auto"
    >
          <v-card-title class="text-h6 text-center  overflow-auto">Barbería Hernández</v-card-title>
          <v-card-text class="justify-center align-center" style="font-family: 'Helvetica', sans-serif; font-weight: 400;" >
            Los hombres están cada vez más preocupados por la estética y ¿qué hay de malo en eso? Y no se trata sólo del cabello, la demanda de servicios personalizados para barbas y bigotes está aumentando. Por eso, Barbería Hernández invierte en los mejores profesionales para ofrecerte una atención y un servicio de alta calidad.
          </v-card-text>
        </v-card>
      </v-row> -->

      <v-row class="mt-16 position-relative">
  <v-card
    elevation="3"
    max-width="700"
    max-height="400"      
    
    
    class="translate-desktop overflow-auto slide-up"
  >
    <v-card-title class="text-h6 text-center overflow-auto">
      Barbería Hernández
    </v-card-title>
    <v-card-text
  class=" text-justify"
  style="font-family: 'Helvetica', sans-serif; font-weight: 400;"
>
  Es un salón pensado para los niños, jóvenes y adultos de la casa que buscan ser atendidos y lucir como un rey. Nuestra temática, adaptada a un reino moderno, permite que vivan dicha experiencia.

  Tenemos servicios de cortesía como café capuchino, chocolate, entre otras bebidas calientes. Además, todos los cortes incluyen lavado de cabello.

  En nuestra barbería tendrás a tu disposición la anfitriona, el barbero, el técnico capilar, el auxiliar de aseo y la cajera, concentrados en brindarte el mejor servicio. 
</v-card-text>

  </v-card>
</v-row>

  
    
    <v-row class="ma-2">
      
    <!-- <v-col
      v-for="n in 4"
      :key="n"
      class="d-flex child-flex translate-image"
      cols="12"
      md="3"      
      sm="6"
      xs="3"
      style="   transform: translate(0%, -40%);"
    >
      <v-img
      
      height="300"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
         :src="getImageSrc(n-1)"
        aspect-ratio="0"
        class="bg-grey-lighten-2"
        cover
      >
        
      </v-img>
    </v-col> -->
    <v-col
      class="d-flex child-flex translate-image"
      cols="12"
      md="3"      
      sm="6"
      xs="3"
      style="   transform: translate(9%, -40%);"
    >
      <v-img
      
      height="300"
        
         :src="getImageSrc(0)"
        aspect-ratio="0"
        class="bg-grey-lighten-2 hover-image"
        cover
      >        
      </v-img>
    </v-col>

    <v-col
  class="d-flex child-flex translate-image"
  cols="12"
  md="3"      
  sm="6"
  xs="3"
  style="transform: translate(3%, -40%);"
>
  <v-img
    height="300"
    
    :src="getImageSrc(1)"
    aspect-ratio="0"
    class="bg-grey-lighten-2 hover-image"
    cover
  >        
  </v-img>
</v-col>

    
    <v-col
      class="d-flex child-flex translate-image"
      cols="12"
      md="3"      
      sm="6"
      xs="3"
      style="   transform: translate(-3%, -40%);"
    >
      <v-img
      
      height="300"
        
         :src="getImageSrc(2)"
        aspect-ratio="0"
        class="bg-grey-lighten-2 hover-image"
        cover
      >        
      </v-img>
    </v-col>

    <v-col
      class="d-flex child-flex translate-image"
      cols="12"
      md="3"      
      sm="6"
      xs="3"
      style="   transform: translate(-9%, -40%);"
    >
      <v-img
      
      height="300"
        
         :src="getImageSrc(3)"
        aspect-ratio="0"
        class="bg-grey-lighten-2 hover-image"
        cover
      >        
      </v-img>
    </v-col>


  </v-row>

  
  
  
    <v-container class="pt-0" >
      <v-row  >
        
        <v-col cols="12" class="pt-0">
  <span class="text-h3 mx-2 font-weight-black text-uppercase text-amber-darken-1 wobble-text">Nuestros</span>
  <span class="text-h3 mx-2 font-weight-black text-uppercase text-brown-darken-4 wobble-text">Servicios</span>
  <br><br>
</v-col>



      </v-row>
      <v-row>
        <v-col cols="12" md="3" sm="6" v-for="service in services" :key="service.name">
        

          <v-card elevation="10" height="100%" class="rounded-lg d-flex flex-column hover-card-container">
  <v-row no-gutters class="flex-grow-1">
    <!-- Columna para el icono con fondo amarillo -->
    <v-col cols="12" class="d-flex justify-center align-center avatar-col">
      <v-avatar size="120" elevation="3" class="mt-4 mb-4" color="grey-lighten-4">
        <v-img :src="'https://api2.simplifies.cl/api/images/' + service.image_service" alt="image"></v-img>
      </v-avatar>
    </v-col>
    <!-- Columna para el texto -->
    <v-col cols="12" class="d-flex flex-column justify-center text-col">
      <div class="pa-4 flex-grow-1" style="background-color: white; color: black;">
        <p class="text-subtitle-1 text-center font-weight-bold text-uppercase">{{ service.name }}</p>
        <p class="text-subtitle-2 text-justify" style="font-family: 'Helvetica', sans-serif; font-weight: 400;">{{ service.service_comment }}</p>
      </div>
    </v-col>
  </v-row>
</v-card>




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
      getImageSrc(n) {
      // Asegúrate de que las imágenes existan en esta ruta en tu proyecto
     
     // return "https://lh3.googleusercontent.com/Qek__OdMejoZCyxn6dzPhxGjfAPb_0B6rDVCIJJzIRO5B7lQ0bU8aV-FT7jt8l1IxTbF2ZBMYC4RHjbbkbZKtXngs4zIK_HAJXlE9et-FisOsOCDuc8=h600";
     // return require(`@/assets/barber/barber${n}.jpg`);
     return new URL(`../assets/barber/barber${n}.jpg`, import.meta.url).href;
    },
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
           // Filtrar solo los servicios donde show_service es 1
      this.services = response.data.services.filter(service => service.show_service === 1);
      console.log(this.services);
            // this.services = response.data.services;
            // console.log(this.services)
          });
      },
    }
  };
  </script>



<style scoped>

@media (max-width: 768px) {
  h2.fadeInRight1{
    font-size: 3rem !important; /* Sobrescribe cualquier estilo en línea */
    line-height: 0 !important;
  }
  h1.fadeInRight2 {
    font-size: 3.8rem !important; /* Sobrescribe cualquier estilo en línea */
    line-height: 0 !important;
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 2s ease-out, transform 2s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
.fadeInRight1 {
  position: absolute;
  top: 3%;
  left: 5%;
  animation: fadeInRight 2.9s forwards;
}

@keyframes fadeInRight1 {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.fadeInRight2 {
  position: absolute;
  top: 4%;
  left: 5%;
  animation: fadeInRight 3.5s forwards;
}

@keyframes fadeInRight2 {
  0% {
    opacity: 0;
    transform: translateX(180px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}



</style>
  
  <style>
 .custom-height {
    min-height: 400px; /* Altura para vista móvil */
  }

  /* Altura para vista de escritorio (tabletas y más grandes) */
  @media (min-width: 960px) {
    .custom-height {
      min-height: 500px;
    }
  }
 
  .translate-desktop {   
    height: 250px;
    width: 700px; 
  position: absolute;
  left: 50%;
  transform: translate(-50%, -180%);
}

@media (max-width: 599px) {
  .translate-desktop {
    height: 350px; 
    width: 300px;
    left: 5%;
    transform: translate(0, 0); /* Resetea el translate en pantallas pequeñas */
    max-width: 10%; /* Ajusta el ancho en móviles */
   
    margin-top: 330px; /* Espacio superior reducido para móviles */
  }
}
  @media (max-width: 599px) {
  .translate-image {
    transform: translate(0%, -10%) !important;
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
  
  </style>
  <style scoped>
  /* Define la animación de deslizamiento hacia arriba */
 /* Define la animación de deslizamiento hacia arriba */
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate(-50%, -120%); /* Pequeño desplazamiento hacia abajo */
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -180%); /* Posición final */
  }
}

/* Aplica la animación a la clase slide-up */
.slide-up {
  animation: slideUp 3s ease-out; /* Duración de 1 segundo, ajuste suave */
}

/* esto para las 4 imagenes darle efecto */

.translate-image {
  overflow: hidden; /* Evita que la imagen sobresalga del contenedor */
}

.hover-image {
  transition: transform 1s ease, filter 2s ease; /* Transición suave para el zoom y brillo */
}

.translate-image:hover .hover-image {
  transform: scale(1.4); /* Aumenta el tamaño de la imagen */
  filter: brightness(1.3); /* Aumenta el brillo para resaltar */
}

</style>
  <!-- esto es para las letras Nuestros servicios la animacion -->
  <style scoped>
  .wobble-text {
    display: inline-block;
    animation: wobble 8s ease-in-out infinite; /* Duración de 10 segundos por ciclo */
  }
  
 
  </style>
  
  
  <style scoped>
.hover-card {
  transition: transform 0.5s ease, border 0.3s ease; /* Transición para rotación y borde */
}

.hover-card:hover {
  transform: rotate(5deg); /* Rota la tarjeta ligeramente */
  border: 3px solid #ec9b27; /* Añade un borde amarillo */
}
</style>
<style scoped>
/* Usa un borde transparente inicialmente para mantener el tamaño */
.hover-card-container {
  border: 2px solid transparent; /* Borde inicial transparente */
  border-color: #cfcecc; /* Cambia el color del borde a amarillo en hover */
  box-sizing: border-box;
  border-radius: 12px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.hover-card-container:hover {
  border: 2px solid transparent; /* Borde inicial transparente */
  border-color: #ec9b27; /* Cambia el color del borde a amarillo en hover */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); /* Sombra para el efecto de hover */
}
</style>

