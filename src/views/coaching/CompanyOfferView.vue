<script defer>
const fetchData = async() => {
  try{
    const accordion = document.querySelector(".accordion");
    accordion.addEventListener('click', (e)=>{
      // console.log("CLICK!!!");
      // console.log(e.target);
    });
  }catch(error){
    console.error('Error fetching data: ',error);
  }
};

</script>
<!-- <script src="./../../js/accordion.js" setup></script> -->

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

  // defineProps(['data']);

  // create array of icons according to the panel id
  var iconList = [];
  iconList[0] = '#add';        

  function toggleAccordion(panelClicked){
      // console.log(panelClicked.target.closest(".accordion-panel"));
      // todo: make dynamic sometime
      const index = panelClicked.target.closest(".accordion-panel").id;
      const panelToToggle = panelClicked.target.closest(".accordion-trigger");
      // const contentToToggle = panelCliecked.target.closest(".accordion-content");
      //if open-> close; if close -> open
      // console.log(panelToToggle.getAttribute('aria-expanded'));
      
      const panelContent = panelToToggle.parentElement.parentElement.querySelector("div");
      const panelIcon = panelToToggle.querySelector("use");

      if(panelIcon.getAttribute('xlink:href') != '#close'){
        iconList[index] = panelIcon.getAttribute('xlink:href');
        // console.log("Icon added to the iconList: " + iconList[index]);
      }
      // console.log(iconList);

      const panelStatus = panelToToggle.getAttribute('aria-expanded');
      // console.log(panelStatus);
      if(panelStatus==='true'){
          // closes the panel
          panelToToggle.setAttribute('aria-expanded', false);
          panelContent.setAttribute('aria-hidden', true);
          // check if an icon is set in the panel
          if(iconList[index]==''){
            panelIcon.setAttribute('xlink:href', iconList[0]);
            console.warn("icon of clicked panel was empty, icon got set to default add icon. to use custom icon, please set the xlink:href in the clicked panel.");
          }else{
            panelIcon.setAttribute('xlink:href', iconList[index]);
          }
          // console.log(panelIcon);
          // console.log("-- closed the panel -- ");
      }else{
          // opens the panel
          panelToToggle.setAttribute('aria-expanded', true);
          panelContent.setAttribute('aria-hidden', false);
          panelIcon.setAttribute('xlink:href','#close');
          // console.log(panelIcon);
          // console.log("-- opened the panel -- ");
      }
  }

</script>



