<template>
  <div class="max-w-full mx-auto" v-if="item">
    <q-btn @click="onSelectedMenu('mastercard')" dense flat label=""
      ><img
        src="imge/mastercard.png"
        alt=""
        :style="selected == 'mastercard' ? 'width:250px; height250px' : ''"
        class="w-[200px] rounded-[30px]"
    /></q-btn>
    <q-btn @click="onSelectedMenu('true')" dense flat label=""
      ><img
        src="imge/Tr.png"
        alt=""
        :style="selected == 'true' ? 'width:250px; height250px' : ''"
        class="w-[200px]"
    /></q-btn>

    <q-btn @click="onSelectedMenu('garena')" dense flat label=""
      ><img
        src="imge/Garena.png"
        alt=""
        :style="selected == 'garena' ? 'width:250px;height250px' : ''"
        class="w-[200px] rounded-[30px]"
    /></q-btn>
    <div class="flex flex-row gap-96">
      <div class="q-pa-md my-16">
        <q-option-group :options="options" type="radio" v-model="group" />
      </div>
      <div class="my-16">
        <span>{{
          selected == "garena" || selected == "true"
            ? "ใส่เลขบัตรเงินสด"
            : "ใส่เลขบัตรเครดิต"
        }}</span>
        <q-input
          rounded
          outlined
          v-model="Idgame"
          label="ไอดีเกม"
          class="w-[500px] bg-white rounded-full mt-5"
        />
        <q-input
          rounded
          outlined
          v-model="text"
          maxlength="13"
          label="กรุณณากรอกหมายเลข"
          class="w-[500px] bg-white rounded-full mt-5"
        />
        <q-btn
          color="black"
          label="ยืนยัน"
          class="mt-5 ml-[200px]"
          @click="showCustom"
          :disable="Idgame && text ? false : true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar, QSpinnerGears } from "quasar";
import { createPaymentRequest, fetchPrice } from "../main";
export default defineComponent({
  props: {
    account: { type: Object, default: () => {} },
    name: String,
  },
  setup(props) {
    const selected = ref("mastercard");
    const text = ref("");
    const Idgame = ref("");
    const group = ref(null);
    const SetPrice = ref();
    const item = ref();
    const options = ref()

    onMounted(async() => {
      SetPrice.value = await fetchPrice();
      item.value = SetPrice.value.priceRequest.filter(
        (x) => x?.payload.payment == "mastercard"
      );
      options.value = [
        { label: item.value[0].payload.price[0], value: item.value[0].payload.price[0], color: "black" },
        { label: item.value[0].payload.price[1], value: item.value[0].payload.price[1], color: "black" },
        { label: item.value[0].payload.price[2], value: item.value[0].payload.price[2], color: "black" },
      ]
    });

    const onSelectedMenu = (onSelected) => {
      selected.value = onSelected;
      if (selected.value == "mastercard") {
        item.value = SetPrice.value.priceRequest.filter(
          (x) => x.payload.payment == selected.value
        );
        options.value = [
        { label: item.value[0].payload.price[0], value: item.value[0].payload.price[0], color: "black" },
        { label: item.value[0].payload.price[1], value: item.value[0].payload.price[1], color: "black" },
        { label: item.value[0].payload.price[2], value: item.value[0].payload.price[2], color: "black" },
      ]
      } else if (selected.value == "true") {
        item.value = SetPrice.value.priceRequest.filter(
          (x) => x.payload.payment == selected.value
        );
        options.value = [
        { label: item.value[0].payload.price[0], value: item.value[0].payload.price[0], color: "black" },
        { label: item.value[0].payload.price[1], value: item.value[0].payload.price[1], color: "black" },
        { label: item.value[0].payload.price[2], value: item.value[0].payload.price[2], color: "black" },
      ]
      } else {
        item.value = SetPrice.value.priceRequest.filter(
          (x) => x.payload.payment == selected.value
        );
        options.value = [
        { label: item.value[0].payload.price[0], value: item.value[0].payload.price[0], color: "black" },
        { label: item.value[0].payload.price[1], value: item.value[0].payload.price[1], color: "black" },
        { label: item.value[0].payload.price[2], value: item.value[0].payload.price[2], color: "black" },
      ]
      }
    };
    const $q = useQuasar();
    const showCustom = async () => {
      const dialog = $q.dialog({
        title: "Uploading...",
        dark: true,
        message: "0%",
        progress: {
          spinner: QSpinnerGears,
          color: "amber",
        },
        persistent: true, // we want the user to not be able to close it
        ok: false, // we want the user to not be able to close it
      });

      // we simulate some progress here...
      let percentage = 0;
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 50));

        // we update the dialog
        dialog.update({
          message: `${percentage}%`,
        });

        // if we are done...
        if (percentage === 100) {
          clearInterval(interval);

          dialog.update({
            title: "Done!",
            message: "อัพเดตข้อมูลเสร็จแล้วกรุณารอแอดมิน",
            progress: false,
            ok: true,
          });
        }
      }, 500);
      const information = {
        customer_name: props.account.email,
        game_id: Idgame.value,
        game_name: props.name,
        payment: selected.value,
        payment_id: text.value,
        price: group.value,
      };
      await createPaymentRequest(information);
    };
    return {
      item,
      Idgame,
      showCustom,
      selected,
      onSelectedMenu,
      text,
      group,
      options
    };
  },
});
</script>
