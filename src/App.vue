<template>
  <v-app>
    <v-main>
      <!-- <Login v-if="validated" @validated="validated = true" />
      <router-view v-else> </router-view> -->
      <router-view> </router-view>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";
const validated = ref(false);
//
</script>
