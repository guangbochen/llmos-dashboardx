// import * as Vue from 'vue';
// import vSelect from 'vue-select';
import VTooltip from "v-tooltip";

// Vue.component('v-select', vSelect);

// const app = useNuxtApp()
// app.components("vSelect", vSelect)
// app.use(vSelect)

// import { createVfm } from 'vue-final-modal'
import vSelect from 'vue-select';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vSelect)
})
