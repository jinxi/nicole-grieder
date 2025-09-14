<script defer>
  import FlatsList from './FlatsList.vue';
</script>

<script setup>
//   import { ref, onMounted } from 'vue';
</script>

<template>
  <section class="hero">
      <div class="container">
          <h1 class="hero__title">Zuvermieten</h1>
          <p class="hero__text">Folgende Wohnungen suchen neuen Schwung. Vielleicht durch Sie?</p>
      </div>
  </section>
  <section class="section-accordion">
      <div class="container">
        <div>
            <div class="accordion">
              <h1 class="section-title">Liestal</h1>
              <FlatsList :json-path="'/data/flatsLiestal.json'" />
              <h1 class="section-title">Kaiseraugst</h1>
              <FlatsList :json-path="'/data/flatsKaiseraugst.json'" />
            </div>
        </div>
      </div>
  </section>
</template>
<style>
.section-accordion{
  /* max-width: 50rem; */
  /* margin-inline: auto; */
  background-color: var(--color-gray);
  /* padding-inline: 1rem; */
}

.accordion{
  --_button-size: 3rem;
  --_panel-padding: 0.75rem;
  --_panel-gap: 1rem;

  display: flex;
  flex-direction: column;
  gap: var(--_panel-gap);
  /* border: 3px solid white; */
}
.accordion *{
  margin: 0;
}


</style>