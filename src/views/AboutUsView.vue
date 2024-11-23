<template>

  <!-- Banner -->
  <v-row no-gutters>
    <v-col cols="12" class="px-0">
    <!-- Imagen del banner -->
    <div class="banner-container">
      <v-img
        src="@/assets/banner/b2.jpg"
        alt="Banner"
        class="banner"
        cover
      ></v-img>

      <!-- Texto sobre el banner -->
      <div class=" ">
        <h1 class="fadeInRight1 text-white text-h2 font-weight-bold fade-in text-left"><p>DON </p></h1>
        <h1 class="fadeInRight2 text-white text-h2 font-weight-bold fade-in text-left"><p>HERNÁNDEZ </p></h1>
        
      </div>
    </div>
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
    max-width="500"
    class="pa-4"
    elevation="3"
    outlined
  >
    <!-- Contenido dentro del card -->
    <v-card-text class="text-h7 text-justify fade-in" style="font-family: 'Helvetica', sans-serif; font-weight: 400;">
        
       <strong> Don Hernández</strong> es un salón pensado para los niños, jóvenes y adultos de la casa, que buscan ser atendidos y lucir como un Rey. <br><br> Nuestra temática adaptada a un reino moderno,permite que vivan dicha experiencia.
       <br><br>Además tenemos servicios de cortesía como café capuchino, chocolate, entre otras
          bebidas calientes y un sistema de registro que facilita la atención de los clientes siendo la barbería donde menos tiempo esperarás a tu barbero.

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
   
    <div id="credit-list-demo" class="responsive-div" style=" max-height: 500px; background-color: #ec9b27; display: flex; align-items: center; justify-content: center; padding: 16px;">
  <transition-group name="credit-list" tag="div" class="credit-list">
    <!-- Primer conjunto de elementos -->
    <v-list-item
      v-for="(item, index) in items"
      :key="`first-${item}`"
      class="credit-list-item"
      style="font-size: 1.5rem;"
    >
      <span 
        :class="index % 2 === 0 ? 'text-style-one' : 'text-style-two'" 
        class="text-h5 font-weight-black text-uppercase d-block">
        {{ item }}
      </span>
    </v-list-item>
    <!-- Duplicado de los elementos para la transición continua -->
    <v-list-item
      v-for="(item, index) in items"
      :key="`second-${item}`"
      class="credit-list-item"
      style="font-size: 1.5rem;"
    >
      <span 
        :class="index % 2 === 0 ? 'text-style-one' : 'text-style-two'" 
        class="text-h5 font-weight-black text-uppercase d-block">
        {{ item }}
      </span>
    </v-list-item>
  </transition-group>
</div>
    
    <!-- Parte derecha: 40% con color #e4e1d9 -->
   
  </div>

</v-col>

</v-row>


<v-container>
    <v-row>
      <v-col cols="12">
        <br>
        <br>
        <br>
        <br>
        <span class="text-h3  font-weight-black text-uppercase text-center text-brown-darken-4 d-block fade-in">Valores</span>
      </v-col>
      <v-col cols="12">
        
      
      <!-- Contenedor para las tarjetas con animaciones infinitas -->
      <transition-group name="infinite-move" tag="div" class="d-flex flex-wrap justify-center">
        <v-card
          v-for="(value, index) in values"
          :key="index"
          :title="value.title"
          :text="value.description"
          
          class="ma-4 pa-6 infinite-move"
          :class="`move-infinite-${index % 4} style-card-${index }`"
          color=""
          max-width="350"
        
          outlined
          elevation="2"
        >
        <template v-slot:prepend>
          <v-avatar :color="value.color">
            <v-icon :icon="value.icon"></v-icon>
          </v-avatar>
        </template>

        </v-card>
      </transition-group>
      <br>
      <br>
      <br>
    </v-col>
    </v-row>
  </v-container>
  

















  <section id="about" class="section">


<v-row class="mt-0 ">
  <v-col
    cols="12"
    md="6"
    xs="6"
    sm="6"
    
    class=" justify-end pa-2 pt-16  d-md-flex fade-in"
    style="background-color: #e4e1d9"
  >


  <!-- <v-card
  max-width="400"
  class="pa-0 mr-8 transparent-card hover-card"
  elevation="0"
>
  <v-img
    src="@/assets/admin/image-bh-admin1.png"
    class="hover-image"
    height="320"
    width="320"
  ></v-img>
</v-card> -->

