<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
export default {
  components: {
    Navigation,
    Footer
  },
};
</script>

<style>
</style>
