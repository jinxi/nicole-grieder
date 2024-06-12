<script>
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
              <img class="--round-boarders" id="myImg" src="./../assets/img/profil/IMG_20240424_111007.jpg" alt="Profilbild">
              <!-- todo: The Modal -->
          
          </div>

          <div class="col">
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
            <img class="--round-boarders" src="./../assets/pdf/LTC-Zertifikat.jpg" alt="LTC Zertifikat Nicole Grieder">
            <img class="--round-boarders" src="./../assets/pdf/Master.jpg" alt="Master of Science in Engineering Nicole Grieder">
            <img class="--round-boarders" src="./../assets/pdf/Bachelor.jpg" alt="Bachelor of Science in Engineering Nicole Grieder">
          </div>
      </div>
  </section>
</template>

<style>
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
