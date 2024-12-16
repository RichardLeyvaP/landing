

<template>
 




  <v-row>
 <br>
 <br>
</v-row>




  <v-row class="pb-8 mt-12 pl-8"  style="background-color: #ec9b27">

    <v-row class="ml-6 mr-6">
    <v-col cols="12" class=" " md="6">
      <br>
      <br>
    <br>
    
      <div class="call-to-action animated-text0" :class="{ 'slide-in': hasScrolled }">
        <h1 class="raleway-font text-h4    text-uppercase font-weight-black" style="color: #ffffff">Lleva tu negocio al próximo nivel usando <span class="text-secondary ">
          Simplifies
        </span> </h1>
        
        <p class="pt-8">
          Simplifies te ofrece todas las herramientas necesarias para gestionar negocio de manera eficiente,
          todo desde una sola aplicación intuitiva.

        </p>
        <div>
        <p class="pt-6">
        
          
  <!-- Mostrar `chips1` o `chips2` dependiendo del estado `showFirstSet` -->
  <template v-if="showFirstSet">
    <v-chip
    v-for="(chip, index) in chips1"
    :key="`chips1-${index}`"
    class="ma-2"
    :color="chip.color"
    variant="outlined"
    :prepend-icon="chip.icon"
    v-show="showFirstSet"  
    :class="{'fade-in': showFirstSet}" 
  >
    {{ chip.text }}
  </v-chip>
  </template>

  <template v-else>
    <v-chip
      v-for="(chip, index) in chips2"
      :key="`chips2-${index}`"
      class="ma-2"
      :color="chip.color"
      variant="outlined"
      :prepend-icon="chip.icon"
      
    >
      {{ chip.text }}
    </v-chip>
  </template>


</p>
</div>

<br>
        <v-btn color="secondary" prepend-icon="mdi-eye"  href="https://www.simplifies.cl">Ver más</v-btn>
      </div>
    </v-col>
     <!-- Sección con animación de entrada en <v-card-text> -->
  <v-col cols="12"  class=" " md="6" >
  
     <!-- Sección que detecta el scroll -->
  <div class="landing-section" :class="{ 'has-scrolled': hasScrolled }" ref="landingSection">
    <div class="content-container">
      <!-- Texto a la izquierda como llamada a la acción -->
      

      <!-- Contenedor de imágenes superpuestas a la derecha -->
      <div class="image-container ">
<!-- Imagen 1 (entra desde la izquierda) -->
<img src="@/assets/places/apk.png" width="120" alt="Imagen 1" class="animated-image image-1" />

<!-- Imagen 2 (entra desde la derecha y superpuesta) -->
<img src="@/assets/places/tottem.png" width="190" alt="Imagen 2" class="animated-image image-2" />

<!-- Imagen 3 (entra desde abajo y superpuesta) -->
<img src="@/assets/places/admin.png" width="560" alt="Imagen 3" class="animated-image image-3" />
</div>


    </div>
  </div>
  </v-col>
</v-row>

  </v-row>




  <v-row>
    <br>
   
    
  </v-row>

  
    <v-container>
<br>
<br>

      <v-row class="pt-8">
<!-- Columna izquierda con el fondo y el texto -->
<v-col cols="12" sm="6" class="pa-0 ma-0 position-relative " md="6"  style="background-color: #ec9b27;">
  <div class="px-8 d-flex flex-column " 
    style="position: absolute; top: 0; left: 0; 
      transform: translateY(10%);" 
   >
    
    <!-- Ajustar el tamaño de texto en dispositivos pequeños -->
    <h1 class="raleway-font text-h1 text-justify text-uppercase font-weight-black mobile-yellow animated-text2" :class="{ 'slide-in': textMov }"
  style="color: #ffffff; line-height: 0.9; font-size: 3.5rem;">
  Bar
</h1>
<h1 class="raleway-font text-h1 text-justify text-uppercase font-weight-black mobile-yellow animated-text3" :class="{ 'slide-in': textMov }"
  style="color: #ffffff; line-height: 0.9; font-size: 3.5rem;">
  be
</h1>
<h1 class="raleway-font text-h1 text-justify text-uppercase font-weight-black mobile-yellow animated-text4" :class="{ 'slide-in': textMov }"
  style="color: #ffffff; line-height: 0.9; font-size: 3.5rem;">
  ría
</h1>
<!-- <h1 class="raleway-font text-h2 text-justify text-uppercase font-weight-black animated-text5" :class="{ 'slide-in': textMov }"
style="color: #333333; line-height: 0.9; font-size: 4.5rem;">
      Barbería
    </h1> -->
    
    <h1 class="raleway-font text-h2 pt-4 text-justify text-uppercase font-weight-black animated-text5" :class="{ 'slide-in': textMov }"
      style="color: #333333; line-height: 0.9; font-size: 4.5rem;">
      Hernández
    </h1>
  </div>
