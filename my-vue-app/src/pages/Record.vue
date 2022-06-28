<template>
  <q-page class="bg-[#778DA9]">
    <div class="text-lg q-pa-md max-w-screen-xl w-auto mx-80">
      การแจ้งเติมการเติมเงิน

      <div v-if="userData">
        <div
          class="flex flex-col mx-auto p-5 text-stone-900 text-lg mt-5 w-full rounded-lg border-solid border-[3px] bg-white"
          v-for="(data, index) in userData"
          :key="index"
        >
          <table
            class="border-separate border-spacing-2 border border-slate-400 bg-white w-full"
          >
            <thead>
              <tr>
                <th class="border border-slate-300 w-20">ชื่อผู้ใช้</th>
                <th class="border border-slate-300 W-0">หมายเลขการเติมเงิน</th>
                <th class="border border-slate-300">สถานะ</th>
              </tr>
              <tr>
                <td class="border border-slate-300 w-20">
                  {{ data.payload?.email }}
                </td>
                <td class="border border-slate-300 W-0">
                  {{ data.payload?.payment_id }}
                </td>
                <td
                  class="border border-slate-300"
                  :class="
                    data.payload?.message == 'ทำรายการสำเร็จ'
                      ? 'text-green-500'
                      : 'text-red-500'
                  "
                >
                  {{ data.payload?.message }}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div v-else><span>ยังไม่มีรายการ</span></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import { fetchNotification } from "../main";
import { useOnsaveAccount } from "../pinia-store/account";

export default defineComponent({
  setup() {
    const accountPinia = useOnsaveAccount();
    const account = computed(() => accountPinia.account);
    const userData = ref();

    onMounted(async () => {
      userData.value = await fetchNotification();
      if (account.value?.email == "admin@gmail.com") {
        return (userData.value = userData.value.request.filter(
          (x) => x.payload.email
        ));
        userData.value;
      } else {
        userData.value = userData.value.request.filter(
          (x) => x.payload.email == account.value?.email
        );
      }
    });
    return { userData, account };
  },
});
</script>

<style></style>
