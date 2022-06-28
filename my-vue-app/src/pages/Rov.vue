<template>
  <q-page class="bg-[#778DA9]">
    <div
      class="q-pa-md max-w-screen-xl w-full mx-auto text-[#FFFFFF] font-black text-[20px]"
    >
      <div class="flex gap-10 my-10 items-center">
        <img src="imge/rov.png" alt="" class="" />
        <span>ROV:MOBILE MOBA</span>
      </div>
      <Pay :account="account" :name="name"/>
    </div>
  </q-page>
</template>

<script>
import Pay from "../components/Pay.vue";
import { defineComponent, ref,computed } from "vue";
import { useOnsaveAccount } from "../pinia-store/account";
export default defineComponent({
  components: { Pay },
  setup() {
    const accountPinia = useOnsaveAccount();
    const account = computed(() => accountPinia.account);
    const name = ref("Rov");

    return {account,name}
  },
});
</script>

<style></style>
