<script setup>
import { ref, computed } from 'vue'
const productes = ref([
    { nom: 'Portàtil', preu: 1000 },
    { nom: 'Mòbil', preu: 500 },
    { nom: 'Tauleta', preu: 300 },
]);

const preuMinim = ref('')

const productesFiltrats = computed(() => {
    if (preuMinim.value === ''){ 
        return productes.value
    }else{
        return productes.value.filter(producte => producte.preu >= preuMinim.value)
        }
    })

</script>

<template>
    <input v-model.number="preuMinim" placeholder="Preu mínim" />
    <ul>
        <li v-for="producte in productesFiltrats" :key="producte.nom">
            {{ producte.nom }} - {{ producte.preu }} €
        </li>
    </ul>
</template>