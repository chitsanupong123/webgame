<template>
  <q-page class="bg-[#778DA9]">
    <div
      class="q-pa-md max-w-screen-xl w-full mx-auto text-[#FFFFFF] font-black text-[20px]"
    >
      <div class="flex gap-10 my-10 items-center">
        <img src="imge/LoL.png" alt="" class="" />
        <span>League of Legends</span>
      </div>
      <Pay/>
    </div>
  </q-page>
</template>

<script>
import Pay from "../components/Pay.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { Pay },
  setup() {},
});
</script>

<style></style>
