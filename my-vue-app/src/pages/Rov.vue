<template>
  <q-page class="bg-[#778DA9]">
    <div
      class="q-pa-md max-w-screen-xl w-full mx-auto text-[#FFFFFF] font-black text-[20px]"
    >
    
    {{PriceRov}}
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
import { defineComponent, ref,computed ,onMounted } from "vue";
import { useOnsaveAccount } from "../pinia-store/account";
import { fetchPrice } from "../main"; 
export default defineComponent({
  components: { Pay },
  setup() {
    const accountPinia = useOnsaveAccount();
    const account = computed(() => accountPinia.account);
    const name = ref("Rov");
    const PriceRov = ref();

    onMounted( async() => {
      PriceRov.value = await fetchPrice();
    });
    
    return {account,name,PriceRov}
  },
});
</script>

<style></style>
