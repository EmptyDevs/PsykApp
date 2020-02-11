import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

import instaIcon from '../components/instaIcon'

export default new Vuetify({
    icons: {
        values: {
          instaicon: {
            component: instaIcon
          },
        },
      },
});
