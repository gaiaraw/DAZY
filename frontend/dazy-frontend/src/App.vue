<!-- tempate html -->
<template>

  <RouterView :test="testA"/>

  <input type="text" v-model="testA.truc" v-on:select="display">

</template>

<!-- script js -->

<script setup>

import { reactive, ref } from 'vue';
import { RouterView } from 'vue-router'

const testA = reactive({
truc : "bzttttt"
});

function display() {
  console.log(testA.truc)
}

</script>

<!-- style css -->

<style scoped>

</style>
