<script setup>
const toggleTheme = ()=>{
  if (document.querySelector('html').classList.contains("theme-dark")){
    localStorage.setItem("data-theme","light");
    document.querySelector('html').className="theme-light";
  } else {
    localStorage.setItem("data-theme","dark");
    document.querySelector('html').className="theme-dark";
  }
}
</script>

<template>
  <div class="container-theme">
    <button class="theme-switch" @click="toggleTheme()">
      <svg class="svg-theme-switch switch-wrapper" viewBox="0 0 80 100">
        <path class="switch-broder" d="M 19.468422,41.809231 C 11.805778,9.902353 60.383124,5.517637 58.490464,39.320889 c -0.36391,6.499527 -0.2998,10.063289 -0.34904,17.501647 C 57.933714,88.193875 20.851365,85.731775 20.1665,58.135548 19.751842,41.427004 19.468424,46.365417 19.817462,38.012411" />
      </svg>
      <svg class="svg-theme-switch" viewBox="0 0 80 100">
        <ellipse cx="38.466484" cy="35.379848" rx="18.169792" ry="17.785576" />
        <path class="lightbulb outer"
        d="m 29.763675,69.07623 c 0,-17.673997 0.768435,-16.521345 -4.22639,-21.51617 -2.497412,-2.497412 -3.861551,-4.746383 -4.62068,-7.000328 -0.759129,-2.253945 -0.913249,-4.512864 -0.990625,-7.030171 -0.07985,-2.59767 1.180255,-5.13304 2.445142,-7.403354 0.977718,-1.754881 2.249831,-3.43294 3.871478,-4.618604 2.647278,-1.935552 5.850215,-3.306212 9.101374,-3.735639 3.37143,-0.445312 7.17447,-0.150564 10.39186,0.950892 2.90946,0.996039 5.6671,2.696905 7.67503,5.026128 1.85019,2.146242 2.76164,5.078063 3.19228,7.878799 0.34517,2.244874 -0.009,4.584465 -0.54337,6.792066 -0.48435,2.002519 -1.28715,3.957075 -2.37722,5.705337 -0.78092,1.252448 -1.82435,2.339817 -2.92059,3.328112 -1.13377,1.022132 -3.73564,2.648905 -3.73564,2.648905 l -0.27168,10.731468 -16.572644,1.358413 0.815049,3.05643 7.335435,1.086731 4.89029,0.747128 -1.22258,-3.463954 5.70534,-0.271685 v 5.297813 l -9.98434,0.271682 -6.99583,-0.339603 4.14316,1.90178 1.08673,1.765939 4.14316,0.13584 3.05643,0.0679 0.88297,-2.309303"/>
        <path class="lightbulb inner"
        d="m 110.37109,83.678264 c -0.2264,-3.984678 -0.45281,-7.969358 -0.41884,-10.754122 0.034,-2.784763 0.32828,-4.369547 0.88297,-5.478926 0.5547,-1.109379 1.36973,-1.743291 2.23006,-2.014971 0.86034,-0.27168 1.76593,-0.181122 2.3659,0.226409 0.59997,0.407531 0.89429,1.132006 0.91692,1.913102 0.0226,0.781095 -0.2264,1.618764 -0.90561,2.264016 -0.67922,0.645253 -1.78857,1.098049 -3.0904,1.381053 -1.30183,0.283004 -2.79605,0.396202 -3.8375,0.192434 -1.04146,-0.203768 -1.6301,-0.724485 -2.20743,-1.845192 -0.57733,-1.120708 -1.14332,-2.841328 -1.42633,-4.09787 -0.283,-1.256541 -0.283,-2.048931 -0.0566,-2.501736 0.2264,-0.452806 0.6792,-0.566006 1.03012,-0.260356 0.35093,0.305651 0.59997,1.030125 0.69053,1.879141 0.0906,0.849017 0.0226,1.822529 -0.24905,2.886633 -0.27168,1.064103 -0.74712,2.21873 -1.35841,2.965861 -0.6113,0.74713 -1.35841,1.086725 -2.20743,1.075402 -0.84901,-0.01132 -1.79988,-0.373559 -2.51306,-0.973534 -0.71317,-0.599976 -1.188605,-1.437646 -1.426328,-2.026296 -0.237722,-0.588649 -0.237722,-0.928245 0.124529,-0.724475 0.362251,0.20377 1.086729,0.950884 1.641409,1.992345 0.55469,1.041462 0.93957,2.377209 1.29049,3.611113 0.35093,1.233904 0.66789,2.365893 0.82637,3.565837 0.15848,1.199945 0.15848,2.467772 0.1698,3.8262 0.0113,1.358427 0.034,2.807374 0.0566,4.256345"
        transform="translate(-67.827526,-27.938645)" />
        <path
        class="sun"
        d="m 86.25679,74.153944 c -1.600906,1.985124 -3.20181,3.970245 -4.802716,5.955369"
        transform="translate(-67.827526,-27.938645)" />
        <path
        class="sun"
        d="m 82.798834,62.819533 c -3.073738,0.448254 -6.147477,0.896507 -9.221216,1.344761"
        transform="translate(-67.827526,-27.938645)" />
        <path
        class="sun"
        d="M 90.67529,46.106079 C 88.946312,42.584086 87.217334,39.062096 85.488356,35.540103"
        transform="translate(-67.827526,-27.938645)" />
        <path
        class="sun"
        d="m 106.04398,40.727037 c 0,-2.625484 0,-5.250971 0,-7.876455"
        transform="translate(-67.827526,-27.938645)" />
        <path
        class="sun"
        d="m 123.33376,48.795601 c 2.8176,-2.817597 5.63519,-5.63519 8.45278,-8.452782"
        transform="translate(-67.827526,-27.938645)" />
        <path
        class="sun"
        d="m 126.59961,64.356403 c 2.88163,0.704398 5.76326,1.408797 8.64489,2.113195"
        transform="translate(-67.827526,-27.938645)" />
        <path
        class="sun"
        d="m 129.67335,82.70278 c -1.12064,-1.200682 -2.24127,-2.40136 -3.3619,-3.602037"
        transform="matrix(1.6601194,0,0,1.2444098,-151.16514,-47.231554)" />
      </svg>
    </button>
    <svg class="switch-text" viewBox="0 0 80 42">
      <text x="0" y="20" class="line-through"> Dark </text>
      <text x="0" y="40"> mode </text>
    </svg>
    
  </div>
