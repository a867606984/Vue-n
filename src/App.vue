<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  list-style: none;
}

body,
html {
  height: 100%;
}

.vhcenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vhbetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vbetween {
  display: flex;
  justify-content: space-between;
}

.vcenter {
  display: flex;
  align-items: center;
}

#app {
  position: fixed;
  top: 0;
  left: e("calc(50% - 250px)");
  width: 500px;
  height: 100%;
  padding-bottom: 150px;
  overflow-y: scroll;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  background: #ececec;
}

.receive {
  padding: 10px;

  .container {
    overflow: hidden;

    .header_pic {
      float: left;
      margin-right: 5px;
      display: block;
      width: 56px;
      height: 56px;
    }

    .chat_content {
      float: left;
      padding: 10px;
      width: 60%;
      border-radius: 5px;
      background: #2db7f5;
    }

    .text {
      word-break: break-all;
    }

    .content_img {
      img {
        display: block;
        text-align: left;
        width: 90%;
      }
    }

    .mixins {
      p {
        word-break: break-all;
      }

      img {
        display: block;
        // margin: 0 auto;
        text-align: left;
        width: 90%;
      }
    }
  }
}

.send {
  padding: 10px;

  .container {
    overflow: hidden;

    .header_pic {
      float: right;
      margin-left: 5px;
      display: block;
      width: 56px;
      height: 56px;
    }

    .chat_content {
      float: right;
      padding: 10px;
      width: 60%;
      border-radius: 5px;
      background: #fff;
    }

    .text {
      word-break: break-all;
    }

    .content_img {
      img {
        display: block;
        text-align: right;
        width: 90%;
      }
    }

    .mixins {
      p {
        word-break: break-all;
      }

      img {
        display: block;
        // margin: 0 auto;
        text-align: right;
        width: 90%;
      }
    }
  }
}

.bottom {
  position: fixed;
  bottom: 0;
  left: e("calc(50% - 250px)");
  width: 500px;
  height: 130px;
  border: 3px solid #e4e4e4;
  background: #fff;

  .func {
    padding: 0 30px;
    height: 30px;
    border: 2px solid #e4e4e4;

    ul {
      height: 100%;

      li {
        cursor: pointer;
        margin-right: 30px;

        img {
          display: block;
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  textarea {
    display: block;
    margin: 5px auto;
    width: 90%;
    height: 90px;
    resize: none;
  }
}
</style>
