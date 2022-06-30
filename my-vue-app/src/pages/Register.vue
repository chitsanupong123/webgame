<template>
  <q-page class="bg-[#778DA9]">
    <img src="imge/back.png" alt="" @click="$router.push({ path: '/' })"/>
    <div
      class="w-full max-w-[900px] mx-auto p-5 text-[#FFFFFF] font-black text-lg"
    >
      <div>อีเมล์</div>
      <q-input
        bg-color="white"
        class="my-5"
        rounded
        outlined
        v-model="email"
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
        v-model="password"
        label="กรอกรหัสผ่านของคุณ"
      ></q-input>
      <div>ยืนยันรหัสผ่าน</div>
      <q-input
        bg-color="white"
        class="my-5"
        rounded
        outlined
        v-model="confirmPassword"
        label="กรอกรหัสผ่านของคุณอีกครั้ง"
      ></q-input>
      <div class="flex justify-center">
        <q-btn
          @click="registWithFirebase"
          :disabled="confirmPassword == password && confirmPassword? false : true"
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
import { ref, defineComponent, computed } from "vue";
import { RegistWithFirebase } from "../main";
import { useOnsaveAccount } from "../pinia-store/account";
export default defineComponent({
  setup() {
    const email = ref("");
    const name = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const accountPinia = useOnsaveAccount();
    const account = computed(() => accountPinia.account);

    const registWithFirebase = async () => {
      try {
        const regist = await RegistWithFirebase(
          email.value,
          password.value,
          name.value
        );
        const userDetail = {
          email: regist.user.email,
          name: regist.user.displayName,
          uid: regist.user.uid,
        };
        accountPinia.onSaveAccount(userDetail);
      } catch (e) {
        alert(e);
      }
    };
    return {
      email,
      name,
      password,
      registWithFirebase,
      account,
      confirmPassword,
    };
  },
});
</script>

<style></style>
