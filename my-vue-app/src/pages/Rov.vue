<template>
  <q-page class="bg-[#778DA9]">
    <div
      class="q-pa-md max-w-screen-xl w-full mx-auto text-[#FFFFFF] font-black text-[20px]"
    >
      <div class="flex gap-10 my-10 items-center">
        <img src="imge/rov.png" alt="" class="" />
        <span>ROV:MOBILE MOBA</span>
      </div>
      <div>
        <span>วิธีการชำระเงิน</span>
        <div class="flex gap-10 my-6">
          <q-btn dense flat><img src="imge/Tr.png" alt="" /></q-btn>
          <q-btn dense flat><img src="imge/K.png" alt="" /></q-btn>
          <q-btn dense flat><img src="imge/Garena.png" alt="" /></q-btn>
        </div>
      </div>
      <div class="max-w-full mx-auto">
        <span>ราคา</span>
        <div class="flex gap-[500px]">
          <div class="q-pa-md flex">
            <q-option-group
              :options="options"
              type="radio"
              v-model="group"
            ></q-option-group>
          </div>
          <div class="">
            <div class="mb-5">
            <span>ใส่ข้อมูล</span>
             </div>
            <span>หมายเลขTrueMoney</span>
           
            <q-input
              bg-color="white"
              class="my-5 w-[500px]"
              rounded
              outlined
              v-model="Truemoney"
            ></q-input>
            <div class="mx-[200px] mt-3">
            <q-btn  style="background: #0d1b2a">เข้าสู่ระบบ</q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
      const Truemoney = ref("")
    return {
      Truemoney,
      group: ref(""),


      options: [
        { label: "฿50", value: "A", color: "black" },
        { label: "฿100", value: "B", color: "black" },
        { label: "฿150", value: "C", color: "black" },
        { label: "฿200", value: "D", color: "black" },
        { label: "฿300", value: "E", color: "black" },
      ],

    };
  },
});
</script>

<style></style>
