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
            <div>
              <p>Ich bin knappe 40 Jahre jung und Mutter zweier Kinder. Habe eine Kauf&shy;männische und eine Informatik Ausbildung. 
                War 15 Jahr bis 2023 in Österreich. Habe dort meinen Master in Engineering gemacht.
              </p>
              <p>Im 2023 habe ich die Ausbildung <a href="https://lifetrust-coach.com/" target="_blank">"Life Trust Coach"</a> von Veit Lindau mit all den 12 Prüfungen erfolgreich abgeschlossen.
              </p>
              <p>Im 2026 beginne ich den die Ausbildung zur Immobilienbewirtschafterin der <a href="https://www.svit.ch/de/education/fa-immobilienbewirtschaftung" target="_blank">SVIT</a>.</p>
              <p>Ich bin eine sehr motivierte Allrounderin, sowohl Kauffrau als auch Ingenieurin, die Coaching Ausbildung für das Zwischenmenschliche mit Mietern, Behörden etc. und zum Abschluss die Immobilienbewirtschafterin, um bestehendes Wissen zu festigen und Neues zu lernen.</p>
            </div>
          </div>
        </div>
        <div class="container row">
          <div class=" seperator_mobile">
            <h1 class="section-title section-title--dark">Wie bin ich in die Immobilienbranche gerutscht?</h1>
            <p>Alles hat mit der Renovation meines 1. Hauses (2016/2017) angefangen, bei der ich praktisch alles mit Freunden und Bekannten plante und umsetzte. Dabei lernte ich sehr viel über das Herz (Umbau von Oel auf Gas mit Wärmepumpe) des Hauses, zudem die Elektrik (ersetzen und erweitern der Leitungen und Dosen), Statik (ein paar Wände mussten fallen) und vieles mehr.<br>
              Dann der Verkauf, mein 1. Kontakt mit einer Maklerfreundin, die mir durch die Behoerdenhürden half (ich lebte damals in Österreich).</p>
            <p>Dann das Renovieren meines 2. Hauses (2023), ein neues Herzsystem (Fernwärme mit Bodenheizung) kennen lernen.</p>
            <p>Das Verwalten und teil-renovieren meines eigenen Wohnhauses mit 6 Einheiten (2024), sowie das Verwalten eines weiteren Wohnhauses mit 9 Einheiten für meine 1. Kundin (2025).</p>
          </div>
        </div>
  </section>
  <section class="section-products">
    <div class="container row">
        <div class="col seperator_mobile text--light">
            <h1 class="section-title section-title--dark">Was biete ich an?</h1>
            <h2>Immobilienbewirtschaftung</h2>
            <p>Sehr gerne mache ich die Bewirtschaftung von Mehrfamilienhäusern die im 10km-Umkreis von Liestal liegen.</p>
            <p>Die Art der Bewirtschaftung ist sehr persönlich. Mieterinnen und Mieter sind immer willkommen in Kontakt mit mir zutreten. Sie können mich telefonisch, per Mail aber auch über Whatsapp erreichen. 
              Haben Mieterinnen und Mieter nicht Deutsch als Muttersprache, übersetze ich Ihnen die Texte bestmöglich, um sicher zugehen, dass wir vom selben Reden. In regelmässigen Intervallen besuche ich die Liegenschaften, um sicher zugehen, das alles in Ordnung ist und das Anschlagbrett aktuell ist.</p>
            <h2>Bewirtschaftungstool und Anpassungen</h2>
            <p>Da ich mir für meine Liegenschaften ein passendes Tool zur Bewirtschaftung gebaut habe (mit Notion), dass untenstehende Feautres bereits beinhaltet, biete ich dieses Toolset auch gerne anderen Bewirtschafterinnen und Bewirtschafter an und kann es Ihnen auch gerne Anpassen/Erweitern.</p>
              <ul class="inside">
                <li>Registrieren der Wohneinheiten</li>
                <li>zuweisen der Mietern zu den Wohnheiten</li>
                <li>Inventarisierung der Haushaltsgeräte der Wohneinheiten</li>
                <li>Schlüsselvergabeübersicht der Mieter</li>
                <li>Übersicht des Leerstandes</li>
                <li>Übersicht der auslaufenden Mietverträge</li>
                <li>ToDoes/Tasks die sowohl mit Mietern, aber auch mit Wohneinheiten verbunden werden können</li>
              </ul>
            <p>Sehr gerne benutze ich auch die Export Funktion, um den Inhabern eine Uebersicht der Wohnungen und deren Mietzins, Nebenkosten etc. zu verschaffe oder eine Uebersicht der aktuellen Mietern zu geben.</p>
        </div>
    </div>
  </section>
</template>

<style>

.section-products{
  /* max-width: 50rem; */
  /* margin-inline: auto; */
  background-color: var(--color-gray);
  /* padding-inline: 1rem; */
}

.text--light{
  color: var(--color-gold-light);
}

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
