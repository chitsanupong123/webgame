<template>
  <q-page class="bg-[#778DA9]">
    <div class="q-pa-md max-w-screen-xl w-full mx-auto">
      <div
        class="flex flex-row items-center text-[#FFFFFF] gap-x-[900px] text-lg justify-around"
      >
        <div class="my-5 text-[#FFFFFF] font-black">โปรโมชั่น</div>
        <!-- <q-btn class="my-5 text-lg text-[#FFFFFF] font-black" dense flat @click="$router.push({path: 'notification'})"><img src="imge/bell.png" alt=""  class="w-7">การแจ้งเตือนการเติมเงิน</q-btn> -->
        <q-btn
          class=""
          round
          icon="notifications"
          @click="$router.push({ path: 'notification' })"
        >
          <q-badge floating color="red" rounded />
        </q-btn>
        {{AdminData}}
      </div>
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="imge/1.png" />
        <q-carousel-slide :name="2" img-src="imge/2.webp" />
        <q-carousel-slide :name="3" img-src="imge/3.png" />
        <q-carousel-slide :name="4" img-src="imge/4.png" />
      </q-carousel>
      <div class="my-5 text-lg text-[#FFFFFF] font-black">เกม</div>
      <div class="flex flex-row justify-around">
        <q-btn @click="$router.push({ path: 'Rov' })" dense flat
          ><img src="imge/rov.png" alt="src/pages/Rov.vue"
        /></q-btn>
        <q-btn @click="$router.push({ path: 'LoL' })" dense flat
          ><img src="imge/LOL.png" alt="src/pages/LoL.vue"
        /></q-btn>
        <q-btn @click="$router.push({ path: 'Hon' })" dense flat
          ><img src="imge/Hon.png" alt="src/pages/Hon.vue"
        /></q-btn>
        <q-btn @click="$router.push({ path: 'Fifa' })" dense flat
          ><img src="imge/Fifa.png" alt="src/pages/Fifa.vue"
        /></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { fetchPaymentRequestData } from "../main";
export default defineComponent({
  setup() {
    const slide = ref(1);
    const autoplay = ref(true);
    const AdminData = ref();

    onMounted(async () => {
      AdminData.value = await fetchPaymentRequestData();
    });

    return { slide, autoplay, AdminData };
  },
});
</script>

<style></style>
