<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"/>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'vant',
  data() {
    return {
      activeKey: 0,
      list: [],
      error: false,
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
}
</script>
