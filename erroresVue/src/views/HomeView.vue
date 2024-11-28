<template>
    <div>
        <button @click="goToAbout">Ves a About</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAbout = () => {
    router.push('/about'); // També es pot utilitzar el nom: router.push({ name: 'about' })
};
</script>