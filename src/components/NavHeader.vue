<script setup>
import { RouterLink } from 'vue-router';
</script>

<script>

  export default {
    name: "navigation",
    data(){
      return {
        scrollNav: null,
        mobile: null, // makes a desicion if windowWith is mobile size
        mobileNav: null, // the apperence of the navigation for mobile (screensize) is set by this value
        windowWith: null, // stores the window size, when screensize changes
      };
    },
    created(){
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },
    mounted(){
      window.addEventListener('scroll',this.updateScroll);
    },
    methods: {
      toggleMobileNav(){
        this.mobileNav = !this.mobileNav;
      },

      updateScroll(){
        const scrollPosition = window.scrollY;
        if(scrollPosition > 50){
          this.scrollNav = true;
          return;
        }
        this.scrollNav = false;
      },
      checkScreen(){
        this.windowWith = window.innerWidth;
        if(this.windowWith <= 900){
          this.mobile = true;
          return;
        }
        this.mobile  = false;
        this.mobileNav = false;
      },
    },
  };
</script>

<template>
  <!-- shrink navigation at a certain scrollPoisition -->
<header :class="{ 'scrolled-nav': scrollNav }" > 
  <nav class="container">
      <transition name="fade">
        <div class="branding" v-show="!mobile || mobileNav" >
          <img src="./../assets/img/LogoTransparent (media).png" alt="Golden Logo on transparent background">
        </div>
      </transition>
      <transition name="fade" class="navigation" v-show="!mobile">
       <ul class="nav__list nav__list--primary">
        <li class="nav__item"><RouterLink class="nav__link" to="/">Home</RouterLink></li>
        <li class="nav__item"><RouterLink class="nav__link" to="/about">Über mich</RouterLink></li>
        <li class="nav__item"><RouterLink class="nav__link" to="/companyoffer">Firmen Angebot</RouterLink></li>
        <!-- <li class="nav__item"><RouterLink class="nav__link" to="/datenschutz">Datenschutz</RouterLink></li>
        <li class="nav__item"><RouterLink class="nav__link" to="/impressum">Impressum</RouterLink></li> -->
      </ul>
      <!-- <ul class="nav__list nav__list--secondary">
            <li class="nav__item"><a href="#" class="nav__link">Sign In</a></li>
            <li class="nav__item"><a href="#" class="nav__link nav__link--button">Sign up</a></li>
        </ul> -->
      </transition>
      <button class="nav-toggle" v-show="mobile" v-on:click="toggleMobileNav" :class="{ 'icon-active': mobileNav }">
      <!-- <button class="nav-toggle" aria-label="open navigation" v-on:click="toggleNavigation"> -->
        <span class="hamburger"></span>
      </button>
    
      <transition name="mobile-nav" v-on:click="toggleMobileNav">
        <ul class="dropdown-nav" v-show="mobileNav">
          
          <li class="nav__item"><RouterLink class="nav__link" to="/">Home</RouterLink></li>
          <li class="nav__item"><RouterLink class="nav__link" to="/about">Über mich</RouterLink></li>
          <li class="nav__item"><RouterLink class="nav__link" to="/companyoffer">Firmen Angebot</RouterLink></li>
          <!-- <li class="nav__item"><RouterLink class="nav__link" to="/datenschutz">Datenschutz</RouterLink></li>
          <li class="nav__item"><RouterLink class="nav__link" to="/impressum">Impressum</RouterLink></li> -->
        </ul>
      </transition>
    </nav>
  </header>
</template>


<style scoped>
header{
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: var(--color-petrol-dark);
  padding: 1em 0;
  /* text-align: center; */
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  /* color: white; */
  /* border: 2px solid pink; */
}

.icon-active{
  transform: rotate(180deg);
}

.branding{
  position: fixed;
  left: 0px;
  top: 10px;
  padding-left: 1em;
  z-index: 2;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 0.5s;
  transition-delay: 500ms;
}
.fade-leave-active{
  transition: opacity 0.5s;
}

