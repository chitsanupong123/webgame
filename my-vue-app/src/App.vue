<script>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted } from "vue";
import { useOnsaveAccount } from "../src/pinia-store/account";
import { auth } from "../src/main";

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          void router.replace('/login');
        } else if (route.path == '/login' || route.path == '/register') {
          void router.replace('/');
        }
      });
    });
  },
});
</script>

<template >
  <router-view />
</template>

<style>


</style>
