<script>
// ---- add in main.js ----
import Welcome from './components/Welcome.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';


export default {
    name: "App",
    components: {
        Welcome,
        Navigation,
        Footer,
    },
};

// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <Navigation />
 

  <main>
    <!-- <TheWelcome /> -->
    <Welcome />


  </main>
  <Footer />
</template>

<style scoped>
footer{
  background: var(--color-petrol-dark);
  padding: 1em 0;
  text-align: center;
}

footer{
  color: var(--color-gold-light);
}

@media (min-width: 900px){
  .footer{
    align-items: center;
    justify-content: space-between;
  }
  .footer--left{
    text-align: left;
  }
  .footer--right{
    text-align: right;
  }
}


/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */

</style>