</v-col>

<!-- Columna con el texto y la animación -->
<v-col cols="12" sm="6" class="d-flex flex-column align-center" md="6" style="background-color: #FFFFFF;">
  <br>
  <v-card-text class="text-justify animated-text" :class="{ 'slide-in': textMov }">
    <span class="text-brown-darken-3 pt-12 pb-12 text-justify subtitle-1">
      Es un salón pensado para los niños, jóvenes y adultos de la casa que buscan ser atendidos y lucir como un rey. Nuestra temática, adaptada a un reino moderno, permite que vivan dicha experiencia.<br><br>
      Tenemos servicios de cortesía como café capuchino, chocolate, entre otras bebidas calientes. Además, todos los cortes incluyen lavado de cabello. <br><br>
      En nuestra barbería tendrás a tu disposición la anfitriona, el barbero, el técnico capilar, el auxiliar de aseo y la cajera, concentrados en brindarte el mejor servicio.
    </span>
   
  </v-card-text>
  
  <!-- Botón con fondo gris oscuro -->
 
  <v-btn 
:ripple="true" 
height="72"
min-width="164" 
class="custom-btn button-slide" 
:class="{ 'slide-in': textMov }" 
style="font-weight: bold; background-color: #333333;"  
color="amber-darken-1" 
variant="text" 
to="/sobre-nosotros"
>
Historia de Barbería Hernández
</v-btn>

 

 
<!-- 
  <v-btn
        height="72"
        min-width="164"
      >
        With Ripple
      </v-btn> -->

</v-col>
</v-row>




</v-container>
<br>
<br>
<br>





<v-row class="pb-8 mt-12 banner-row">
<v-container>
  <v-row class="ml-2">
    <v-col cols="12" class="pa-0 ma-0" md="6">
      <br><br>
      <v-container>
        <div class="call-to-action pl-0">
          <p>
            <span>
              <h1 class="raleway-font text-h3 text-uppercase font-weight-black animated-text2" :class="{ 'slide-in': textMovBottom }" style="color: #ffffff">Corte de cabello</h1>
            </span>
          </p>
          <p>
            <span>
              <h1 class="raleway-font text-h3 text-uppercase font-weight-black animated-text2" :class="{ 'slide-in': textMovBottom }" style="color: #ffffff">Barba</h1>
            </span>
          </p>
          <p>
            <span>
              <h1 class="raleway-font text-h3 text-uppercase font-weight-black animated-text3" :class="{ 'slide-in': textMovBottom }" style="color: #ffffff">Relajación</h1>
            </span>
          </p>
          <p>
            <span>
              <h1 class="raleway-font text-h3 text-uppercase font-weight-black animated-text3" :class="{ 'slide-in': textMovBottom }" style="color: #ffffff">Hidratación</h1>
            </span>
          </p>
         
          

<!-- Botón con superposición -->

<v-btn 
    :ripple="true" 
    class="action-overlay services-button animated-textBot" 
    :class="{ 'slide-in': textMovBottom }" 
    height="72"
    min-width="164" 
    style="font-weight: bold; color: #000000;"  
    to="/servicios#servicios-seccion"
>
    Descubre todos los servicios
</v-btn>


          


        </div>
      </v-container>
    </v-col>
    <!-- Columna derecha -->
    <v-col cols="12" md="6">
     
      <!-- Contenido adicional -->
    </v-col>
  </v-row>
</v-container>
</v-row>




  
  <br>
  <br>
  <br>



 
</template>



