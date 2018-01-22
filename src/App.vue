<template>
  <div id="app">
    <div>
      <ul>
        <v-touch tag='li' :key='item.id' v-for="item of tabNav" @tap="routerGo(item.url)" :class="{cur:item.title==$route.name}">{{item.title}}</v-touch>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      tabNav: [
        {
          title: "精選",
          url: "/jingxuan"
        },
        {
          title: "視頻",
          url: "/shipin"
        },
        {
          title: "段子",
          url: "/duanzi"
        },
        {
          title: "發現",
          url: "/faxian"
        }
      ]
    };
  },
  methods: {
    routerGo(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>

<style scoped lang='stylus'>
#app {
  ul {
    background-color #ffb000
    width: 100%;
    list-style: none;
    overflow: hidden;

    li {
      width: 25%;
      float: left;
      height: 50px;
      line-height: 50px;
      text-align: center;

      &.cur {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>
