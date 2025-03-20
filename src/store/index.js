import { defineStore } from "pinia";
import { ref } from "vue";
import usersDB from "../database/login-mock.js";

export const useUsersStore = defineStore("users", () => {
  const users = ref(usersDB);
  function authenticateUser(userName, pass) {
    let v = users.value.some((u) => u.name == userName && u.pass == pass);
    return v;
  }
  return { users, authenticateUser };
});
