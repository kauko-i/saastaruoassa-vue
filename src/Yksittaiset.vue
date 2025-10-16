<script setup>
import { ref } from 'vue';

import ruoat from '../ruoat.json';
console.log(ruoat);

const count = ref(0);
</script>

<template>
  <fieldset>
    Laskennassa käytettävät ruoka-aineet ovat:
    <label v-for="ruoka in ruoat"><input type="checkbox"></input> {{ ruoka }}</label>
  </fieldset>
</template>
