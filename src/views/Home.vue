<template>
  <div class="home">
    
    <!-- 接收 -->
    <div class="receive">
      <div class="container">
        <img class="header_pic" src="../assets/headPic.png" alt="">
        <div class="chat_content">
          <div v-if="false" class="text">
            <p>
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </p>
          </div>

          <div v-if="false" class="content_img">
            <img src="../assets/1.jpg" alt="">
          </div>

          <div class="mixins">
            <p>
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </p>
            <img src="../assets/1.jpg" alt="">
          </div>
        </div>
      </div>

      
    </div>

    <!-- 发送 -->
    <div class="send">
      <div class="container">
        <img class="header_pic" src="../assets/headPic.png" alt="">
        <div class="chat_content">
          <div v-if="false" class="text">
            <p>
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </p>
          </div>

          <div v-if="false" class="content_img">
            <img src="../assets/1.jpg" alt="">
          </div>

          <div class="mixins">
            <p>
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </p>
            <img src="../assets/1.jpg" alt="">
          </div>
        </div>
      </div>
    </div>

    <!--输入框 -->
    <div class="bottom">
      <div class="func">
        <ul class="vcenter">
          <li>
            <img class="updata" src="../assets/picUpdata.png" alt="">
          </li>
          <li>
            <img class="comment" src="../assets/pingjia.png" alt="">
          </li>
        </ul>
      </div>
      <textarea></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>
