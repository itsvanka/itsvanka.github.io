<script setup>
import Photo from "@/components/svg/Photo.vue"
defineProps({
  imgSrc: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <div class="container-card">
    <img :src="imgSrc">
    <Photo />
    <div class="card-label">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container-card{
  position: relative;
  aspect-ratio: 1/1.05;
}
.container-card img{
  width: 100%;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 3.5%;
}
.card-label{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 6%;
  height: 20%;
  bottom: 0;
  width: 100%;
  padding-left: 8%;
  padding-right: 8%;
}
</style>