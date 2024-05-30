<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
const show = ref(false)

function confirm() {
  show.value = false
}

const books = [
  { title: "Old Man's War" },
  { title: "The Lock Artist" },
  { title: "HTML5" },
  { title: "Right Ho Jeeves" },
  { title: "The Code of the Wooster" },
  { title: "Thank You Jeeves" }
]

const value = null
const options = ['list', 'of', 'options']

</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <h1>Vue Select - Vue 3</h1>
    <v-select :options="books" label="title"></v-select>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>

    <div>
      Some default layout shared across all pages
      <slot />
      <ModalsContainer />
    </div>

    <div>
      <UButton @click="show = true">
        Open Modal
      </UButton>

      <ModalConfirm
          v-model="show"
          title="Hello World!"
          @confirm="() => confirm()"
      >
        <p>VModel: The content of the modal</p>
      </ModalConfirm>
    </div>
  </div>
</template>


<style scoped>

</style>