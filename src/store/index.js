import { defineStore } from "pinia";
import { ref } from "vue";
import usersDB from "../database/login-mock.js";

export const useUsersStore = defineStore("users", () => {
  const users = ref(usersDB);
  const activeUser = ref(null);
  function authenticateUser(userName, pass) {
    let valid = users.value.find((u) => u.name == userName && u.pass == pass);
    if (valid) activeUser.value = valid;
    return !!valid;
  }
  function addAppointment(day, time, desc) {
    if (activeUser.value) {
      if (!activeUser.value.appointments) activeUser.value.appointments = [];
      activeUser.value.appointments.push({
        day: day.value,
        time: time.value,
        desc: desc.value,
      });
    }
  }
  function getAppointments() {
    if (activeUser.value) {
      return activeUser.value.appointments || [];
    }
    return [];
  }
  return { authenticateUser, addAppointment, getAppointments };
});
