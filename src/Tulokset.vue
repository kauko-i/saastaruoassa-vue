<script setup>
defineProps(['aineet']);

</script>

<template>
    <p>Tulokset (g/viikko):</p>
    <ul>
        <li v-for="aine in aineet.lista">{{ aine }}</li>
    </ul>
    <p>Yhteensä {{ aineet.summa }} €/viikko!</p>
</template>