<script setup>
import sourceData from "./data.json";
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
