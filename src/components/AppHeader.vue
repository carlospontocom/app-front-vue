<script setup>
import LogoMarca from '../components/LogoMarca.vue';
import {ref} from 'vue';

const listaMenu = [
    {
        id: "link01",
        nome: "Home",
        link: "#home"
    },

    {
        id: "link02",
        nome: "Serviços",
        link: "#services"
    },

    {
        id: "link03",
        nome: "Projetos",
        link: "#projetos"
    }
]

const menuAberto = ref(false);

function alternarMenu(){
    menuAberto.value = !menuAberto.value;
}
</script>


<template>
    <header>
        <nav class="navbar">
            <a href="">
                <LogoMarca/>
            </a>
            <ul class="menu" :class="{ 'menu-ativo': menuAberto }">
                <li v-for="item in listaMenu" :key="item.id">
                    <a :href="item.link">{{ item.nome }}</a>
                </li>
            </ul>
            <button class="btn-menu-hamburguer" @click="alternarMenu">
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    </header>
</template>

<style scoped>

header{
    background: white;
    box-shadow: 0 0 6px #00000020;
    position: fixed;
    z-index: 10;
    width: 100%;

}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 1rem;
}

.menu{
    display: none;
    position: absolute;
    top:100%;
    right:0;
    background-color:seagreen;
    max-width: 320px;
    width:100%;
}

.menu a{
    color: white;
    border-bottom: 2px solid white;
    display: block;
    padding: 7px;
}

.menu-ativo{
    display:block;
}

.btn-menu-hamburguer{
    cursor: pointer;
    font-size: 2rem;
}
</style>