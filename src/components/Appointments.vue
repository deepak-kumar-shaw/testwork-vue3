<template>
  <div>
    <v-card v-if="!appointmentAdded" width="50%" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>Appointment</h1>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-combobox
              v-model="dateModel"
              :items="dayItems"
              label="Day"
            ></v-combobox>
          </v-col>
          <v-col cols="6">
            <v-combobox
              v-model="timeModel"
              :items="timeItems"
              label="Time"
            ></v-combobox>
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="Details"
              variant="outlined"
              v-model="desc"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="info"
          :loading="loading"
          type="submit"
          @click="addAppointmentHandler"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
    <div v-else class="d-flex flex-column mt-5">
      <div class="d-flex mb-10">
        <v-btn-toggle v-model="goToPageModel" rounded="0" group>
          <v-btn value="home"> HOME </v-btn>
          <v-btn value="new"> New appointment </v-btn>
        </v-btn-toggle>
      </div>
      <v-card>
        <v-card-title
          >Apponitment confirmed for slot: {{ dateModel }} {{ timeModel }}
        </v-card-title>
        <v-card-text>
          <v-textarea
            label="Details"
            variant="outlined"
            v-model="desc"
            readonly
          ></v-textarea>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useUsersStore } from "../store";
const myStore = useUsersStore();

import { useRouter } from "vue-router";
const router = useRouter();

const dayItems = [];
let today = new Date();
for (let i = 0; i < 5; i++) {
  if (today.getDay() == 0) today.setDate(today.getDate() + 1);
  dayItems.push(
    `${today.getDate()} ${today.toLocaleString("en-US", { month: "short" })}`
  );
  today.setDate(today.getDate() + 1);
}
const timeItems = ["9 - 12", "12 - 3", "3 - 6"];

const dateModel = ref("");
const timeModel = ref("");
const desc = ref("");
const appointmentAdded = ref(false);
const goToPageModel = ref(null);

function addAppointmentHandler() {
  myStore.addAppointment(dateModel, timeModel, desc);
  appointmentAdded.value = true;
}
function reset() {
  dateModel.value = "";
  timeModel.value = "";
  desc.value = "";
}

watch(goToPageModel, (newValue) => {
  reset();
  if (newValue == "new") {
    appointmentAdded.value = false;
  } else {
    router.push("/myappointments");
  }
});
</script>
