<script setup lang="ts">
defineProps<{
    icone:string,
    titulo: string,
    desc: string
}>()
</script>

<template>
<div class="card">
    <span><i :class="icone"></i></span>
    <h5>{{titulo}}</h5>
    <p>{{desc}}</p>
</div>
</template>

<style scoped>
    @import '../styles/baseCard.scss';
</style>