<template>
  <section class="hero">
      <div class="container">
          <h1 class="hero__title">Firmen Angebot</h1>
          <p class="hero__text">Effizienz durch Flow macht glücklich <br>(Ich mit 38 Jahren)</p>
      </div>
  </section>
  <section class="section-company">
      <div class="container row">
        
      </div>
    </section>
    <section class="section-accordion">
        <div class="container">
          <div>
              <div class="accordion">
                <h1 class="section-title section-title--dark">Paket Team-Fit</h1>
                  <div class="accordion-panel" id="1">
                    <!-- connect the heading id with the aria-labelledby to interact. 
                        with role you can jump to content, this also needs the labelledby attribut -->
                    <h2 id="panel1-heading">
                        <button
                          @click="toggleAccordion"
                          class="accordion-trigger"
                          aria-controls="panel1-content"
                          aria-expanded="false"
                          >
                            <span id="panel1-title" class="accordion-title">Analyse</span>
                            <svg class="accordion-icon">
                                <use xlink:href="#eyeglasses"></use>
                            </svg>
                        </button>
                    </h2>
                    <div 
                      class="accordion-content" 
                      id="panel1-content" 
                      aria-labelledby="panel1-heading"
                      aria-hidden="true"
                      role="region"
                      >
                      <p>In der Analyse wird das Team kennen gelernt und vertrauen geschaffen. Es wird die Mitarbeiterzufriedenheit abgetastet. Mitarbeiterkonflikte angesprochen. Die unterschiedlichen Mitarbeitercharakteren werden anerkannt. Verbesserungspotentiale werden aufgedeckt. Mögliche Strategien und Arbeitsabläufe werden besprochen.</p>
                      <!-- todo: use webp compression -->
                      <img 
                        class="accordion-image"
                        src="./../../assets/img/graphics/team-structure.jpg"
                        alt="Ladybug on green leave"
                      />
                    </div>
                  </div>
                  <div class="accordion-panel" id="2">
                      <!-- connect the heading id with the aria-labelledby to interact. 
                          with role you can jump to content, this also needs the labelledby attribut -->
                      <h2 id="panel2-heading">
                          <button
                            @click="toggleAccordion"
                            class="accordion-trigger"
                            aria-controls="panel2-content"
                            aria-expanded="false"
                            >
                              <span id="panel2-title" class="accordion-title">Nachbearbeitung</span>
                              <svg class="accordion-icon">
                                  <use xlink:href="#psychology"></use>
                              </svg>
                          </button>
                      </h2>
                      <div 
                        class="accordion-content" 
                        id="panel2-content" 
                        aria-labelledby="panel2-heading"
                        aria-hidden="true"
                        role="region"
                        >
                        <p>In der Nachbearbeitung wird analysiertes in einem möglichen Konzept verfasst. Es wird der IST-Zustand des Teams und dessen Herausforderung festgehalten. Es werden Lösungsansätze aufgelistet und Ziele definiert.</p>
                        <img 
                          class="accordion-image"
                          src="./../../assets/img/graphics/keyboard.jpg"
                          alt="Ladybug on green leave"
                        />
                      </div>
                  </div>
                  <div class="accordion-panel" id="3">
                    <h2 id="panel3-heading">
                        <button
                          @click="toggleAccordion"
                          class="accordion-trigger"
                          aria-controls="panel3-content"
                          aria-expanded="false"
                          >
                            <span id="panel3-title" class="accordion-title">Massnahme</span>
                            <svg class="accordion-icon">
                                <use xlink:href="#sports"></use>
                            </svg>
                        </button>
                    </h2>
                    <div 
                      class="accordion-content" 
                      id="panel3-content" 
                      aria-labelledby="panel3-heading"
                      aria-hidden="true"
                      role="region"
                      >
                      <p>In der Massnahme legen wir ein bis 2 konkrete Ziele fest und erarbeiten Methoden/Strategien zu dessen Umsetzung.</p>
                      <img 
                        class="accordion-image"
                        src="./../../assets/img/graphics/brain-idea.jpg"
                        alt="Ladybug on green leave"
                      />
                    </div>
                  </div>
                  <div class="accordion-panel" id="4">
                      <h2 id="panel4-heading">
                          <button
                            @click="toggleAccordion"
                            class="accordion-trigger"
                            aria-controls="panel4-content"
                            aria-expanded="false"
                            >
                              <span id="panel4-title" class="accordion-title">Massnahmenbesprechung</span>
                              <svg aria-hidden="true" class="accordion-icon">
                                  <use xlink:href="#communication"></use>
                              </svg>
                          </button>
                      </h2>
                      <div 
                        class="accordion-content" 
                        id="panel4-content" 
                        aria-labelledby="panel4-heading"
                        aria-hidden="false"
                        role="region"
                        >
                        <p>In der Massnahmenbesprechung wird die Massnahme vorgestellt und etwaige Anpassungen vorgenommen. Spielregeln werden aufgestellt und das Kommittment der einzelnen Mitarbeiter wird eingeholt.</p>
                        <img 
                          class="accordion-image"
                          src="./../../assets/img/graphics/teamwork-zahnrad2.jpg"
                          alt="Ladybug on green leave"
                        />
                      </div>
                  </div>
                  <div  class="accordion-panel" id="5">
                      <h2 id="panel5-heading">
                          <button
                            @click="toggleAccordion"
                            class="accordion-trigger"
                            aria-controls="panel5-content"
                            aria-expanded="false"
                            >
                              <span id="panel5-title" class="accordion-title">Begleitung</span>
                              <svg aria-hidden="true" class="accordion-icon">
                                  <use xlink:href="#directions_walk"></use>
                              </svg>
                          </button>
                      </h2>
                      <div 
                        class="accordion-content" 
                        id="panel5-content" 
                        aria-labelledby="panel5-heading"
                        aria-hidden="false"
                        role="region"
                        >
                        <p>In der Begleitungsphase werden die neuen Routinen geprüft, denn es braucht einige Zeit bis sich alle an den neuen Rhythmus gewöhnt haben und ihn konsequent umsetzen. Hier dreht sich es vor allem um die Frage, was geht schon gut, womit haben die Mitarbeiter noch Mühe. Die Begleitung dauert 2 Monate und kann dann vom Team selbstgetragen werden.</p>
                        <img 
                          class="accordion-image"
                          src="./../../assets/img/graphics/teamwork-mountain.jpg"
                          alt="Ladybug on green leave"
                        />
                      </div>
                  </div>
                  <div class="accordion-panel" id="6">
                      <h2 id="panel6-heading">
                          <button
                            @click="toggleAccordion"
                            class="accordion-trigger"
                            aria-controls="panel6-content"
                            aria-expanded="false"
                            >
                              <span id="panel6-title" class="accordion-title">Feedback</span>
                              <svg aria-hidden="true" class="accordion-icon">
                                  <use xlink:href="#celebration"></use>
                              </svg>
                          </button>
                      </h2>
                      <div 
                        class="accordion-content" 
                        id="panel6-content" 
                        aria-labelledby="panel6-heading"
                        aria-hidden="false"
                        role="region"
                        >
                        <p>Mittels eines kurzen Fragebogens, holen wir uns gerne das Feedback der Mitarbeiter und der Firma zu unserer Leistung ab, denn auch wir sind an stetiger Verbesserung interessiert.</p>
                        <img 
                          class="accordion-image"
                          src="./../../assets/img/graphics/thumbsup.jpg"
                          alt="Thumbs-up"
                        />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  <svg width="0" height="0" class="hidden">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="menu">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="add">
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="close">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="communication">
      <path d="m408-432-42-42q8-11 11-22.5t3-23.5q0-12-3-23.5T366-565l42-43q16 19 24 42t8 46q0 23-8 45.5T408-432Zm85 86-43-43q25-28 37.5-62t12.5-69q0-35-12.5-68.5T450-650l43-43q34 37 50.5 81.5T560-520q0 47-16.5 92T493-346ZM200-480q-33 0-56.5-23.5T120-560q0-33 23.5-56.5T200-640q33 0 56.5 23.5T280-560q0 33-23.5 56.5T200-480ZM40-320v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H40Zm720-160q-33 0-56.5-23.5T680-560q0-33 23.5-56.5T760-640q33 0 56.5 23.5T840-560q0 33-23.5 56.5T760-480ZM600-320v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H600Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="group">
      <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="directions_walk">
      <path d="m280-40 112-564-72 28v136h-80v-188l202-86q14-6 29.5-7t29.5 4q14 5 26.5 14t20.5 23l40 64q26 42 70.5 69T760-520v80q-70 0-125-29t-94-74l-25 123 84 80v300h-80v-260l-84-64-72 324h-84Zm260-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="diversity_3">
      <path d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="park">
      <path d="M558-80H402v-160H120l160-240h-80l280-400 280 400h-80l160 240H558v160Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="nature">
      <path d="M200-80v-80h240v-160h-80q-83 0-141.5-58.5T160-520q0-60 33-110.5t89-73.5q9-75 65.5-125.5T480-880q76 0 132.5 50.5T678-704q56 23 89 73.5T800-520q0 83-58.5 141.5T600-320h-80v160h240v80H200Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="traffic">
      <path d="M480-240q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-180q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-180q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM280-360v-46q-51-14-85.5-56T160-560h120v-46q-51-14-85.5-56T160-760h120q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760h120q0 56-34.5 98T680-606v46h120q0 56-34.5 98T680-406v46h120q0 56-34.5 98T680-206v6q0 33-23.5 56.5T600-120H360q-33 0-56.5-23.5T280-200v-6q-51-14-85.5-56T160-360h120Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="signpost">
      <path d="M440-80v-160H240L120-360l120-120h200v-80H160v-240h280v-80h80v80h200l120 120-120 120H520v80h280v240H520v160h-80Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="sports">
      <path d="M440-200q-100 0-170-70t-70-170q0-11 1-22t3-22q-5 2-12 3t-12 1q-42 0-71-29t-29-71q0-42 27.5-71t69.5-29q33 0 59.5 18.5T274-614q33-30 75.5-48t90.5-18h440v160H680v80q0 100-70 170t-170 70ZM180-540q17 0 28.5-11.5T220-580q0-17-11.5-28.5T180-620q-17 0-28.5 11.5T140-580q0 17 11.5 28.5T180-540Zm260 180q33 0 56.5-23.5T520-440q0-33-23.5-56.5T440-520q-33 0-56.5 23.5T360-440q0 33 23.5 56.5T440-360Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="psychology">
      <path d="M440-360h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80H240Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="psychology_alt">
      <path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80H240Zm240-240q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm-30-128h61q0-25 6.5-40.5T544-526q18-20 35-40.5t17-53.5q0-42-32.5-71T483-720q-40 0-72.5 23T365-637l55 23q7-22 24.5-35.5T483-663q22 0 36.5 12t14.5 31q0 21-12.5 37.5T492-549q-20 21-31 42t-11 59Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="celebration">
      <path d="m80-80 200-560 360 360L80-80Zm502-378-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="cognition">
      <path d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80H240Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="eyeglasses">
      <path d="M274-360q31 0 55.5-18t34.5-47l15-46q16-48-8-88.5T302-600H161l19 157q5 35 31.5 59t62.5 24Zm412 0q36 0 62.5-24t31.5-59l19-157H659q-45 0-69 41t-8 89l14 45q10 29 34.5 47t55.5 18Zm-412 80q-66 0-115.5-43.5T101-433L80-600H40v-80h262q44 0 80.5 21.5T440-600h81q21-37 57.5-58.5T659-680h261v80h-40l-21 167q-8 66-57.5 109.5T686-280q-57 0-102.5-32.5T520-399l-15-45q-2-7-4-14.5t-4-21.5h-34q-2 12-4 19.5t-4 14.5l-15 46q-18 54-63.5 87T274-280Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="flag">
      <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="sports_score">
      <path d="M360-720h80v-80h-80v80Zm160 0v-80h80v80h-80ZM360-400v-80h80v80h-80Zm320-160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm160-320v-80h80v80h-80Zm-240 80v-80h80v80h-80ZM200-160v-640h80v80h80v80h-80v80h80v80h-80v320h-80Zm400-320v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="supervisor_account">
      <path d="M80-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q25 0 50 3.5t50 8.5v63q-45 22-72.5 58T400-213v53H80Zm400 0v-56q0-24 12.5-44.5T528-290q36-15 74.5-22.5T680-320q39 0 77.5 7.5T832-290q23 9 35.5 29.5T880-216v56H480Zm200-200q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="transfer_within_a_station">
      <path d="m120-40 112-564-72 28v136H80v-188l202-86q29-12 59-2.5t47 36.5l40 64q27 43 71.5 69.5T600-520v80q-66 0-123.5-27.5T380-540l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm260-700q-33 0-56.5-23.5T300-820q0-33 23.5-56.5T380-900q33 0 56.5 23.5T460-820q0 33-23.5 56.5T380-740ZM780-40l-42-42 28-28H560v-60h206l-28-28 42-42 100 100L780-40ZM660-210 560-310l100-100 42 42-28 28h206v60H674l28 28-42 42Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="escalator_warning">
      <path d="M260-720q-33 0-56.5-23.5T180-800q0-33 23.5-56.5T260-880q33 0 56.5 23.5T340-800q0 33-23.5 56.5T260-720Zm420 200q-25 0-42.5-17.5T620-580q0-25 17.5-42.5T680-640q25 0 42.5 17.5T740-580q0 25-17.5 42.5T680-520ZM180-80v-280h-60v-240q0-33 23.5-56.5T200-680h120q22 0 40 10.5t29 29.5l143 247 41-61q8-12 21.5-19t28.5-7h117q25 0 42.5 17.5T800-420v140h-40v200H600v-284l-31 44h-88L380-496v416H180Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="mountain_flag">
      <path d="m281-487 33-68q10-21 29.5-33t42.5-12h54v-280h280l-40 80 40 80H520v120h51q23 0 41.5 12t29.5 32l35 70-120 80-77-39-77 39-122-81ZM80-80l165-335 152 101 83-41 83 41 150-99L880-80H80Z"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="sports_martial_arts">
      <path d="m400-80-20-360-127-73-14 52 81 141-69 40-99-170 48-172 230-132-110-110 56-56 184 183-144 83 48 42 328-268 48 56-340 344-20 400h-80ZM200-680q-33 0-56.5-23.5T120-760q0-33 23.5-56.5T200-840q33 0 56.5 23.5T280-760q0 33-23.5 56.5T200-680Z"></path>
    </symbol>
  </svg>
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
/* 
@media(min-width: 900px){
  .accordion{
    flex-direction: row;
    height: 30rem;
  }
} */

