<template>
  <div>
    <div class="search">
      <div>
        <input type="text" placeholder="搜索职位标题或公司名" placeholder-class="phclass">
      </div>
    </div>
    <div class="filter">
      <span>实习</span>
      <span>职位偏好</span>
    </div>
    <div class="subscribe">
      <span>关注 [ 职象社区 ] ，最新职位 | 薪酬 | 面经</span>
      <span class="btn">关注</span>
    </div>
    <div
      class="listContainer"
      v-for="(item,index) in listDatas"
      :key="index"
      @tap="toJobDetail(index)"
    >
      <div class="logo">
        <img :src="item.logo" alt="logo">
      </div>
      <div class="info">
        <h2>{{item.title}}</h2>
        <h3>{{item.company}} [ {{item.basicInfo.base}} ]</h3>
        <div class="threecolumn">
          <p>{{item.basicInfo.workTiem}}</p>
          <p>{{item.basicInfo.balance}}</p>
          <p>{{item.updateDate}}分钟前</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const DATA_URL =
  "https://easy-mock.com/mock/5cedc8f4e9b7366ab3f1ef89/demo/joblist";

export default {
  data() {
    return {
      listDatas: []
    };
  },
  methods: {
    toJobDetail(index) {
      wx.navigateTo({
        url: "/pages/jobDetail/main?index=" + index
      });
    }
  },
  beforeMount() {
    // fly
    this.$fly
      .get(DATA_URL)
      .then(response => {
        console.log(response);
        let listDatas = response.data.data;
        listDatas = listDatas.sort((a, b) => a.updateDate - b.updateDate);
        console.log(listDatas);
        this.$store.dispatch("getListDatas", listDatas);
        this.listDatas = listDatas;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
/* 设置搜索容器背景 */
.search {
  background-color: #409eff;
  padding: 20rpx 30rpx;
}
.search div {
  background-color: #fff;
  padding-left: 50rpx;
}
.search input {
  background-color: #fff;
  height: 70rpx;
}
/* 设置搜索框placeholder样式 */
.phclass {
  color: #c9ccd2;
  font-size: 28rpx;
}
/* 设置实习 职位偏好 容器 */
.filter {
  border-bottom: solid 1rpx #eee;
  height: 100rpx;
  line-height: 100rpx;
  color: #409eff;
  font-size: 30rpx;
  font-weight: bold;
}
.filter span {
  border: solid 2rpx #409eff;
  margin-left: 30rpx;
  padding: 10rpx 25rpx;
}
/* 设置关注 */
.subscribe {
  height: 70rpx;
  line-height: 70rpx;
  font-size: 25rpx;
  color: #636569;
  border-bottom: solid 1rpx #eee;
  padding: 0 50rpx;
  box-shadow: 2rpx 2rpx 5rpx #888888;
}
.subscribe .btn {
  border: solid 2rpx #409eff;
  padding: 5rpx 10rpx;
  color: #409eff;
  font-size: 25rpx;
  margin-left: 140rpx;
}
.listContainer {
  background-color: #fbfbfb;
  padding: 30rpx;
}

.listContainer {
  display: flex;
  background-color: #fff;
  height: 200rpx;
  padding: 25rpx;
  box-sizing: border-box;
}
.logo img {
  height: 150rpx;
  width: 180rpx;
  margin-right: 20rpx;
}
.info h2 {
  font-weight: bold;
  font-size: 32rpx;
}
.info h3 {
  font-size: 28rpx;
  margin: 16rpx 0;
  color: #91949a;
}
.threecolumn {
  display: flex;
  font-size: 25rpx;
  color: #909399;
}
.threecolumn p:nth-child(2) {
  margin: 0 45rpx;
}
</style>