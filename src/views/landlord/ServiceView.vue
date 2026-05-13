<script defer>
  import FlatsList from './FlatsList.vue';
</script>

<script setup>
//   import { ref, onMounted } from 'vue';
</script>

<template>
  <section class="hero">
      <div class="container">
          <h1 class="hero__title">Dienstleistungen</h1>
          <p class="hero__text">Willst du, dass es perfekt gemacht wird - mach es selbst. Willst du, dass viel gemacht wird - lerne zu delegieren.</p>
      </div>
  </section>
   <section class="section-products">
    <div class="container row">
        <div class="col seperator_mobile text--light">
            <h1 class="section-title section-title--dark">Was biete ich persönlich?</h1>
            
            <div>
              <h2>Immobilienbewirtschaftung</h2>
              <p>Sehr gerne mache ich die Bewirtschaftung von Mehrfamilienhäusern die im Umkreis von Liestal liegen.</p>
              <p>Die Art der Bewirtschaftung ist sehr persönlich. Daher versuche ich passende Bewerberinnen und Bewerber zu finden, die sowohl zu den bestehenden Mieterinnen und Mieter passen, aber auch mit helfen die Immobilie gepflegt und schön zu halten. </p>
              <p>Mieterinnen und Mieter sind immer willkommen in Kontakt mit mir zutreten. Sie können mich telefonisch, per Mail aber auch über Whatsapp erreichen. </p>
              <p>In regelmässigen Intervallen besuche ich die Liegenschaften, um sicher zugehen, dass alles in Ordnung ist, aber auch um den Kontakt zu halten, denn zufriedene Mieter bleiben lange.</p>
              <p>Einmal im Jahr mache ich die Betriebs- und Nebenkostenabrechnung für Mieterinnen und Mieter und eine Bilanz für Inhaberinnen und Inhaber.</p>
            </div>
        </div>
    </div>
  </section>
   <section class="section-products-light">
    <div class="container row">
        <div class="col seperator_mobile ">
            <h1 class="section-title section-title--dark">Was biete ich technisch?</h1>         
            <div>
              <h2  class=" section-title--dark">Bewirtschaftungstool und Anpassungen</h2>
              <p>Da ich mir für meine Liegenschaften ein passendes Tool zur Bewirtschaftung zusammen gestellt habe (mit Notion), dass untenstehende Feautres bereits beinhaltet, biete ich dieses Toolset auch gerne anderen Bewirtschafterinnen und Bewirtschafter an. Dabei biete ich auch gerne Anpassungen/Erweitern an.</p>
                <ul class="inside">
                  <li>Registrieren der Wohneinheiten</li>
                  <li>zuweisen der Mietern zu den Wohneinheiten</li>
                  <li>Inventarisierung der Haushaltsgeräte der Wohneinheiten</li>
                  <li>Schlüsselvergabeübersicht der Mieter</li>
                  <li>Übersicht des Leerstandes</li>
                  <li>Übersicht der auslaufenden Mietverträge</li>
                  <li>ToDoes/Tasks die sowohl mit Mietern, aber auch mit Wohneinheiten verbunden werden können</li>
                </ul>
              <p>Sehr gerne benutze ich auch die Export Funktion, um den Inhabern eine Übersicht der Wohnungen, deren Mietzins, Nebenkosten etc. zu verschaffen oder eine Übersicht der aktuellen Mieterinnen und Mietern zu geben.</p>
              <div>
               <h2 class=" section-title--dark">Bewirtschaftungstool mit Nebekostenabrechnungssystem</h2>
                  <p>
                    Aktuell verbessere ich das Bewirtschaftungstool und benutze dafür als Grundlage Angular und REST. Diese Technologie lässt es einfacher zu, mit Mitarbeitern an gleichen System zu arbeiten. 
                    Auch ist es notwenig, um in einem späteren Schritt, buchhalterische Berechnungen durchzuführen, die final die Nebenkostenabrechnungen deutlich vereinfachen sollen.
                    Es soll später auch Auswertungen und Reports anzeigen und diese in diversen Formen exportieren können.
                  </p>
                  <p> 
                    Ich hoffe sie sind neugierig? Sobald es was halbwegs "schönes" zu zeigen gibt, werden ich dies hier tun. 
                  </p>
              </div>
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

.section-products{
  /* max-width: 50rem; */
  /* margin-inline: auto; */
  background-color: var(--color-gray);
  /* padding-inline: 1rem; */
}
.section-products-light{
  /* max-width: 50rem; */
  /* margin-inline: auto; */
  background-color: var(--color-gray-light);
  /* padding-inline: 1rem; */
}

</style>