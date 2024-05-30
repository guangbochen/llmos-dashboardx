import { createVfm } from 'vue-final-modal'

export default defineNuxtPlugin((nuxtApp) => {
    const vfm = createVfm() as any

    nuxtApp.vueApp.use(vfm)
})

// import VModal from 'vue-js-modal';
// import Vue from "vue"
//
// Vue.use(VModal);

