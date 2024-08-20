<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <footer>
        <div class="container row footer">
            <div class="footer--left"><p>Nicole Grieder<br>Nebenmattstr. 12<br>4431 Bennwil<br><a href="mailto: office@nicole-grieder.ch" target="_self" class="nav__link">office@nicole-grieder.ch</a></p></div>
            <div class="footer--center">
                <img src="./../assets/img/LogoTree.png" alt="LogoBaum">
            </div>
            <div class="footer--right">
                <ul class="nav__list">
                    <li class="nav__item"><RouterLink class="nav__link" to="/datenschutz">Datenschutz</RouterLink></li>
                    <li class="nav__item"><RouterLink class="nav__link" to="/impressum">Impressum</RouterLink></li>
                </ul>
            </div>
        </div>
    </footer>
</template>


<style scoped>
footer{
  background: var(--color-petrol-dark);
  padding: 1em 0;
  text-align: center;
}

footer{
  color: var(--color-gold-light);
}

@media (min-width: 900px){
  .footer{
    align-items: center;
    justify-content: space-between;
  }
  .footer--left{
    text-align: left;
  }
  .footer--right{
    text-align: right;
  }
}
@media (max-width: 901px){

  .footer--center{
    text-align: center;

    display: inline-flex;
    align-items: center;
  }
}

</style>