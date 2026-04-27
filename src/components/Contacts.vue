<script setup>
import IconExternal from '@/components/svg/IconExternal.vue';
</script>

<template>
  <div class="container-contacts">
    <svg class="svg-contacts" viewBox="22 105 140 140">
        <path d="m 31.890038,247.43596 c -0.768435,-28.8163 -6.147477,-138.31824 -6.147477,-138.31824 47.730829,4.09744 114.992749,-3.73053 131.786549,-1.15265 0,0 0.22189,107.39762 3.07373,136.39715 0,0 -95.202691,-4.18533 -132.939192,0.38421" />
      </svg>
    <span class="contacts-text title">Contacts:</span>
    <span class="contacts-text link">-<a href="https://github.com/itsvanka" target="_blank">GitHub<IconExternal /></a></span>
    <span class="contacts-text link">-<a href="https://linkedin.com/in/ivan-ch/" target="_blank">LinkedIn<IconExternal /></a></span>
  </div>
</template>

<style scoped>
.container-contacts{
  width: 270px;
  height: 270px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  transform: rotate(3deg);
}
.svg-contacts{
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.svg-contacts path{
  fill: var(--contacts-bg-color);
  stroke: var(--text-color);
  stroke-width: 2px;
}

.contacts-text{
  position: relative;
  z-index: 10;
  font-weight: 600;
  color:var(--text-color);
  white-space: nowrap;
}
.contacts-text.title{
  text-decoration: underline;
  margin-top: 20px;
  text-align: center;
  transform: rotate(-2deg);
  font-size: 45px;
  letter-spacing: 0.04em;
}
.contacts-text.link{
  margin-left: 30px;
  font-size: 40px;
}
.contacts-text.link a{
  color: var(--text-color);
  text-decoration: none;
  margin-left: 7px;
}
.contacts-text.link a:hover{
  text-decoration: underline;
}

/* media */
@media screen and (max-width: 734px) {
  .container-contacts{
    width: 170px;
    height: 170px;
  }
  .contacts-text.title{
    font-size: 29px;
    margin-top:13px;
  }
  .contacts-text.link{
    font-size: 24px;
    margin-left: 17px;
  }
}
</style>