
<script>
import FlatWidget from './FlatWidget.vue';

export default {
  name: 'FlatsList',
  components: { FlatWidget },
  props: {
    jsonPath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      flats: []
    };
  },
  mounted() {
    fetch(this.jsonPath)
      .then((res) => res.json())
      .then((data) => {
        this.flats = data;
      })
      .catch((err) => console.error('Failed to load flats:', err));
  }
};
</script>

<template>
<section class="accordion">
  <div class="container">
    <div>
       <FlatWidget
          v-for="flat in flats"
          :key="flat.id"
          :icon="flat.icon"
          :images="flat.images"
          :address="flat.address"
          :price="flat.price"
          :title="flat.title"
          :description="flat.description"
        />
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
</style>
