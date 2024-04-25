<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
   <footer>
        <div class="container row footer">
            <div class="footer--left"><p>Nicole Grieder<br>Nebenmattstr. 12<br>4431 Bennwil<br><a href="mailto: coaching@nicole-grieder.ch" target="_self" class="nav__link">coaching@nicole-grieder.ch</a></p></div>
            <div>
                <img src="./../assets/img/LogoTree.png" alt="LogoBaum">
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

 
</style>