<template>
  <v-snackbar class="mt-12" location="right top" :timeout="sb_timeout" :color="sb_type" elevation="24"
    :multi-line="true" vertical v-model="snackbar">
    <v-row>
      <v-col md="2">
        <v-avatar :icon="sb_icon" color="sb_type" size="40"></v-avatar>
      </v-col>
      <v-col md="10">
        <h4>{{ sb_title }}</h4>
        {{ sb_message }}

      </v-col>
    </v-row>
  </v-snackbar>
  <v-container>
    <br><br><br>
    <v-row class="dense">
      <v-col cols="12" md="3" v-for="(card, index) in cards" :key="index">

        <v-card class="hover-card p-0 " elevation="10">
          <v-img class="align-end text-white hover-image" height="200" width="120%"
            :src="'https://api2.simplifies.cl/api/images/' + card.image" cover>
          </v-img>
             <v-card-title class="mt-0">
              <p class="text-overline mt-4"> <span><v-icon color="primary" size="small">{{ card.icon }}</v-icon>{{ card.subtitle }}  </span><br>
              <span class="raleway-font text-h5  text-primary text-uppercase font-weight-black">{{ card.title }} </span></p>
            
          </v-card-title>
         
        
          <v-row class="button-row font-weight-medium text-h6 raleway-font">
            <v-card-text class="mt-3">

              <v-btn class="text-none" :href="card.location_link" prepend-icon="mdi-map-marker" variant="plain">
                <span class="multiline">{{ card.location }}</span>
              </v-btn>

              <v-btn class="text-none" :href="card.phone_link" prepend-icon="mdi-whatsapp" variant="plain">
                {{ card.phone }}
              </v-btn>

              <v-btn class="text-none " v-if="card.type === 'Branch'" @click="shareLink(card.id, card.business_id)"
                prepend-icon="mdi-share-variant" variant="plain">
                Compartir datos
              </v-btn>

            </v-card-text>
          </v-row>
          <v-divider class="mx-1 mb-1"></v-divider>
          <v-card-actions >
            <v-spacer></v-spacer>
            <div class="animated-border-btn">     
            <v-btn  prepend-icon="mdi-calendar-clock-outline" v-if="card.type === 'Branch'"
              :href="getReservationLink(card.id, card.business_id)" text>Reservar</v-btn>
            </div>

              <v-spacer></v-spacer>


          </v-card-actions>
        </v-card>

      
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'BranchesHome',
  data() {
    return {
      snackbar: false,
      sb_type: '',
      sb_message: '',
      sb_timeout: 2000,
      sb_title: '',
      sb_icon: '',
      cards: [],
    };
  },
  methods: {
    showAlert(sb_type, sb_message, sb_timeout) {
      this.sb_type = sb_type

      if (sb_type == "success") {
        this.sb_title = 'Éxito'
        this.sb_icon = 'mdi-check-circle'
      }

      if (sb_type == "error") {
        this.sb_title = 'Error'
        this.sb_icon = 'mdi-check-circle'
      }

      if (sb_type == "warning") {
        this.sb_title = 'Advertencia'
        this.sb_icon = 'mdi-alert-circle'
      }

      this.sb_message = sb_message
      this.sb_timeout = sb_timeout
      this.snackbar = true
    },
    getReservationLink(cardId, business_id) {
      return `https://reservasbh.simplifies.cl/?id=${cardId}&business=${business_id}`;
    },
    shareLink(cardId, business_id) {
      const link = this.getReservationLink(cardId, business_id);
      if (navigator.share) {
        navigator.share({
          title: 'Reservación',
          text: 'Mira este enlace para hacer una reservación:',
          url: link,
        }).then(() => {
          console.log('Enlace compartido');
        }).catch((error) => {
          //console.error('Error al compartir el enlace:', error);
          this.showAlert("error", 'Error al compartir el enlace:', error, 3000);
        });
      } else {
        this.copyToClipboard(link);
        this.showAlert("success", "El enlace ha sido copiado al portapapeles. Comparte el enlace manualmente.", 3000);
        //alert('El enlace ha sido copiado al portapapeles. Comparte el enlace manualmente.');
      }
    },
    copyToClipboard(link) {
      navigator.clipboard.writeText(link).then(() => {
        this.showAlert("success", "El enlace ha sido copiado al portapapeles. Comparte el enlace manualmente.", 3000);
        //console.log('Enlace copiado al portapapeles');
      }).catch(err => {
        this.showAlert("error", 'Error al compartir el enlace:', err, 3000);
        //console.error('Error al copiar el enlace: ', err);
      });
    }
  },
  mounted() {
    axios
      .get('https://api2.simplifies.cl/api/business-branch-academy')
      .then((response) => {
        this.cards = response.data.business;
      });
  },
};
</script>

<style>
/* Estilos para la card */
.hover-card {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: #010101;
  color: #ffffff;
}

/* Efecto al pasar el mouse por encima de la card */
.hover-card:hover {
  background-color: #ec9b27;
  /* Cambia a un color morado suave */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  /* Sombra más intensa */
}

/* Efecto de zoom en la imagen */
.hover-image {
  transition: transform 0.3s ease;
}

/* Zoom cuando el mouse está sobre la imagen */
.hover-card:hover .hover-image {
  transform: scale(1.1);
  /* Zoom al 110% */
}

.text-overline {
  white-space: nowrap;
}

.button-row {
  row-gap: 8px;
}

.button-col {
  margin-bottom: 0;
}

.text-h5 {
  white-space: pre-line;
  /* Permite saltos de línea */
}

@media (max-width: 600px) {
  .text-h6 {
    font-size: 1rem;
  }
}

/* Aplicar la fuente solo a ciertos elementos */
.raleway-font {
  font-family: 'Raleway', sans-serif;
}
/* Ajuste para la imagen */

/* Estilo inicial del botón */

/* Estilo inicial del botón */
.animated-border-btn {
  position: relative;
  padding: 10px 20px;
  overflow: hidden;
  border: 2px solid transparent; /* Sin borde visible inicialmente */
  transition: color 0.5s ease-in-out;
}

/* Pseudo-elemento para crear el borde animado */
.animated-border-btn::before {
  content: "";
  padding-left: 10%;
  position: absolute;
  top: 0;
  left: 0  ;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 3px solid #ec9b27
; /* Color del borde amarillo */
  transform: scale(0); /* Inicialmente colapsado */
  transition: transform 0.5s ease-in-out;
  transform-origin: center; /* El borde se expande desde el centro */
  z-index: 0;
}

/* Efecto hover para animar el borde */
.animated-border-btn:hover::before {
  transform: scale(1); /* Se expande al 100% progresivamente */
}

/* Asegurar que el contenido del botón esté sobre el borde */
.animated-border-btn span {
  position: relative;
  z-index: 1;
}
</style>