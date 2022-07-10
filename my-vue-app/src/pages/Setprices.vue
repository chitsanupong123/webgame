<template>
  <q-page class="bg-[#778DA9]">
    <div v-if="item" class="max-w-screen-xl w-full mx-auto">
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
      <q-btn
        unelevated
        icon="home"
        @click="addPrices(index)"
        label="เพิ่ม"
        style="
          background-color: #a4a4a4;
          fontweight: 900;
          color: white;
          border-radius: 8px;
        "
      />
      <q-input
        type="number"
        rounded
        outlined
        v-model.number="item[0].payload.price[0]"
        maxlength="13"
        label="กรุณณากรอกหมายเลข"
        class="w-[500px] bg-white rounded-full mt-5"
      />
      <q-input
        type="number"
        rounded
        outlined
        v-model.number="item[0].payload.price[1]"
        maxlength="13"
        label="กรุณณากรอกหมายเลข"
        class="w-[500px] bg-white rounded-full mt-5"
      />
      <q-input
        type="number"
        rounded
        outlined
        v-model.number="item[0].payload.price[2]"
        maxlength="13"
        label="กรุณณากรอกหมายเลข"
        class="w-[500px] bg-white rounded-full mt-5"
      />
      <q-btn
        color="black"
        label="บันทึก"
        class="mt-5 ml-[200px]"
        @click="onSummit(item)"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { fetchPrice, deleteSetProce, createSetPrice } from "../main";
export default defineComponent({
  setup() {
    const selected = ref("mastercard");
    const SetPrice = ref();
    const text = ref("");
    const item = ref();
    const id = ref("");

     const onSelectedMenu = (onSelected) => {
      selected.value = onSelected;
      if (selected.value == "mastercard") {
        item.value = SetPrice.value.priceRequest.filter(
          (x) => x.payload.payment == selected.value
        );
      } else if (selected.value == "true") {
        item.value = SetPrice.value.priceRequest.filter(
          (x) => x.payload.payment == selected.value
        );
      } else {
        item.value = SetPrice.value.priceRequest.filter(
          (x) => x.payload.payment == selected.value
        );
      }
      
    };

    const onSummit = async (item) => {
      const mapItem = {
        price: [
          item[0].payload.price[0],
          item[0].payload.price[1],
          item[0].payload.price[2],
        ],
        payment: item[0].payload.payment,
      };
      id.value = item[0].id;
      await deleteSetProce(id.value);
      await createSetPrice(mapItem);
      await fetchSetPrice();
    };

    const fetchSetPrice = async () => {
      SetPrice.value = await fetchPrice();
    // console.log(SetPrice.value); 
      item.value = SetPrice.value.priceRequest.filter(
        (x) => x?.payload.payment == selected.value
      );
    //   console.log(item.value);
    };

    // const addPrices = async (index) => {
    //   currentInput.value = index;
    //   const add = data.value[currentInput.value].detail.push({});
    // };

    onMounted(() => {
      fetchSetPrice();
    });
    return { selected, onSelectedMenu, SetPrice, text, item, onSummit };
  
  },
});
</script>

<style></style>
