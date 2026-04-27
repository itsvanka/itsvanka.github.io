<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeMount  } from 'vue';
import Lightbulb from './Lightbulb.vue';

let loadingAnimation = ref(false);

const checkLoadingAnimation = ()=>{
  loadingAnimation.value = true;
  document.querySelector("body").className="loaded";
}

onBeforeMount(() => {
  let td = localStorage.getItem("data-theme");
  if (td){
    if(td=="dark"){
      document.querySelector('html').className="theme-dark no-transition"
    }else{
      document.querySelector('html').className="theme-light no-transition"
    }
  } else {
    const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMql && darkModeMql.matches) {
      localStorage.setItem("data-theme","dark");
      document.querySelector('html').className="theme-dark no-transition";
    }else{
      localStorage.setItem("data-theme","light");
      document.querySelector('html').className="theme-light no-transition";
    }
  }
});
</script>

<template>
  <div class="menu-wrapper">
    <div class="container-menu">
      <svg class="svg-menu-bg" viewBox="0 30 225 205">
        <path d="M 195.64257,64.2848 C 133.78358,57.753106 28.70315,61.426045 28.12383,74.274451 27.500842,88.091359 29.215274,89.870271 29.215274,89.870271 54.799337,77.97203 188.62768,77.665945 186.80557,95.790631 185.31429,110.62446 20.354624,76.822088 25.818526,126.91223 c 0.920112,8.4351 176.075504,-37.03958 174.050454,10.37386 -0.47372,11.09137 -178.115355,-22.97168 -174.43467,19.21087 1.80706,20.70983 161.15849,-25.14878 160.98705,13.06338 -0.0544,12.13238 -136.82383,-22.49122 -157.144879,14.60026 -8.09785,14.78079 154.509049,-20.21197 157.177299,11.36319 0.49386,5.84415 -158.263715,3.3638 -159.59776,21.11805 -0.543559,7.234 141.47935,2.73164 169.55501,2.09832" />
      </svg>
      <svg class="svg-menu-border" viewBox="22 105 140 140">
        <path @animationend="checkLoadingAnimation()" d="m 31.890038,247.43596 c -0.768435,-28.8163 -6.147477,-138.31824 -6.147477,-138.31824 47.730829,4.09744 114.992749,-3.73053 131.786549,-1.15265 0,0 0.22189,107.39762 3.07373,136.39715 0,0 -95.202691,-4.18533 -132.939192,0.38421" />
      </svg>
      <RouterLink class="router-button" to="/" active-class="selected-button">
        <svg class="svg-menu-text" viewBox="0 0 100 22">
          <text x="20" y="20">Home</text>
        </svg>
        <svg :class="`${loadingAnimation?'allow-animate':''} svg-selected`" viewBox="8 10 112 37">
          <path d="M 53.821569,16.858524 C 80.446468,16.179317 80.763817,16.334579 94.316285,17.792345 123.7306,20.956286 123.38736,39.07494 95.117336,42.396696 74.878892,44.774733 47.657703,44.951524 27.079912,41.037686 4.7058057,36.782192 5.1844064,20.702157 26.381617,16.315159 46.557847,12.139465 48.476676,12.824468 74.741134,12.511601" />
        </svg>
      </RouterLink>
      <RouterLink class="router-button" to="/about" active-class="selected-button">
        <svg class="svg-menu-text" viewBox="0 0 100 22">
          <text x="10" y="20">About</text>
        </svg>
        <svg :class="`${loadingAnimation?'allow-animate':''} svg-selected`" viewBox="8 10 112 37">
          <path d="M 53.821569,16.858524 C 80.446468,16.179317 80.763817,16.334579 94.316285,17.792345 123.7306,20.956286 123.38736,39.07494 95.117336,42.396696 74.878892,44.774733 47.657703,44.951524 27.079912,41.037686 4.7058057,36.782192 5.1844064,20.702157 26.381617,16.315159 46.557847,12.139465 48.476676,12.824468 74.741134,12.511601" />
        </svg>
      </RouterLink>
      <RouterLink class="router-button" to="/projects" active-class="selected-button">
        <svg class="svg-menu-text" viewBox="0 0 100 22">
          <text x="0" y="20">Projects</text>
        </svg>
        <svg :class="`${loadingAnimation?'allow-animate':''} svg-selected`" viewBox="8 10 112 37">
          <path d="M 53.821569,16.858524 C 80.446468,16.179317 80.763817,16.334579 94.316285,17.792345 123.7306,20.956286 123.38736,39.07494 95.117336,42.396696 74.878892,44.774733 47.657703,44.951524 27.079912,41.037686 4.7058057,36.782192 5.1844064,20.702157 26.381617,16.315159 46.557847,12.139465 48.476676,12.824468 74.741134,12.511601" />
        </svg>
      </RouterLink>
    </div>
    <div class="container-arrow">
      <svg class="svg-menu-text arrow-text" viewBox="0 0 50 22">
          <text x="0" y="20">menu</text>
        </svg>
      <svg class="svg-arrow" viewBox="0 0 40 40">
        <path d="M 34.5037,6.0449377 C 30.47028,16.26618 14.2478,26.881082 9.2372104,28.051235" />
        <path d="m 13.37126,19.460272 c 0,0 -2.3726,5.781509 -5.0940496,8.761766 4.8856596,1.010558 6.8100396,1.604025 10.7993896,3.599795" />
      </svg>
    </div>
    <Lightbulb />
  </div>