.accordion-trigger{
  outline: 0;
  /* see focus:within */
}

.accordion-panel:focus-within{
  outline: 3px solid var(--color-gold);
}

.accordion-panel{
  position: relative;
  /* needs isolation, because in app there is a background set */
  isolation: isolate; 
  flex-basis: calc(var(--_panel-padding)*2 + var(--_button-size));
  overflow: hidden;
  padding: var(--_panel-padding);
  padding-right: calc(var(--_panel-padding)*4);
  border-radius: calc((var(--_panel-padding)*2 + var(--_button-size))/2);

  /* border: 3px solid orange; */
}

/* test in inspector: command shift p : search for reduced modition */
@media (prefers-reduced-motion: no-preference){
  .accordion-panel{
    transition: flex-basis 400ms, flex-grow 400ms;
  }
}

.accordion-panel:has([aria-expanded="true"]){
  flex-basis: clamp(15rem, 40vh, 20rem); 
  /* min, val, max 
  val is the preferred value if result is between min and max values */
  flex-grow: 1;
}

.accordion-title{
  color: var(--color-gold);
  font-size: 1.5em;
  text-transform: uppercase;

  position: relative;
/* prefents it from going behind with z-index in the media query below*/
  isolation: isolate; 
  display: grid;
  align-items: center;
}

