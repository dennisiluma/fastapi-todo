<script setup lang="ts">

import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div>

    <Navbar/>

    <!-- for visuallt imparied ppl to help anounce stuff to them -->
    <NuxtRouteAnnouncer /> 

    <main>
      <NuxtPage/>
    </main>


    <Footer/>
  </div>
</template>
