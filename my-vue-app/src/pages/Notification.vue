<template>
  <q-page class="bg-[#778DA9]">
    <div class="text-lg q-pa-md max-w-screen-xl w-auto mx-80 ">
      <div class="font-black">การแจ้งเติมการเติมเงิน</div>
      <div
        class="flex flex-col mx-auto p-5 text-stone-900 text-lg  mt-5  w-full rounded-lg border-solid border-[3px] bg-white"

      >
        <table
          class="border-separate border-spacing-2 border border-slate-400 bg-white w-full"
        >
          <thead>
            <tr>
              <th class="border border-slate-300 ...">ชื่อผู้ใช้</th>
              <th class="border border-slate-300 ...">ชื่อเกม</th>
              <th class="border border-slate-300 ...">ชื่อไอดี</th>
              <th class="border border-slate-300 ...">จำนวนเงิน</th>
              <th class="border border-slate-300 ...">วิธีการเติมเงิน</th>
              <th class="border border-slate-300 ...">หมายเลขการเติมเงิน</th>
              <th class="border border-slate-300 ...">หมายเหตุ</th>
            </tr>
            <tr  v-for="(data, index) in adminData?.paymentRequest"
        :key="index">
              <td class="border border-slate-300 ...">
                {{ data.payload.customer_name }}
              </td>
              <td class="border border-slate-300 ...">
                {{ data.payload.game_name }}
              </td>
              <td class="border border-slate-300 ...">
                {{ data.payload.game_id }}
              </td>
              <td class="border border-slate-300 ...">
                {{ data.payload.price }}
              </td>
              <td class="border border-slate-300 ...">
                {{ data.payload.payment }}
              </td>
              <td class="border border-slate-300 ...">
                {{ data.payload.payment_id }}
              </td>
              <td class="border border-slate-300 ..."> <q-btn
                label="ยืนยัน"
                class=""
                @click="
                  acept(
                    data.payload.customer_name,
                    data.payload.payment_id,
                    data.id
                  )
                "
              />
              <q-btn
                label="ยกเลิก"
                class=""
                @click="
                  cancel(
                    data.payload.customer_name,
                    data.payload.payment_id,
                    data.id
                  )
                "
              /></td>
            </tr>
          </thead>
        </table>
        <tr>
          </tr>
      </div>
    </div>

  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { fetchPaymentRequestData, deletePaymentRequest } from "../main";
import { createNotification } from "../main";
import { useQuasar } from "quasar";
export default defineComponent({
  setup() {
    const adminData = ref();
    const $q = useQuasar();
    const message = ref("");

    const acept = async (email, payment_id, id) => {
      message.value = "ทำรายการสำเร็จ";
      const status = {
        message: message.value,
        email: email,
        payment_id: payment_id,
      };
      $q.dialog({
        title: "ยืนยันการทำรายการนีั้สำเร็จ",
        message: "",
      });
      await createNotification(status);
      await deletePaymentRequest(id);
      fetchPaymentRequest();
    };
    
    const cancel = async (email, payment_id, id) => {
      
      message.value = "รายการนี้ไม่ถูกอนุมัติ";
      const status = {
        
        message: message.value,
        email: email,
        payment_id: payment_id,
      };
      $q.dialog({
        title: "ไม่อนุมัติรายการนี้",
        message: "",
      });

      await createNotification(status);
      await deletePaymentRequest(id);
      fetchPaymentRequest();
    };

    const fetchPaymentRequest = async () => {
      adminData.value = await fetchPaymentRequestData();
    };

    onMounted(() => {
      fetchPaymentRequest();
    });

    return { adminData, acept, cancel };
  },
});
</script>

<style></style>
