<script setup>
import myPhotoPath from "@/assets/my_photo.jpg"
import Card from "@/components/Card.vue"
</script>

<template>
  <div class="container-wrapper">
    <div class="contaner-text">
      <h4>Technical skills:</h4>
      <p>JavaScript (Vue.js, React, jQuery, Node.js, Electron.js), HTML5, CSS3 (Vuetify, Bootstrap), Regex, PHP, Python, MySQL, MongoDB, Git,&nbsp;SVN.</p>
    </div>
    <Card :imgSrc="myPhotoPath" class="container-photo">
      <p>Ivan Chernyshov</p>
    </Card>
  </div>
</template>

<style scoped>
.container-wrapper{
  flex-wrap: nowrap;
  justify-content: center;
  flex-direction: row;
  padding:40px 40px 0 40px;
  align-items: center;
}
.contaner-text{
  flex-grow: 1;
  font-size: 20px;
  margin: 0 35px;
}
.container-photo{
  height: 420px;
  flex-shrink: 0;
}
.container-photo p{
  font-size: 36px;
}
.contaner-text h4{
  font-weight: 600;
}

/* media */
@media screen and (max-width: 1000px) {
  .container-wrapper{
    flex-wrap: wrap;
    padding-top: 25px;
  }
  .contaner-text{
    margin: 0 0 25px 0;
  }
}
@media screen and (max-width: 734px) {
  .container-photo{
    height: 320px;
  }
  .container-photo p{
    font-size: 28px;
  }
  .contaner-text{
    font-size: 16px;
  }
}
@media screen and (max-width: 480px) {
  .container-wrapper{
    padding: 25px 30px 0;
  }
}
</style>