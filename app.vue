<script setup lang="ts">
const version = 2 + 1
</script>

<template>
  <section class="section_container gap">
    <div class="default section_layout">
      <div class="rowLayout">
        <div class="header"></div>

        <div class="content gap">
          <div>
            <h1>Hallo lieber Mensch!</h1>
            <p>Willkommen auf meiner noch sehr spaerlichen Website, schoen hast du mich gefunden. Wie du moeglicherweise schon erkennst, ist die Seite noch im Aufbau.</p>
            <p>Bitte nimm aber gerne mit mir kontakt auf: <a href="mailto: coaching@nicole-grieder.ch" target="_self"> coaching@nicole-grieder.ch</a></p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="hello">
      Hello Nuxt {{ version }}!
    </div> -->
  </section>
</template>

<style scoped>
.header{
  width: 100%;
  height: 200px;
  background-image: url("assets/img/LogoTransparent.png");
  background-repeat: no-repeat;
  background-position: center;
  /* background-color: var(--color-primary); */
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

</style>