<v-card
    max-width="400"
    class="pa-0 mr-8 transparent-card hover-card"
    elevation="0"
    @mouseenter="createConfetti"
  >
    <v-img
      src="@/assets/admin/image-bh-admin1.png"
      class="hover-image "
      height="320"
      width="320"
    ></v-img>
    <div class="confetti" ref="confetti"></div> <!-- Elemento para el confeti -->
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
  
  
    <div class="text-black text-justify ma-8"> <!-- Ajuste aquí con margen externo -->
      
      <span class="text-h3  font-weight-black text-uppercase text-brown-darken-4 d-block fade-in">Historia</span>
      
      
      <p class="text-justify  text-h7 pr-16 fade-in" style="font-family: 'Helvetica', sans-serif; font-weight: 400;">
        Fundada en 2019 por los hermanos Hernández jóvenes emprendedores con un
          deseo ardiente de emprender, fueron en busca de la excelencia educándose con los
          mejores exponentes a nivel nacional e internacional, de esta manera lograron definir su
          estilo y concepto del salón la cual permite adaptar un reino moderno para nuestros
          clientes.
      </p>
      <br>
      <span class="text-h3  font-weight-black text-uppercase text-brown-darken-4 d-block fade-in">Misión</span>
      <p class="text-justify text-h7 pr-16 fade-in" style="font-family: 'Helvetica', sans-serif; font-weight: 400;">
        Brindar una experiencia de belleza única para hombres, donde cada cliente se sienta como un rey.
         Nuestro enfoque es crear un ambiente exclusivo y sistematizado que va más allá de un simple corte de cabello,
          ofreciendo una atención de calidad en cada visita.
      </p>
      <br>
      <br>
      <br>
      <br>
      <br>
     
    </div>
   
  </v-col>
</v-row>

</section>



<v-container fluid class="d-flex justify-center pb-2 pt-0 ">
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="8" class="position-relative">
        <!-- Título superpuesto alineado a la izquierda -->

        <!-- Card que ajusta su altura automáticamente -->
        <v-card class="yellow-card elevation-3 mx-auto card-content fade-in" max-width="1000">
          <v-container >
          <v-card-text class="text-brown-darken-4 text-justify  text-h7" style="font-family: 'Helvetica', sans-serif; font-weight: 800;"><!-- Cambiado el color del texto -->
            <p class="text-justify text-h7 pr-16 fade-in" style="font-family: 'Helvetica', sans-serif; font-weight: 400;">
     
            Ser la cadena de barberías líder en Chile, reconocida por elevar la autoestima de los hombres,
             haciéndolos sentir exclusivos y cuidados. Aspiramos a tener franquicias en cada ciudad del país,
              con un equipo operativo y administrativo sólido que permita expandir nuestra experiencia única a todo Chile.
            </p>
            </v-card-text>
        </v-container>
        </v-card>
        
        <span class="title-over-card text-h3 text-brown-darken-4 d-block font-weight-black text-uppercase fade-in">
          Visión
        </span>
      </v-col>
      
    </v-row>
  </v-container>
  <br>
  <br>
  <br>
  <br>

</template>

<script>
import axios from "axios";
import { ref, onMounted } from 'vue';
import _ from 'lodash';


document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2, // El 20% del elemento debe ser visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Deja de observar una vez que ya es visible
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => observer.observe(el));
});



export default {
  
 name: 'ListaDeServicios',
 data: () => ({
   services: [],
   values: [
        { color: 'orange', icon: 'mdi-star-outline', title: 'Calidad y Excelencia', description: 'Nos esforzamos por ofrecer un servicio excepcional en cada visita.' },
        { color: 'white',icon: 'mdi-atom', title: 'Innovación', description: 'Creamos experiencias disruptivas que diferencian nuestra marca.' },
        { color: 'white',icon: 'mdi-account-heart-outline',title: 'Atención al Cliente', description: 'Cada cliente es especial y merece ser tratado con respeto y dedicación.' },
        { color: 'white',icon: 'mdi-account-group-outline',title: 'Trabajo en Equipo', description: 'Un equipo comprometido es clave para nuestro éxito y para la satisfacción de nuestros clientes.' },
        { color: 'white',icon: 'mdi-star-plus-outline',title: 'Crecimiento Personal', description: 'Impulsamos la mejora constante de nuestro equipo, tanto en habilidades técnicas como en valores humanos.' },
      ],
 }),

 mounted() {
   this.init()
 },
 setup() {
  
  const observedElements = ref([]);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Deja de observar cuando ya es visible
      }
    });
  },
  { threshold: 0.2 } // Ajusta el porcentaje visible para activar la animación
);

