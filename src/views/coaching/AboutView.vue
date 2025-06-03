<script defer>
  const fetchData = async() => {
    try{
      const dialog = document.querySelector("#modal");
      // console.log("DIALOG!!!");
      // console.log(dialog);

      const showDialog = document.querySelector(".showDialog");
      // console.log("showDialog!!!");
      // console.log(showDialog);

      const closeDialog = dialog.querySelector(".closeDialog");
      // console.log("closeDialog!!!");
      // console.log(closeDialog);

      showDialog.addEventListener('click', (e)=>{
        dialog.showModal();
        console.log("CLICK!!!");
        console.log(e.target);
      });

      closeDialog.addEventListener("click", ()=>{
        // console.log("CLICK!!!");
        // console.log(e.target);
        dialog.close();
      });
    }catch(error){
      console.error('Error fetching data: ',error);
    }
  };
</script>
<script setup>
  import { ref, onMounted } from 'vue';


  const data = ref(null);

  try {
    onMounted(async () => {
      // Your setup code that might throw an error
      data.value = await fetchData();
    });
  } catch (error) {
    console.error('Error in setup function:', error);
  }
</script>

<template>
  <section class="hero">
      <div class="container">
          <h1 class="hero__title">Über mich</h1>
          <p class="hero__text">Schaue nicht zu lange in die Ver&shy;gangen&shy;heit, sonst verpasst du die Zukunft. <br>(Ich mit 12 Jahren)</p>
      </div>
  </section>
  <section class="section-about">
      <div class="container row">
          <div class="col">
              <img class="--round-boarders" id="myImg" src="./../../assets/img/profil/IMG_20240424_111007.jpg" alt="Profilbild">
              <!-- todo: The Modal -->
          
          </div>

          <div class="col seperator_mobile">
            <h1 class="section-title section-title--dark">Über mich</h1>
            <p>Ich bin knappe 40 Jahre jung und Mutter zweier Kinder. Habe eine Kauf&shy;männische und eine Informatik Ausbildung. 
              War 15 Jahr bis 2023 in Österreich. Habe einen Bachelor in Informations&shy;technologie und Telekommunikation und einen Master in Game&shy;engineering und Simulation.
            </p>
            <p>Im 2023 habe ich die Ausbildung <a href="https://lifetrust-coach.com/" target="_blank">"Life Trust Coach"</a> von Veit Lindau mit all den 12 Prüfungen erfolgreich abgeschlossen.
            </p>
            <p>Am liebsten arbeite ich als Selbständige für Firmen mit IT und/oder Entwicklerteams, weil ich da meine fachlichen Kompetenzen vereinen kann und somit einen grossen Gewinn für die Firmen bin.
            </p>
          </div>
        </div>
        <div class="container">
          <div class="gallery">
            <img class="--round-boarders" src="./../../assets/pdf/LTC-Zertifikat.jpg" alt="LTC Zertifikat Nicole Grieder">
            <img class="--round-boarders" src="./../../assets/pdf/Master.jpg" alt="Master of Science in Engineering Nicole Grieder">
            <img class="--round-boarders" src="./../../assets/pdf/Bachelor.jpg" alt="Bachelor of Science in Engineering Nicole Grieder">
            <button class="showDialog">Open the modal</button>
            <dialog class="modal" id="modal">
              <h2>A pretty standard modal</h2>
              <div class="picturebox"></div>
              <button class="closeDialog">Close the modal</button>
            </dialog>
          </div>
      </div>
  </section>
</template>

<style>
dialog {
  display: none;
  opacity: 0;
  translate: 40vw 100vh;
  transition-property: overlay display opacity;
  transition-duration: 1s;
  transition-behavior: allow-discrete;
  /* animation: vanish 1s; */
}

dialog[open]{
  display: block;
  max-width: 50ch;
  padding: 1em;

  opacity: 1;
  translate: 40vw 40vh;
  /* animation: appear 1s; */
}

@starting-style{
  dialog[open]{
    opacity: 0;
    translate: 40vw 100vh;
  }
}

dialog::backdrop{
  transition-property: overlay display opacity;
  transition-duration: 1s;
  transition-behavior: allow-discrete;
  opacity: 0;
  background-color: var(--color-petrol-light);
  /* background-image: linear-gradient(45deg, red, blue); */
}

dialog[open]::backdrop{
  opacity: 0.75;
}

@starting-style{
  dialog[open]::backdrop{
    opacity: 0;
  }
}

.picturebox{
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  background-color: red;
  background-image: src('./../../assets/pdf/LTC-Zertifikat.jpg');
  background-size: contain;
}

/* @keyframes appears {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes vanish {
  from{
    display: block;
    opacity: 1;
  }
  to{
    display: none;
    opacity: 0;
  }
} */

.gallery{
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  /* gap: 1em; */
  /* border: solid 1px red; */
}
.gallery img{
  max-width: 300px;
}


@media (min-width: 700px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1070px) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
