<template>
 

    <v-carousel
      hide-delimiters
      show-arrows-on-hover
      height="100%"
      interval="7000"
      @update:model-value="onSlideChange"
    class="mt-12"
    >
      <v-carousel-item
        v-for="(item, index) in carouselItems"
        :key="index"
        :src="item.backgroundImage"
        class="carousel-item"
      >
        <div class="carousel-slide">
          <v-card
            class="animated-card"
            :style="{ height: item.cardHeight + 'px' }"
            :image="item.backgroundCard"
            :color="item.backgroundColor"
            :class="getCardAnimation(currentSlide)"
          >
       
<v-container>
            <div  class="px-8 d-flex flex-column " 
      style="position: absolute; top: 0; left: 0; 
        transform: translateY(10%);" 
     >
      
      <!-- Ajustar el tamaño de texto en dispositivos pequeños -->
      <h5 :class="getCardAnimation(currentSlide)" class="animated-card fadeInLeft raleway-font text-h3 text-justify text-uppercase font-weight-black mobile-yellow"
    style="color: #ffffff; line-height: 0.9; font-size: 3.5rem;">
    {{ item.title }}
  </h5>
  <br> <br>
  <h1 :class="getCardAnimation(currentSlide)" class="animated-card fadeInRight raleway-font text-h1 text-justify text-uppercase font-weight-black mobile-yellow"
    style="color: #ffffff; line-height: 0.9; font-size: 3.5rem;">
    {{ item.text1 }}
  </h1>
  <h1 :class="getCardAnimation(currentSlide)" class="animated-card fadeInUp raleway-font text-h1 text-justify text-uppercase font-weight-black mobile-yellow"
    style="color: #ffffff; line-height: 0.9; font-size: 3.5rem;">
    {{ item.text2 }}
  </h1>
  <!-- fadeInLeft
fadeInUp
fadeInRight -->

      <h1
  :class="getCardAnimation(currentSlide)" class="animated-card fadeInLeft raleway-font text-h1 text-justify text-uppercase font-weight-black"
  :style="{ color: item.backgroundColor2, lineHeight: '0.9', fontSize: '4rem' }"
>
{{ item.text3 }}
</h1>

      <h1 :class="getCardAnimation(currentSlide)" class="animated-card fadeInUp raleway-font text-h1 text-justify text-uppercase font-weight-black"
      :style="{ color: item.backgroundColor2, lineHeight: '0.9', fontSize: '4rem' }">
        {{ item.text4 }}
      </h1>
    </div>
  <br><br><br><br><br><br><br><br><br>
</v-container>
            <v-card-actions v-if="item.buttonText"  class="mt-12 justify-center"
      style="background-color: #333333; 
         transform: translateY(580%);">
      <v-btn style="font-weight: bold;" color="amber-darken-1" variant="text">
        {{ item.buttonText }}
      </v-btn>
    </v-card-actions>

          
          </v-card>
        </div>
      </v-carousel-item>
    </v-carousel>
  


  <!---->

  <BranchesHome class="mt-0"></BranchesHome><br>
  <CallToAction></CallToAction><br>

    <!-- <AboutUsHome></AboutUsHome> -->
  <MediaHome></MediaHome><br>
</template>
<script>

import b1 from '@/assets/b1.png'; // Reemplaza con el nombre de tu imagen
 import b2 from '@/assets/b2.png'; // Reemplaza con el nombre de tu imagen
