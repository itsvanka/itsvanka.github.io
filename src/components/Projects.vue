<script setup>
import IconExternal from '@/components/svg/IconExternal.vue';
import projects from '@/assets/projects.json';
import Card from "@/components/Card.vue"

const getImageUrl = (name) => {
  return new URL(`../assets/projects/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="container-wrapper">
  <Card
  v-for="(project,i) in projects"
  :key="`card-${i}`"
  :imgSrc="getImageUrl(project.image)"
  :class="`project-card rotate-${i%3}`">
    <a :href="project.url" target="_blank">
      <span v-for="(line,j) in project.title" :key="`line-${j}`">{{line}}<IconExternal v-if="j==project.title.length-1" /></span> 
    </a>
  </Card>
 </div>
</template>

<style scoped>
.container-wrapper{
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  padding: 50px 30px 0;
}
.project-card{
  height: 420px;
  font-size: 26px;
  line-height: 1.2em;
}
.project-card a{
  text-decoration: none;
  color:var(--text-color);
}
.project-card a:hover,
.project-card a:hover span{
  text-decoration: underline;
}
.project-card span{
  display: block;
  white-space: nowrap;
}

.project-card span+span{
  padding-left: 12px;
}

.rotate-0{
  transform: rotate(-1deg);
  margin-left: -6px;
  margin-top: -6px;
}
.rotate-1{
  transform: rotate(2deg);
}
.rotate-2{
  transform: rotate(0deg);
  margin-left: 4px;
  margin-top: 4px;
}

/* media */
@media screen and (max-width: 920px) {
  .container-wrapper{
    gap:30px;
  }
  .project-card{
    height: 320px;
    font-size: 21px;
  }
}
@media screen and (max-width: 734px) {
   .container-wrapper{
    gap:25px;
  }
  .project-card{
    height: 280px;
    font-size: 18px;
  }
}

</style>