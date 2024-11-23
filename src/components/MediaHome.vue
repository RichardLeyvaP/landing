<template>
    <v-container fluid fill-height class="pa-0 ma-0 d-flex align-center justify-center">
      <v-container>
      <v-parallax src="@/assets/b6.png" class="rounded-lg d-flex align-center justify-center" height="100%">
        <v-row justify="center" class="pa-3">
          <v-col cols="12" md="8">
            <v-responsive aspect-ratio="16/9">
              <iframe
                width="100%"
                height="280"
                src="https://www.youtube.com/embed/b4t7SK1YK88?si=b4t7SK1YK88"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </v-responsive>
          </v-col>
        </v-row>
      </v-parallax>
    </v-container>
    </v-container>
    <br>
    <br>
    <br>
  </template>
  
  <script>
  export default {
    name: 'MediaHome'
  }
  </script>
  
  <style scoped>
  /* Estilo para el fondo amarillo */
  .yellow-background {
    background-color: #FFEB3B; /* Amarillo de la paleta de colores de Material Design */
  }
  </style>
  