.scrolled-nav{
  height: 80px;
  background-color: hsl(var(--color-petrol-dark-hsl),0.8);
  box-shadow: 0 4px 6px -1px rgbga(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}
.scrolled-nav nav{
  padding: 0.2em 0;
}

.scrolled-nav nav .branding img{
  /* width: 40px; */
  /* box-shadow: 0 4px 6px -1px rgbga(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); */
}

.navigation{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 3rem;
}

header nav {
  /* visibility: hidden; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  /* width: 100%; */
  /* background-color: hsl(var(--color-petrol-light-hsl) ,0.8); */
  
  transition: 0.5s ease all;
  /* border: 1px solid red; */
}
/* @media(min-width: 1280px){
  header nav {
    max-width: 1280px;
  }
} */

/* nav ul,a{
  color: var(--color-gold);
  list-style: none;
  text-decoration: none;
}

nav li{
  text-transform: uppercase;
}
nav a{
  transition: 0.5s ease all;
  border-bottom: 1px solid transparent;
}

.nav__item{
  margin-top: 0.25em;
}

.nav__list{
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 1rem;
}

@media (max-width: 900px) {
  .nav__list{
    justify-content: center;
  }
} */

.nav__list--secondary{
  /* margin: 0.75em 0; */
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: hsl(var(--color-petrol-light-hsl) ,0.8);
  padding-top: 110px;
  padding-left: 1.5em;
  top: 0;
  left: 0;
  z-index: 1;
  /* transition: 0.5s ease all; */
}

.dropdown-nav li{
  margin-left: 0;
}
.dropdown-nav li.a{
  color: black;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  /* starts transition 250px from the left */
  /* leavs transition to the left */
  transform: translateX(-250px); 
}
.mobile-nav-enter-to{
  /* end transition at 0  */
  transform: translateX(0); 
}

.nav-toggle {
  cursor: pointer;
  border: 0;
  width: 3em;
  height: 3em;
  padding: 0em;
  border-radius: 50%;
  background: hsl(var(--color-gold-hsl) ,0.8);
  color: white;
  /* transition: opacity 250ms ease; */
  transition: 0.5s ease all;
  
  /* border: 2px solid pink; */
  position: fixed;
  right: 2em;
  top: 1.5em;

  z-index: 2;
}

.nav-toggle:focus,
.nav-toggle:hover {
  opacity: .75;
}

.logo {
  visibility: visible;
  height: 30px;
  
  border: 2px solid pink;
}

.logo--visible{
  visibility: visible;
}

.hamburger {
  width: 50%;
  position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  display: block;
  margin: 0 auto;
  height: 3px;
  background: var(--color-petrol-dark);
}

.hamburger::before,
.hamburger::after {
  content: '';
  width: 100%;
}
.btn_hero{
  background: rgba(128, 128, 128, 0.577);
  border-radius: 12px;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0px;
  color: var(--color-white);
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before {
  transform: translateY(-6px);
}

.hamburger::after {
  transform: translateY(3px);
}



a:link, a:visited, a:hover, a:active{  /* use nav__link */}

/* .nav__link{
  color: var(--color-gold);
  text-decoration: none;
} */

a:hover, a:focus{
  opacity: 0.85;
  border-color: hsl(var(--color-gold-hsl),0.85);
  /* text-decoration-line: underline;
  text-decoration-color: hsl(var(--color-gold-hsl),0.85); 
  text-decoration-thickness: 1px; 
  text-underline-offset: 5px; */
} 

a.nav__link--button{
  background-color: var(--color-gold);
  color: var(--color-petrol-dark);
  padding: 0.2em 0.6em;
  border-radius: 30px;
  
  font-weight: 500;
}

a:hover.nav__link--button, a:focus.nav__link--button{
  opacity: 0.85;
  border-color: hsl(var(--color-petrol-dark-hsl),0.85);
}

.nav--visible {
  visibility: visible;
  height: auto;
  position: absolute;
  /* position: relative; */
  width: 100%;
  left: 0;
} 
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
