import { defineStore } from "pinia";
import { ref, computed } from "vue";
import usersDB from "../database/login-mock.js";

export const userStore = defineStore("userStore", () => {
  const users = ref(usersDB);
  authenticateUser = function (userName, pass) {
    return users.some((u) => u.name == userName && u.pass == pass);
  };
  return { users, authenticateUser };
});