<script>
export default {
data() {
  return {
    showFirstSet: true, // Controla cuál conjunto de chips mostrar
    hasScrolled: false,
    textMov: false,
    textMovBottom: false,
    chips1: [
    { text: 'Reserva de Citas', color: 'blue', icon: 'mdi-calendar-clock-outline' },
{ text: 'Inventario', color: 'light-grey', icon: 'mdi-tag-text-outline' },
{ text: 'RR.HH', color: 'dark-grey', icon: 'mdi-account-outline' },
{ text: 'Administración', color: 'blue', icon: 'mdi-cog-outline' },
    ],
    chips2: [
{ text: 'Tottem', color: 'light-grey', icon: 'mdi-tablet' },
{ text: 'Pizarra de Turnos', color: 'dark-grey', icon: 'mdi-television' },
{ text: 'APP para Profesionales', color: 'blue', icon: 'mdi-android' },
    ],
    visibleIndices: [], // Índices de los chips visibles
    currentIndex: 0, // Índice actual para rotación
  };
},
mounted() {
  // Cambia el conjunto de chips visible cada 2 segundos
  setInterval(() => {
    this.showFirstSet = !this.showFirstSet;
  }, 3500);
  window.addEventListener("scroll", this.checkScroll);
  this.initializeVisibleChips();
  this.startChipRotation();
},
beforeUnmount() {
  clearInterval(this.chipRotationInterval);
},
methods: {
  initializeVisibleChips() {
    this.visibleIndices = [0, 1, 2, 3]; // Inicia mostrando los primeros cuatro chips
  },
  startChipRotation() {
    this.chipRotationInterval = setInterval(() => {
      this.rotateChips();
    }, 2000); // Cambia un chip visible cada 2 segundos
  },
  rotateChips() {
    // Oculta el primer índice visible y avanza al siguiente chip
    this.visibleIndices.shift();
    this.visibleIndices.push((this.currentIndex + 4) % this.chips.length);
    this.currentIndex = (this.currentIndex + 1) % this.chips.length;
  },
  // checkScroll() {
  //   const section = this.$refs.landingSection;
  //   const sectionTop = section.getBoundingClientRect().top;
  //   const windowHeight = window.innerHeight;

    // if (sectionTop < windowHeight - 100) {
    //   this.hasScrolled = true;
    //   window.removeEventListener("scroll", this.checkScroll);
    //   setTimeout(() => {
    //     this.textMov = true;
    //   }, 2500);
    // }
    checkScroll() {
const section = this.$refs.landingSection;
const sectionTop = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

// Nivel 1: 10 cm más abajo (~378 píxeles)
if (!this.reached10cm && sectionTop < windowHeight - 300) {
  
  this.hasScrolled = true;
  
}

// Nivel 2: 20 cm más abajo (~756 píxeles)
if (!this.reached20cm && sectionTop < windowHeight - 900) {
  this.textMov = true;
}

// Nivel 3: 30 cm más abajo (~1134 píxeles)
if (!this.reached30cm && sectionTop < windowHeight - 1340) {
  this.textMovBottom = true;
}
    }

  },

};
</script>

