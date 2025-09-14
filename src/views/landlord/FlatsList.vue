
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
  <div class="flats-list">
    <FlatWidget
      v-for="flat in flats"
      :key="flat.id"
      :images="flat.images"
      :address="flat.address"
      :price="flat.price"
      :description="flat.description"
    />
  </div>
</template>


<style>
.flats-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
