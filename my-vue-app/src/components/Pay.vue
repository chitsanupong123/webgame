<template>
  <div class="max-w-full mx-auto  ">
    <q-btn @click="onSelectedMenu('kbank')" dense flat label=""
      ><img
        src="imge/mastercard.png"
        alt=""
        :style="selected == 'kbank' ? 'width:300px; height300px' : ''"
        class="w-[200px]"
    /></q-btn>
    <q-btn @click="onSelectedMenu('true')" dense flat label=""
      ><img
        src="imge/Tr.png"
        alt=""
        :style="selected == 'true' ? 'width:300px; height300px' : ''"
        class="w-[200px]"
    /></q-btn>
    <q-btn @click="onSelectedMenu('garena')" dense flat label=""
      ><img
        src="imge/Garena.png"
        alt=""
        :style="selected == 'garena' ? 'width:300px;height300px' : ''"
        class="w-[200px]"
    /></q-btn>
    <div class="flex flex-row gap-96 ">
      <div class="q-pa-md my-16">
        <q-option-group :options="options" type="radio" v-model="group" />
      </div>
      <div class=" my-16 ">
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
          label="กรุณณากรอก"
          class="w-[500px] bg-white rounded-full mt-5"
        />
        <q-btn
          color="black"
          label="ยืนยัน"
          class="mt-5 ml-[200px]"
          @click="showCustom"
          :disable="Idgame && text? false : true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar, QSpinnerGears } from "quasar";
export default defineComponent({
  setup() {
    const selected = ref("kbank");
    const text = ref("");
    const Idgame = ref("");

    const onSelectedMenu = (onSelected) => {
      selected.value = onSelected;
      console.log(selected.value);
    };
    const $q = useQuasar();
    function showCustom() {
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
    }
    return {
      Idgame,
      showCustom,
      selected,
      onSelectedMenu,
      text,
      group: ref(null),

      options: [
        { label: "$50", value: "bat", color: "black" },
        { label: "$100", value: "friend", color: "black" },
        { label: "$150", value: "upload", color: "black" },
        { label: "$200", value: "load", color: "black" },
        { label: "$300", value: "up", color: "black" },
      ],
    };
  },
});
</script>
