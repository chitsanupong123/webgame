<template >
<q-page class="bg-[#778DA9] ">   
  <div class="q-pa-md max-w-screen-xl w-full mx-auto">
      <div class = "my-5 text-lg text-[#FFFFFF] font-black">โปรโมชั่น</div>
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
    <q-btn dense flat><img src="imge/rov.png" alt="" ></q-btn>
    <q-btn dense flat><img src="imge/LOL.png" alt="" ></q-btn>
    <q-btn dense flat><img src="imge/Hon.png" alt="" ></q-btn>
    <q-btn dense flat><img src="imge/Fifa.png" alt="" ></q-btn>
    </div>
  </div>
</q-page>
</template>

<script  lang="ts">
import { ref , defineComponent} from 'vue'

export default defineComponent({
setup(){
    const slide = ref(1)
    const autoplay = ref(true)
    return{slide, autoplay}
}
})
</script>

<style>

</style>