import b3 from '@/assets/b3.png';
import b4 from '@/assets/sillaNew.png';
import b5 from '@/assets/salonNew.png';
import BranchesHome from "../components/BranchesHome.vue"
// import AboutUsHome from "../components/AboutUsHome.vue"
import CallToAction from "../components/CallToAction.vue"
import MediaHome from "../components/MediaHome.vue"
import axios from "axios";
export default {
  components: {
    BranchesHome,
    // AboutUsHome,
    CallToAction,
    MediaHome,

  },
  data() {
    return {
      progress: 0,
      curriculum: null,
      hover: false,
      cards: [],

      currentSlide: 0,
      carouselItems: [
        {
          title: 'Aquí',
          text1:'Tú',
          text2:'Eres',
          text3:'El',
          text4:'Rey',
          backgroundColor:'rgba(0, 0, 0, 0.7)',
          backgroundColor2: '#ec9b27', // Amarillo quemado
          backgroundImage: b1,
         // backgroundCard: b4,
          buttonTextBool:false,
          // buttonText: 'Proximamente',
           // Reemplaza con tu imagen
          cardHeight: 700, // Altura del ard
        },
        {
          title: 'Locales',
          text1:'A',
          text2:'tu',
          text3:'Al',
          text4:'tura',
          // backgroundColor:"#859c63",
          backgroundColor:'#332109',
          backgroundColor2: '#ec9b27', 
          //backgroundCard: b5,
           backgroundImage: b2, // Reemplaza con tu imagen
          buttonTextBool:false,
          // buttonText: 'Proximamente',
          cardHeight: 700, // Altura del card
        },
        {
          title: 'Nuestro',
          text1:'Mar',
          text2:'ket',
          text3:'pla',
          text4:'ce',
          text: 'Marketplace',
          buttonTextBool:true,
          buttonText: 'Proximamente',
          backgroundColor:'#ec9b27',
          backgroundImage: b3, // Reemplaza con tu imagen
          cardHeight: 700, // Altura del card
        },
      ],


    };
  },
  methods: {
   

    onSlideChange(newIndex) {
      this.currentSlide = newIndex;
    },
    getCardAnimation(slideIndex) {
      // Define diferentes animaciones para cada card
      switch (slideIndex) {
        case 0:
          return 'fadeInLeft'; // Primera animación
        case 1:
          return 'fadeInUp'; // Segunda animación
        case 2:
          return 'fadeInRight'; // Tercera animación
        default:
          return '';
      }
    },

    handleUpdate(newIndex) {
      alert("Ítem activo actualizado a:", newIndex);
      // Aquí puedes agregar cualquier lógica adicional que necesites ejecutar
      // cuando el ítem activo del carrusel cambia.
    },


    animateProgress() {
      const interval = setInterval(() => {
        this.progress += 1;
        if (this.progress >= 100) clearInterval(interval);
      }, 50); // Ajusta este valor si es necesario
    },

    cardHover(index, hoverState) {
      this.cards[index].hover = hoverState;
    },

    scrollInto() {
      alert("entra")
      alert(this.$route)
      alert("entra")
      const section = document.querySelector(`#${this.$route.hash.substring(1)}`);
      console.log("esta es la section")
      console.log(section)
      section.scrollIntoView({
        behavior: 'smooth'
      });
    },
    scrollToSection() {
      alert("entra")
      alert(this.$route.hash.substring(1))
      if (this.$route.hash) {
       
        const element = document.getElementById(this.$route.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

  },
  watch: {
    '$route' (to, from) {
      // Revisa si la navegación es en la misma página para evitar bucles infinitos
      if (to.path === from.path) {
       // this.scrollToSection();
      }
    }
  },
  mounted() {
    axios
        .get('https://api2.simplifies.cl/api/business-branch-academy')
        .then((response) => {          
          //console.log(this.response)
          this.cards = response.data.business;
          console.log(this.cards);
          //console.log(this.student)
        });
    // Añadimos la propiedad hover a cada card dinámicamente
    this.cards = this.cards.map(card => ({ ...card, hover: false }));
    this.animateProgress();   
    


  },
};
</script>

<style>
/* Añade transiciones suaves al cambiar de color */
.hover-card {
  transition-duration: 1s
}

.image-grow {
  transition: transform 0.8s ease;
  transform: scale(1.05);
  /* Aumenta ligeramente el tamaño */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.v-btn-info-suc {
  /* --v-btn-size: 0.875rem; */
  --v-btn-height: 28px;
  font-size: var(--v-btn-size);
  min-width: 64px;
  /* padding: 0 16px; */
}
@media (max-width: 600px) {
  .mobile-carousel {
    margin-top: 0px; /* Ajusta este valor según tus necesidades */
  }
}

.carousel-container {
  max-width: 800px;
  margin: 0 auto;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover; /* Ajusta la imagen de fondo */
  height: 400px; /* Altura de la diapositiva */
  position: relative;
}

.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Alinea el card en la parte inferior */
}

.animated-card {
  width: 400px;
  opacity: 0; /* Oculto al inicio */
  transition: opacity 0.9s ease; /* Transición de opacidad */
}

.fadeInLeft {
  animation: fadeInLeft 1.5s forwards;
}

.fadeInUp {
  animation: fadeInUp 1.7s forwards;
}

.fadeInRight {
  animation: fadeInRight 1.9s forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-60px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-card {
  opacity: 1; /* Visibilidad */
}
</style>
