<template>
  <q-header>
    <div
      class="flex flex-row w-full p-5 bg-[#0D1B2A] items-center text-[#FFFFFF]"
    >
      <div class="flex gap-6 items-center">
        <img class="w-11" src="imge/Vector.png" />
        <span>BuyG</span>
         <q-btn @click="$router.push({ path: '/' })" rounded label="หน้าหลัก" />
        <span>เติมเกม</span>
        <q-btn @click="$router.push({ path: 'help' })" rounded label="ช่วยเหลือ" />
      </div>

      <div class="ml-auto flex gap-5">
        <div v-if="account">
          <q-btn @click="$router.push({ path: 'record' })" rounded label="ประวัติ" />
          <q-btn @click="logout()" rounded label="ออกจากระบบ" />
        </div>
        <div v-else>
          <q-btn
            @click="$router.push({ path: 'login' })"
            rounded
            color=""
            label="เข้าสู่ระบบ"
          />
          <q-btn
            @click="$router.push({ path: 'register' })"
            rounded
            color=""
            label="สมัครบัญชี"
          />
        </div>
      </div>
    </div>
  </q-header>
</template>

<script>
import { defineComponent, computed, onMounted } from "vue";
import { auth } from "../../main";
import { useOnsaveAccount } from "../../pinia-store/account";

export default defineComponent({
  setup() {
    const accountPinia = useOnsaveAccount();
    const account = computed(() => accountPinia.account);

    const logout = () => {
      auth
        .signOut()
        .then(() => console.log("Signed Out"))
        .catch((err) => alert(err.message));

      location.reload();
    };

    onMounted(async () => {
      await auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          const userDetail = {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          };
          accountPinia.onSaveAccount(userDetail);
        }
      });
    });

    return { logout, account };
  },
});
</script>

<style></style>