/* @media(max-width: 900px){ */
  .accordion-title::after{
    content: "";
    position: absolute;
    /* top: 0; */
    left: calc((var(--_panel-gap) + var(--_button-size))*-1);

    width: calc(100% + (var(--_button-size))*2);
    height: var(--_button-size);
    background: hsl(var(--color-petrol-light-hsl),0.6);
    z-index: -1;
    border-radius: 100vw;
  }
/* } */

.accordion-content > p{
  color: var(--color-gold-light);
  /* font-size: 0.9em; */
  margin-left: calc(var(--_button-size) + var(--_panel-gap));
  transform: translateY(2rem);
  opacity: 0;
}
/* test in inspector: command shift p : search for reduced modition */
@media (prefers-reduced-motion: no-preference){
  .accordion-panel:has([aria-expanded="true"]) .accordion-content > p {
    transition: transform 400ms 400ms, opacity 400ms 400ms;

  }
}
.accordion-panel:has([aria-expanded="true"]) .accordion-content > p {
  transform: translateY(0);
  opacity: 1;
}

.accordion-image{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.5);
  /* transition: filter 400ms; */
}

.accordion-trigger{
  display: flex;
  align-items: center;
  gap: var(--_panel-gap);
  flex-direction: row-reverse;
  background: transparent;
  border: 0;
  padding: 0;
  /* border: 3px solid red; */
}

.accordion-icon{
  fill: var(--color-gold, pink);
  /* fill: var(--_panel-color); */
  background: hsl(var(--color-petrol-dark-hsl),0.80);
  width: var(--_button-size);
  aspect-ratio: 1/1;
  padding: var(--_panel-padding);
  border-radius: 50%;
  rotate: 0 deg;

  transition: rotate 400ms;
  z-index: 10;
}

.accordion-panel:has([aria-expanded="true"]) .accordion-icon {
  rotate: 360deg;

  transition: rotate 400ms;
}

</style>
