<script defer>
// const fetchData = async() => {
//   try{
    
//     const slides = document.querySelector(".mySlides");
//     const dots = document.querySelector(".demo");
//     const captionText = document.querySelector(".caption");
//     slides.addEventListener('click', (e)=>{
//        console.log("CLICK!!!");
//        console.log(e.target);
//     });
//   }catch(error){
//     console.error('Error fetching data: ',error);
//   }
// };

  import FlatsList from './FlatsList.vue';
</script>

<script setup>
//   import { ref, onMounted } from 'vue';


//   const data = ref(null);

//   try {
//     onMounted(async () => {
//       data.value = await fetchData();
//     });
//   } catch (error) {
//     console.error('Error in setup function:', error);
//   }
//   let slideIndex = 1;
//     showSlides(slideIndex);
//     function plusSlides(n) {
//     showSlides(slideIndex += n);
//     }

//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }

//     function showSlides(n) {
//     let i;
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//     }   

</script>

<template>
  <section class="hero">
      <div class="container">
          <h1 class="hero__title">Zuvermieten</h1>
          <p class="hero__text">Folgende Wohnungen suchen neuen Schwung. Vielleicht durch Sie?</p>
      </div>
  </section>
  <FlatsList />
</template>
<style>
/* Position the image container (needed to position the left and right arrows) */
.container {
  position: relative;
}
/* Hide the images by default */
.mySlides {
  display: none;
}
/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container {
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

/* todo: what does that? */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* todo: make dynamic by counting children. Six columns side by side */
.column {
  float: left;
  width: 16.66%; 
}


/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}


.active,
.demo:hover {
  opacity: 1;
}

</style>