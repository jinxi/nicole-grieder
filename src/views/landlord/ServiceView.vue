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
            <h1 class="section-title section-title--dark">Was biete ich an?</h1>
            <h2>Immobilienbewirtschaftung</h2>
            <p>Sehr gerne mache ich die Bewirtschaftung von Mehrfamilienhäusern die im 10km-Umkreis von Liestal liegen.</p>
            <p>Die Art der Bewirtschaftung ist sehr persönlich. Daher versuche ich passende Bewerberinnen und Bewerber zu finden, die sowohl zu den bestehenden Mieterinnen und Mieter passen, aber auch mit helfen die Immobilie gepflegt und schön zu halten. </p>
            <p>Mieterinnen und Mieter sind immer willkommen in Kontakt mit mir zutreten. Sie können mich telefonisch, per Mail aber auch über Whatsapp erreichen. </p>
            <p>In regelmässigen Intervallen besuche ich die Liegenschaften, um sicher zugehen, dass alles in Ordnung ist, aber auch um den Kontakt zu halten, denn zufriedene Mieter bleiben lange.</p>
            
            <h2>Bewirtschaftungstool und Anpassungen</h2>
            <p>Da ich mir für meine Liegenschaften ein passendes Tool zur Bewirtschaftung zusammen gestellt habe (mit Notion), dass untenstehende Feautres bereits beinhaltet, biete ich dieses Toolset auch gerne anderen Bewirtschafterinnen und Bewirtschafter. Dabei biete ich auch gerne Anpassungen/Erweitern an.</p>
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

</style>