</template>

<style scoped>
.switch-text{
  height: 100%;
  width: 75%;
  margin-left: 15%;
  margin-top: -5px;
}
.switch-text text{
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

.container-theme{
  width: 80px;
  position: absolute;
  right: 5px;
}

.theme-switch{
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1/1.25;
  background: transparent;
  border: none;
  position: relative;
  margin: 0;
  padding: 0;
  opacity: 0;
  animation: 2s showSwitch forwards;
  animation-delay: 2s;
}
@keyframes showSwitch {
  to{
    opacity: 1;
  }
}

.svg-theme-switch {
  width: 100%;
  position: absolute;
  top: 10px;
  left: 0;
}
.svg-theme-switch.switch-wrapper path{
  stroke-width: 3px;
}
.theme-switch:hover path.sun{
  stroke-width: 4.5px;
}
.svg-theme-switch path {  
  fill: none;
  stroke-width: 2px;
}
.svg-theme-switch ellipse{
  stroke-width: 2px;
  stroke:var(--text-color);
  fill:var(--lightbulb-color);
}

.svg-theme-switch .sun{
  stroke-width: 2.5px;
  stroke:var(--lightbulb-color);
  fill: none;
}

.switch-broder{
  stroke-width: 2px;
  stroke: var(--text-color);
  fill: none;
}
.lightbulb{
  fill:none;
  stroke: var(--text-color);
  stroke-width: 2px;
}

.lightbulb.outer{
  stroke-dasharray: 204;
}

.lightbulb.inner{
  stroke-dasharray: 81;
}

.theme-dark .lightbulb.outer{
  stroke-dashoffset: 204;
  animation: 2s turnOnAnim forwards;
}
.theme-dark .lightbulb.inner{
  stroke-dashoffset: 81;
  animation: 2s turnOnAnim forwards;
}
@keyframes turnOnAnim {
  to{
    stroke-dashoffset: 0;
  }
}

.theme-light .lightbulb.outer{
  stroke-dashoffset: 0;
  animation: 2s turnOffAnim1 forwards;
}
.theme-light .lightbulb.inner{
  stroke-dashoffset: 0;
  animation: 2s turnOffAnim2 forwards;
}
@keyframes turnOffAnim1 {
  to{
    stroke-dashoffset: 204;
  }
}
@keyframes turnOffAnim2 {
  to{
    stroke-dashoffset: 81;
  }
}

.theme-light .line-through{
  text-decoration: line-through;
}

/* media */
@media screen and (max-width: 734px) {
  .container-theme{
    width: 65px;
  }
}

</style>