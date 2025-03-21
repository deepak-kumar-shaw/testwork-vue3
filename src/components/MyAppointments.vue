<template>
  <div class="d-flex flex-column mt-5">
    <div class="mb-5">
      <h1>MyAppointments</h1>
    </div>
    <template v-if="myApps.length">
      <div v-for="(app, i) in myApps" class="d-flex flex-column mb-3">
        <div>{{ i + 1 }}. Appointment slot is {{ app.day }} {{ app.time }}</div>
        <div>{{ app.desc }}</div>
      </div>
    </template>
    <template v-else>
      <v-card width="50%" class="mx-auto mt-5">
        <v-card-title class="pb-0">
          <h1>No Appointment exists</h1>
        </v-card-title>
        <v-card-text>
          <div class="d-flex justify-center align-center empty-div">
            <v-btn color="info" @click="addAppointmentHandler"
              >NEW APPOINTMENT</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useUsersStore } from "../store";
const myStore = useUsersStore();
import { useRouter } from "vue-router";
const router = useRouter();

const myApps = computed(() => {
  return myStore.getAppointments();
});
function addAppointmentHandler() {
  router.push("/appointments");
}
</script>
<style scoped>
.empty-div {
  height: 100px;
}
</style>
