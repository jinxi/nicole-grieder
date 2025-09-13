<template>
  <div class="flat-widget">
    <div class="image-gallery">
      <img :src="images[currentImgIndex]" alt="Flat Image" />
      <div v-if="images.length > 1" class="gallery-controls">
        <button @click="prevImage">‹</button>
        <button @click="nextImage">›</button>
      </div>
    </div>
    <div class="flat-info">
      <h3>{{ address }}</h3>
      <p><strong>Price:</strong> ${{ price }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlatWidget',
  props: {
    images: Array,
    address: String,
    price: Number,
    description: String
  },
  data() {
    return {
      currentImgIndex: 0
    };
  },
  methods: {
    nextImage() {
      console.log("nextImage");
      this.currentImgIndex = (this.currentImgIndex + 1) % this.images.length;
    },
    prevImage() {
      console.log("prevImage"+this.images.name);
      this.currentImgIndex =
        (this.currentImgIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<style scoped>
.flat-widget {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  max-width: 400px;
}
.image-gallery {
  position: relative;
}
.image-gallery img {
  width: 100%;
  height: auto;
  display: block;
}
.gallery-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.gallery-controls button {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem;
}
</style>
