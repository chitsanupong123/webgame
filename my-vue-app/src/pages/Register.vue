<template>
  <q-page class="bg-[#778DA9]">
    <img src="imge/back.png" alt="" />
    <div
      class="w-full max-w-[900px] mx-auto p-5 text-[#FFFFFF] font-black text-lg"
    >
      <div>อีเมล์</div>
      <q-input
        bg-color="white"
        class="my-5"
        rounded
        outlined
        v-model="reEmail"
        label="กรอกอีเมล์ของคุณ"
      ></q-input>
      <div>ชื่อ</div>
      <q-input
        bg-color="white"
        class="my-5"
        rounded
        outlined
        v-model="name"
        label="กรอกชื่อของคุณ"
      ></q-input>
      <div>รหัสผ่าน</div>
      <q-input
        bg-color="white"
        class="my-5"
        rounded
        outlined
        v-model="repassword"
        label="กรอกรหัสผ่านของคุณ"
      ></q-input>
      <div>ยืนยันรหัสผ่าน</div>
      <q-input
        bg-color="white"
        class="my-5"
        rounded
        outlined
        v-model="aginpassword"
        label="กรอกรหัสผ่านของคุณอีกครั้ง"
      ></q-input>
      <div class="flex justify-center">
        <q-btn
          class="my-2"
          style="background: #0d1b2a"
          unelevated
          rounded
          label="สมัครสมาชิก"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const reEmail = ref('');
    const name = ref('');
    const repassword = ref('');
    const aginpassword = ref('');
    return { reEmail, name, repassword, aginpassword };
  },
});
</script>

<style></style>
