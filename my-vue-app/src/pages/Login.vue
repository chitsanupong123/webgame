<template>
  <q-page class="bg-[#778DA9]">
    <img src="imge/back.png" alt="" @click="$router.push({ path: '/' })"/>
    <div
      class="w-full max-w-[900px] mx-auto p-5 text-[#FFFFFF] font-black text-lg"
    >
      <div class="my-5">อีเมล์</div>
      <q-input
        bg-color="white"
        class="my-5"
        rounded
        outlined
        v-model="email"
        label="กรอกอีเมล์"
      ></q-input>
      <div class="my-5">รหัสผ่าน</div>
      <q-input
        bg-color="white"
        class="my-5"
        rounded
        outlined
        v-model="password"
        label="กรอกรหัสผ่าน"
      ></q-input>
      <div class="flex justify-end"><span> ลืมรหัสผ่าน </span></div>
      <div class="flex justify-center">
        <q-btn
        @click="login()"
          class="my-2"
          style="background: #0d1b2a"
          unelevated
          rounded
          label="เข้าสู่ระบบ"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useOnsaveAccount } from "../pinia-store/account";
import { LoginWithFirebase } from "../main";
export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");
    const accountPinia = useOnsaveAccount();
    const account = computed(() => accountPinia.account);

    const login = async () => {
      const user = await LoginWithFirebase(email.value, password.value);
      if (user.user) {
        const userDetail = {
          name: user.user.email,
          email: user.user.email,
          uid: user.user.uid,
        };
        accountPinia.onSaveAccount(userDetail);
      }
    };
    

    return { email, password ,login };
  },
});
</script>

<style></style>
