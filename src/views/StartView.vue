<script setup>
</script>

<template>
  <section class="intro">
        <div class="container">
            <p class="intro__text">Willkommen auf</p>
            <!-- <h1 class="intro__title">Responsive layouts don’t<br>have to be a struggle</h1> -->
            <img src="./../assets/img/LogoTransparent_only.png" alt="Namens Logo Transparent" >
        </div>
    </section>

    <section class="section-two">
        <div class="container">
            <h1 class="section-title section-title--dark">News</h1>
            <div class="row">
                <div class="col">
                    <p>Die Seite ist im Aufbau. Bitte um noch etwas Geduld.</p>
                </div>
                <div class="col seperator_mobile">
                    <p></p>
                
                  <span><a class="link--button --dark" target="_top"><RouterLink to="/property">Rebgasse</RouterLink></a></span>
                
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped>
a.link--button{
  background-color: var(--color-gold);
  color: var(--color-petrol-dark);
  padding: 0.2em 0.6em;
  border-radius: 30px;
  
  font-weight: 500;
}

a:hover.link--button, a:focus.link--button{
  opacity: 0.85;
  border-color: hsl(var(--color-petrol-dark-hsl),0.85);
}

a.--dark{
  color: var(--color-gold-light);
  background-color: var(--color-petrol-dark);
}

/* Style the Image Used to Trigger the Modal */
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}
/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}
/* Add Animation - Zoom in the Modal */
.modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}

template{
  /* background-image: url(./img/landscapes/IMG_20231103_123835.jpg); */
}

  .intro__title{
    font-size: 3rem;
    color: var(--color-gold);
    padding: 0;
  }
  .intro{
    display: flex;
    align-items: center;
    background-color: var(--color-petrol-dark);
    padding: 6em 0 5em 0;
    text-align: center;
    min-height: 50vh;
    /* min-height: 80vh; like a teaser */
  }
  .intro__text{
    color: black;
    font-weight: 300;
    font-size: 1.1rem;
    letter-spacing: 1em;
    text-transform: uppercase;
    margin: 0 0 .25em;
    /* color: var(--color-gold); */
  }

  @media (min-width: 900px){
    .intro__title{
        font-size: 3.75rem;
    }
  }

  
  .salespoint{
    display: flex;
    align-items: center;
    gap: 1em;
    flex-direction: column;
  }

  .salespoint__card{
    min-width: 20%;
    border-radius: 15px;
    border: 0.1em solid var(--color-gray);
    box-shadow: 3px 3px 25px 5px rgba(0, 0, 0, .5);
    /* box-shadow: 3px 3px 25px 5px hsl(var(--color-gold-hsl)0.2); */
    background-color: var(--color-gold-light);
    padding: 0.5em;
  }
  .salespoint__card__title{
    font-weight: 900;
    text-align: center;
  }
  @media (min-width: 900px){
    .salespoint{
      flex-direction: row;
    }
  }

  .section-salespoints{
    background-color: hsl(var(--color-petrol-dark-hsl) ,0.6);
  }
  .section-three{
    background-color: var(--color-petrol-dark);
    color: var(--color-white);
  }
  .section-about{
    background-color: var(--color-gray);
    color: var(--color-white);
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
</style>