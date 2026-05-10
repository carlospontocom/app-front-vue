<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="header">
        <div class="container">
            <div class="navbar">
            <h2>
                Vue.TS
            </h2>
            <ul class="menu">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sobre">Sobre</RouterLink>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/appHeader.scss' as *;
</style>