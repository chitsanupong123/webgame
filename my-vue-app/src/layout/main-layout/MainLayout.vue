<template>
  <q-layout view="hHh Lpr lff">
    <MainLayoutHeader />
    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayoutHeader from '../main-layout/MainLayoutHeader.vue'


export default defineComponent({
  name: 'MainLayout',
  components: { MainLayoutHeader },
})
</script>