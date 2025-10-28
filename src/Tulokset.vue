<script setup>
defineProps(['aineet']);

</script>

<template>
    <p>Tulokset (g/viikko):</p>
    <ul>
        <li v-for="aine in aineet">{{ aine }}</li>
    </ul>
</template>