onMounted(() => {
  observedElements.value = document.querySelectorAll(".fade-in");
  observedElements.value.forEach((el) => observer.observe(el));
});
    const items = ref(['Tradición', 'Innovación', 'Excelencia', 'Confort', 'Calidad', 'Atención', 'Bienestar', 'Caballería', 'Compromiso', 'Elegancia',  'Estilo', 'Precisión', 'Confianza', 'Perfección', 'Exclusividad']
    );

    const shuffle = () => {
      items.value = _.shuffle(items.value);
    };

    onMounted(() => {
      setInterval(shuffle, 2600); // Mezcla automáticamente cada 2 segundos
    });

    return {
      items
    };
  },

 methods: {
  createConfetti() {
      for (let i = 0; i < 50; i++) { // Ajusta el número de piezas de confeti aquí
        this.createConfettiPiece();
      }
    },
    createConfettiPiece() {
  const piece = document.createElement('div');
  piece.className = 'piece';
  piece.style.left = Math.random() * 100 + '%'; // Posición horizontal aleatoria
  piece.style.top = Math.random() * -50 + '%'; // Posición vertical aleatoria, iniciando más arriba
  piece.style.backgroundColor = this.getRandomColor();
  piece.style.width = `${Math.random() * 10 + 5}px`; // Ancho aleatorio entre 5px y 15px
  piece.style.height = `${Math.random() * 10 + 5}px`; // Alto aleatorio entre 5px y 15px
  piece.style.position = 'absolute';
  piece.style.opacity = 1;

  this.$refs.confetti.appendChild(piece);

  // Animación de caída
  piece.animate([
    { transform: 'translateY(0)', opacity: 1 },
    { transform: `translateY(300px) rotate(720deg)`, opacity: 0 }, // Caída más pronunciada
  ], {
    duration: 2500,
    easing: 'ease-in-out',
    fill: 'forwards'
  });

  // Eliminar la pieza de confeti después de la animación
  setTimeout(() => {
    piece.remove();
  }, 3000);
}
,
    getRandomColor() {
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
      return colors[Math.floor(Math.random() * colors.length)];
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
         this.services = response.data.services;
         console.log(this.services)
       });
   },
 }
};
</script>

<style scoped>
.banner-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-220%, -50%);
  text-align: center;
}
</style>

<!-- ultimo componente de valores -->

<style scoped>
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
  top: 33%;
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
  top: 47%;
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
<style scoped>
/* Agregar estilos específicos para cada tarjeta */
.style-card-0 {
  background-color: white;
  color: black;
}
.style-card-1 {
  background-color: #ec9b27; /* Color amarillo (quemado) */
  color: #4E3B31; /* Color marrón oscuro para el texto */
}
.style-card-2 {
  background-color: black;
  color: white;
}
.style-card-3 {
  background-color: #00356d
  ;
  color: white;
}
.style-card-4 {
  background-color: #859c63

  ;
  color: black;
}
/* Animaciones infinitas en distintas direcciones */
@keyframes moveDiagonal {
  0% { transform: translate(0, 0); }
  25% { transform: translate(50px, -10px); }
  50% { transform: translate(-10px, 50px); }
  75% { transform: translate(10px, 50px); }
  100% { transform: translate(0, 0); }
}

@keyframes moveUpDown {
  0% { transform: translateY(0); }
  50% { transform: translateY(55px); }
  100% { transform: translateY(0); }
}

@keyframes moveLeftRight {
  0% { transform: translateX(0); }
  50% { transform: translateX(35px); }
  100% { transform: translateX(0); }
}

@keyframes moveRandom {
  0% { transform: translate(0, 0); }
  20% { transform: translate(45px, -15px); }
  40% { transform: translate(-5px, 45px); }
  60% { transform: translate(45px, 15px); }
  80% { transform: translate(-5px, -45px); }
  100% { transform: translate(100, 80); }
}

/* Aplicar la animación infinita a cada tarjeta con una clase única */
.move-infinite-0 {
  animation: moveDiagonal 13s ease-in-out infinite;
}

.move-infinite-1 {
  animation: moveUpDown 14s ease-in-out infinite;
}

.move-infinite-2 {
  animation: moveLeftRight 13.5s ease-in-out infinite;
}

.move-infinite-3 {
  animation: moveRandom 15s ease-in-out infinite;
}

.infinite-move-enter-active,
.infinite-move-leave-active {
  transition: opacity 1.5s ease;
}

.infinite-move-enter, .infinite-move-leave-to {
  opacity: 0;
}
</style>
<!-- ultimo componente de valores -->

<style>
  .responsive-div {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  
  }

  @media (max-width: 599px) {
    .responsive-div {
      height: 350px;
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

<style scoped>
#credit-list-demo {
  overflow: hidden;
  background-color: #FF8C00; /* Fondo naranja */
}

.credit-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scrollUp 15s linear infinite;
}

.credit-list-item {
  color: white;
  transition: transform 2s;
}

@keyframes scrollUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

/* Estilos alternos para los elementos */
.text-style-one {
  color: #3e2723; /* Color marrón oscuro */
}

.text-style-two {
  color: #ffffff; /* Color blanco */
}




</style>


<style scoped>
.transparent-card {
  background-color: transparent; /* Asegura que el fondo del card sea transparente */
  position: relative; /* Necesario para posicionar el confeti */
  overflow: hidden; /* Asegúrate de que el contenido no se desborde */
}

.hover-image {
  transition: transform 1s ease, filter 1s ease; /* Transición suave para el tamaño y el efecto */
}

.hover-card:hover .hover-image {
  transform: scale(1.13) rotate(0deg); /* Aumenta el tamaño y rota ligeramente */
  filter: brightness(1.2); /* Opcional: aclara la imagen al pasar el mouse */
}

.confetti {
  position: absolute; /* Posición absoluta para que cubra el card */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* No intercepta eventos del mouse */
  overflow: hidden; /* Para asegurarte de que el confeti no se desborde */
}

.piece {
  position: absolute;
  opacity: 0;
}
</style>