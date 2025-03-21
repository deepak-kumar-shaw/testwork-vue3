<script setup>
import { ref, computed } from "vue";
import { useUsersStore } from "../store";
const myStore = useUsersStore();
import { useRouter } from "vue-router";
const router = useRouter();

const form = ref(false);
const username = ref("");
const password = ref("");
const loading = ref(false);

const showPassword = ref(false);

const loginHandler = () => {
  let that = this;
  console.log("login");
  if (!form.value) return;
  loading.value = true;
  setTimeout(() => {
    let valid = myStore.authenticateUser(username.value, password.value);
    loading.value = false;
    if (valid) router.push("/myappointments");
    else alert("User name or Password is wrong");
  }, 1000);
};

function required(v) {
  return !!v || "Field is required";
}
</script>

<template>
  <div>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form v-model="form">
          <v-text-field
            v-model="username"
            label="Username"
            prepend-icon="mdi-account-circle"
            :rules="[required]"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[required]"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer />
        <v-btn
          color="info"
          :disabled="!form"
          :loading="loading"
          type="submit"
          @click="loginHandler"
          >Login</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped></style>