</template>

<style scoped>
.menu-wrapper{
  display: flex;
  max-width: 500px;
  margin: 0 auto 40px;
}

/* menu */
.container-menu{
  width:300px;
  height: 300px;
  position: relative;
  transform: rotate(-3deg);
  padding-left: 8%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 10px;
}

.router-button{
  position: relative;
  display: block;
  width: 100%;
  padding: 12px 0 14px 16px;
  height: 65px;
  margin-left: 12%;
}
.router-button:not(.selected-button):hover{
  padding: 11px 0 13px 12px;
}
.router-button.selected-button{
  pointer-events: none;
}

.svg-menu-bg{
  height: 100%;
  top: 10px;
  position:absolute;
  left: 0;
}
.svg-menu-bg path{
  fill: none;
  stroke-dasharray: 1726;
  stroke:var(--menu-bg-color);
  stroke-width: 30px;
  animation: 2s menuBgAnim linear;
  stroke-linecap:square;
}

@keyframes menuBgAnim {
  0%{
    stroke-dashoffset: 1726;
  }
  100%{
    stroke-dashoffset: 0;
  }
}

.svg-menu-border{
  height: 100%;
  padding-bottom: 15px;
  position:absolute;
  top:30px;
  left: 15px;
}
.svg-menu-border path{
  stroke-dasharray: 540;
  stroke-dashoffset: 540;
  fill: transparent;
  stroke: var(--text-color);
  animation: 3s menuBorderAnim forwards;
  animation-delay: 3s;
  stroke-width: 2px;
}
@keyframes menuBorderAnim {
  0%{
    stroke-dashoffset: 540;
  }
  100%{
    stroke-dashoffset: 0;
  }
}

.svg-menu-text{
  height: 100%;
}
.svg-menu-text text{
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  fill:none;
  stroke: var(--text-color);
  letter-spacing: 1.25px;
  font-size: 27px;
  stroke-width: 0.5px;
  animation: menuTextAnim 3s ease forwards;
  animation-delay: 2.5s;
  font-family: 'Scotch(FONT BY LYAJKA)';
}

@keyframes menuTextAnim {
  to {
    stroke-dashoffset: 0;
    fill: var(--text-color);
  }
}


.svg-selected{
  height: 75px;
  position:absolute;
  left: 0;
  top: 0;
  margin-left: -18px;
  margin-top: -8px;
}

.svg-selected path{
  stroke-dasharray: 255;
  stroke-dashoffset: 255;
  fill: transparent;
  stroke: var(--text-color);
  stroke-width: 2px;
}

.selected-button .svg-selected.allow-animate path{
  animation: 0.9s selectedAnim forwards;
}

@keyframes selectedAnim {
  0%{
    stroke-dashoffset: 255;
  }
  100%{
    stroke-dashoffset: 0;
  }
}

/* arrow */
.container-arrow{
  position: relative;
  width: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.svg-arrow{
  width: 100%;
}
.svg-arrow path{
  stroke-dasharray: 35;
  stroke-dashoffset: 35;
  fill: transparent;
  stroke: var(--text-color);
  stroke-width: 1px;
  animation: 1s arrowAnim forwards;
  animation-delay: 2s;
}
@keyframes arrowAnim {
  0%{
    stroke-dashoffset: 35;
  }
  100%{
    stroke-dashoffset: 0;
  }
}

.arrow-text{
  margin: 55px 0 -18px 87px;
  transform: rotate(5deg);
  width: 63%;
  height: auto;
}

/* media */
@media screen and (max-width: 734px) {
  .menu-wrapper{
    max-width: 400px;
    margin-bottom: 20px;
  }
  .container-menu{
    width:200px;
    height: 200px;
    padding-bottom: 0;
  }
  .router-button{
    height: 44px;
    padding: 10px 0 10px 15px;
  }
  .router-button:not(.selected-button):hover{
    padding: 9px 0 9px 15px;
  }
  .svg-menu-bg{
    top:15px;
  }
  .svg-selected{
    height: 51px;
    margin-left: -10px;
    margin-top: -2px;
  }

  .container-arrow{
    width: 100px;
  }
  .arrow-text{
    margin: 88px 0 -8px 54px;
  }
}

@media screen and (max-width: 480px) {
  .menu-wrapper{
    position: relative;
    width: 100%;
    padding-left: 15px;
    max-width: 375px;
  }
  .arrow-text{
    order: 2;
    margin-top:0;
  }
  .svg-arrow{
    order:1;
    transform: scale(1,-1);
    margin-top: 115px;
  }
}

</style>