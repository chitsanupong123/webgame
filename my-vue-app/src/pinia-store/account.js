import { ref } from "vue";
import { defineStore } from "pinia";

export const useOnsaveAccount = defineStore("account", () => {
  const account = ref();

  const onSaveAccount = (payload) => {
    account.value = payload;
  };

  return { account, onSaveAccount };
});
