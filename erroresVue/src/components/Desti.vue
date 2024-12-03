<script setup>
import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();
const router = useRouter();

function navegarAmbHash() {
    router.push({ path: '/', hash: '#introduccio' });
}

const goToNextUser = () => {
    const nextId = parseInt(route.params.id) + 1;
    router.push(`/desti/${nextId}`);
};
const goToPrevUser = () => {
    const nextId = parseInt(route.params.id) - 1;
    router.push(`/desti/${nextId}`);
};

watch(
    () => route.path,
    (newPath, oldPath) => {
        console.log(`Canvi de ruta: ${oldPath} → ${newPath}`);
    }
);
</script>
<template>
    <div>desti</div>
    <h1>Path: {{ route.path }}</h1>
    <h2>Id: {{ route.params.id }}</h2>
    <p>Query:{{ route.query }}</p>
    <p>hash:{{ route.hash }}</p>
    <button @click="navegarAmbHash">
        Anar a home
    </button>
    <button @click="goToNextUser">Ves al següent link</button>
    <button @click="goToPrevUser">Ves al anterior link</button>


</template>