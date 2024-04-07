<!-- <head>
  <link rel="stylesheet" type="text/css" href="assets/css/reset.css">
  <link rel="stylesheet" type="text/css" href="assets/css/main.css">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
  <script src="assets/js/app.js" defer></script>
</head> -->
<template id="app">
  <main class="main">
        <section class="intro">
            <div class="container">
                <p class="intro__text">Willkommen auf</p>
                <!-- <h1 class="intro__title">Responsive layouts don’t<br>have to be a struggle</h1> -->
                <img src="assets/img/LogoTransparent.png" alt="Namens Logo Transparent" >
            </div>
        </section>

        <section class="section-two">
            <div class="container">
                <h2 class="section-title section-title--dark">News</h2>
                <div class="row">
                    <div class="col">
                        <p>Lieber Mensch, vielen Dank für deine Zeit und dein Interesse, einen Blick auf meine Webseite zu werfen. Bitte sei noch etwas geduldig, sie ist noch im Aufbau. 
                            Ich bin noch mit der finalen Programmierung beschäftigt, mute dir nun aber dennoch die ersten Inhalte zu.</p>
                    </div>
                    <div class="col">
                        <p>Mittlerweilen sind die verschieden Formate des Coachings ersichtlich, sowie ein kleiner Beschreib von mir.</p>
                        <!-- <button></button> -->
                    </div>
                </div>
            </div>
        </section>

        <section class="section-salespoints">
            <div class="container">
                <h2 class="section-title section-title--dark">Coaching Formate</h2>
                <p class="section-paragraph--dark">Unterschiedliche Coaching Formate für unterschiedliche Bedürfnisse:</p>
                <div class="salespoint row">
                    <div class="salespoint__card">
                        <h2 class="salespoint__card__title">Laser-Coaching</h2>
                        <p>Ein Laser Coaching eignet sich für:
                            <ul>
                                <li>Personen die sehr wenig Zeit haben</li>
                                <li>akute Fälle (z.B. Streit)</li>
                                <li>klar umrissene Probleme (z.B. Gespräch mit Chef)</li>
                            </ul>  
                        </p>
                    </div>
                    <div class="salespoint__card">
                        <h2 class="salespoint__card__title">Kompakt-Coaching</h2>
                        <p>Für umfangreichere Themen, empfehle ich das Kompakt-Coaching. Es eignet sich beim Problemen, die mehr als eine Session brauchen. Und haben einen durchschnittlichen Umfang von 2-5 Sessions.
                            Themen können unteranderem folgende sein:
                            <ul>
                                <li>Partnerschaftskrisen</li>
                                <li>Lebenskrisen/Weggabelungen</li>
                                <li>berufliche Klärungsprozesse</li>
                                <li>Themen mit Kindern und Jugendlichen</li>
                            </ul>
                        </p>
                    </div>
                    <div class="salespoint__card">
                        <h2 class="salespoint__card__title">Coaching-Pakete</h2>
                        <p>Coaching-Pakete sind vorbereitete Coachingprozesse zu speziellen Lebensthemen. Sie beinhalten eine feste Anzahl von Sessions und haben eine klare Struktur, die auf sie angepasst wird.
                            Beispiele für Lebensbereiche sind:
                            <ul>
                                <li>Selbstwert & Selbstliebe</li>
                                <li>Flow & Work-Life Balance</li>
                                <li>Berufung & Arbeit</li>
                                <li>Integrale Lebenspraxis</li>
                                <li>Partnerschaft & Liebe</li>
                            </ul>
                        </p>
                    </div>
                    <div class="salespoint__card">
                        <h2 class="salespoint__card__title">Begleitung</h2>
                        <p>Bei der Begleitung erhalten sie Coachings über einen vertraglich geregelten Zeitraum. Ich bin sowohl in der Session, aber auch auf Abruf verfügbar.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-four">
            <div class="container row">
                <div class="col">
                    <img src="assets/img/profil/PAT_2027_websize.jpg" alt="Profilbild">
                    <!-- <img src="../img/profil/PAT_2027_websize.jpg" alt="Profilbild"> -->
                </div>
                <div class="col">
                    <h2 class="section-title">Über mich</h2>
                    <p>Ich bin Nicole Grieder ein lebensfroher und bunter Mensch, mit vielen Interessen und Fähigkeiten. 
                        Sehr gerne beschäftige ich mich mit Problemen, denn mein Ziel ist es den Menschen zu helfen ihr Glück in jedem Moment zu erkennen und ihre Zeit für die relevanten Dinge in ihrem Leben zu nutzen.</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container row footer">
            <div class="footer--left"><p>Nicole Grieder<br>Nebenmattstr. 12<br>4431 Bennwil<br><a href="mailto: coaching@nicole-grieder.ch" target="_self" class="nav__link">coaching@nicole-grieder.ch</a></p></div>
            <div>
                <img src="assets/img/LogoTree.png" alt="LogoBaum">
            </div>
            <div class="footer--right">
                <ul class="nav__list">
                    <li>
                        <a href="#" class="nav__link">Datenschutz</a>
                    </li>
                    <li>
                        <a href="#" class="nav__link">Impressum</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.header{
  width: 100%;
  height: 160px;
  background-size: contain ;    
  background-image: url("assets/img/LogoTransparent.png");
  background-repeat: no-repeat;
  background-position: center;
}
.content{
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

}
/* .hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
} */
div{
  /* border: 1px solid black; */
}

/* @media (max-width: 1000px) {
  .header{
  width: 212px;
  height: 53px;
  background-image: url("assets/img/LogoTransparent (media).png");
  background-repeat: no-repeat;
  background-position: center;
} 
}*/
</style>