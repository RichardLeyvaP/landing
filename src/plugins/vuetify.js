/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#ec9b27", // #E53935
          secondary: "#010101", // #FFCDD2
          green:"859c63",
          blue:"00356d",
          white:"ffffff",
        
        }
      },
    },
  },
})