<!-- ccs de la parte de la historia -->
<style scoped>
/* styles.css */
.banner-row {
  background-image: url('@/assets/banner/b1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Estilos para dispositivos móviles (hasta 600px) */
@media (max-width: 600px) {
.mobile-yellow {
  color: #ec9b27 !important; /* Color amarillo para dispositivos móviles */
}
.raleway-font {
  font-size: 2rem !important;  /* Reduce el tamaño del texto para móviles */
}
.px-8 {
  transform: translateY(-40%) !important; /* Mueve más el texto hacia abajo en móviles */
}
.v-card-actions {
  transform: translateY(1150%) !important; /* Ajusta el desplazamiento del botón */
}
}

</style>


<style scoped>
.action-overlay {
position: absolute;
bottom: 1450px; /* Ajusta este valor para bajarlo */
left: 71% !important;

background-color: #ec9b27;
padding: 10px 16px;
border-radius: 2px;
transition: transform 3s ease, opacity 3s ease; /* Añade una transición para suavizar */
}

@media (max-width: 600px) {
.action-overlay {
  left: 50% !important;
  bottom: 1600px; /* Ajusta para móviles */
  padding: 8px 16px;
}
}
</style>

<!-- ccs de la parte de la historia -->
<style scoped>
/* Estilo base para el botón */
/* Estilo base para el botón */
.action-overlay {
position: absolute;
left: 50%; /* Centra horizontalmente */
transform: translate(-50%, 300%); /* Centra en el eje X y ajusta en el eje Y */
transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

/* Ajustes adicionales para este botón específico */
.services-button.slide-in {
transform: translate(-50%, 830%); /* Mantén la posición base al entrar */
}

/* Estilo en modo móvil */
@media (max-width: 768px) {
.services-button {
  transform: translate(-50%, 400%); /* Cambia solo la posición vertical en móviles */
}
}





/* Estilos base de <v-card-text> con opacidad inicial y desplazamiento hacia arriba */
.animated-text {
opacity: 0;
transform: translateY(-250px);
transition: transform 3s ease, opacity 3s ease;
}
.animated-text0 {
opacity: 0;
transform: translateX(-50px);
transition: transform 2s ease, opacity 2s ease;
}
.animated-text2 {
opacity: 0;
transform: translateX(-250px);
transition: transform 2s ease, opacity 2s ease;
}
.animated-text3 {
opacity: 0;
transform: translateX(-250px);
transition: transform 3s ease, opacity 3s ease;
}
.animated-text4 {
opacity: 0;
transform: translateX(-250px);
transition: transform 4s ease, opacity 4s ease;
}
.animated-text5 {
opacity: 0;
transform: translateX(-450px);
transition: transform 2s ease, opacity 2s ease;
}
.animated-textBot {
opacity: 0;
transform: translateY(250px);
transition: transform 2s ease, opacity 2s ease;
}
/* Estilo base del botón */
.custom-btn {
position: absolute;
transform: translateY(480%);
transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

/* Ajustes adicionales para este botón en combinación con slide-in */
.button-slide.slide-in {
transform: translateY(430%); /* Mantén la transformación base al entrar */

}

/* Estilo en modo móvil */
@media (max-width: 768px) {
.custom-btn.button-slide {
  transform: translateY(680%); /* Cambia la posición en móviles */
}
}

/* Clase que aplica la animación cuando hasScrolled es true */
.slide-in {
opacity: 1;
transform: translateY(0);
}
</style>
<style scoped>
.chip-fade {
opacity: 0;
transition: opacity 3s ease;
}

.fade-in {
opacity: 1;

}
</style>

<style scoped>
/* Contenedor de la sección de contenido (texto + imágenes) */
.content-container {
display: flex;
justify-content: space-between; /* Alinear el texto y las imágenes */
align-items: center; /* Alinear verticalmente */
height: 360px;
}

/* Estilos de la llamada a la acción */
.call-to-action {
flex: 1;
padding-right: 20px;
text-align: left;
}

.call-to-action h1 {
font-size: 36px;
margin-bottom: 10px;
}

.call-to-action p {
font-size: 18px;
margin-bottom: 20px;
}

.cta-button {
font-weight: bold;
padding: 10px 20px;
}

/* Estilo base del contenedor de imágenes */
.image-container {
position: relative;
flex: 1;
height: 100%;
display: flex;
align-items: center;
padding-right: 42%;
flex-direction: column; /* Cambio a columna para apilar las imágenes */
z-index: 0;
}

/* Estilo base de las imágenes */
.animated-image {
position: absolute;
transition: all 0.5s ease-in-out;
}

/* Reducción de tamaño y ajuste de la posición de las imágenes en dispositivos móviles */
@media (max-width: 768px) {
.image-container {
  flex-direction: column; /* Apilar las imágenes en columna en pantallas pequeñas */
  align-items: center; /* Centrar las imágenes */
}

/* movil */
.image-1 { 
width: 80px;
position: absolute;
left: 8vh;
top: 5vh;  /* Mover la imagen en función de la altura de la ventana */
z-index: 3;
}

/* table */
.image-2 {
  width: 125px; /* Tamaño más pequeño para la imagen 2 */
  position: absolute;
  left: 11vh;      /* Ajustar la posición horizontal */
  top: 8vh;   /* Ajustar la posición vertical */
  z-index: 2;
}
/* notebook */
.image-3 {
  width: 335px; /* Tamaño más pequeño para la imagen 3 */
  left: -13vh;     /* Ajustar la posición horizontal */
  top: 12vh;   /* Ajustar la posición vertical */
  z-index: 1;
}
}


/* Estilo base de las imágenes (inicialmente ocultas y fuera de la pantalla) */
.animated-image {
position: absolute;
opacity: 0;
transition: transform 2s ease-in-out, opacity 2s ease-in-out;
}

/* Imágenes entrando desde diferentes direcciones */
.image-1 {
transform: translateX(-200%);
z-index: 3; /* Mayor prioridad, aparece sobre las otras */
}

.image-2 {
transform: translateX(200%);
z-index: 2; /* Aparece debajo de la imagen 1 */
}

.image-3 {
transform: translateY(200%);
z-index: 1; /* Aparece debajo de las otras dos */
}

/* Cuando se hace scroll, las imágenes se animan y aparecen */
.has-scrolled .animated-image {
opacity: 1;
}


.has-scrolled .image-1 { /**MOVIL */
transform: translateX(0px) translateY(110px); /* Ajusta el valor de Y según lo que necesites */
}


.has-scrolled .image-2 {/**TOTEM */
transform: translateX(-120px) translateY(20px); /* Ajusta el valor de Y según lo que necesites */
}

.has-scrolled .image-3 {/**ADMIN */
transform: translateX(160px) translateY(-80px); /* Ajusta el valor de Y según lo que necesites */
}
</style>


<style scoped>
.text-h3 {
display: block;
margin-bottom: 2px; /* Ajusta según sea necesario para escritorio */
}

.text-h6 {
display: block;
margin-top: 2px; /* Ajusta según sea necesario para escritorio */
}
.subtitle-1 {
font-size: 1rem; /* Ajusta el tamaño de la fuente para dispositivos móviles */
}
@media (max-width: 600px) {
.text-h3 {
  margin-bottom: 1px; /* Ajusta según sea necesario */
}
.text-h6 {
  margin-top: 1px; /* Ajusta según sea necesario */
}
v-card-text {
  padding-top: 1px; /* Ajusta según sea necesario */
}
.subtitle-1 {
font-size: 1rem; /* Ajusta el tamaño de la fuente para dispositivos móviles */
}
}
</style>