<script setup>
import { ref, watch } from 'vue'
const numbers = ref([])

watch(numbers, () => console.log('new number added'))

const randomNum = () => numbers.value.push(Math.random())

watch(numbers, () => console.log('new number added'));

</script>
<template>
  <button @click="randomNum">Add Random Number</button>
</template>
