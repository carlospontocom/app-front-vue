<script setup lang="ts">
import BaseCard from './BaseCard.vue';
import {cards, type dadosInterface} from '../classes/dados';
</script>
<template>
    <h1 class="title">
        Hero
    </h1>
    <p class="text">Criando sistemas mordernos e incrivéis com tecnologia de ponto em fromework vue para gestão de
        negócios</p>

    <div class="hero-container">
        <BaseCard v-for="card in cards" 
        :key="card.id" 
        :icone="card.icone" 
        :titulo="card.titulo" 
        :desc="card.desc" />
    </div>
</template>

<style scoped lang="scss">
    @import '../styles/hero.scss';
</style>