<template>
  <div class="detailContainer">
    <div class="logo">
      <img :src="jobDetail.logo" alt="logo">
      <h2>{{jobDetail.title}}</h2>
      <p>{{jobDetail.company}} [ {{jobDetail.basicInfo.base}} ]</p>
      <p>2019-05-28</p>
    </div>
    <div class="bisicInfo">
      <header>
        <span class="block"></span>
        <h3>基本信息</h3>
      </header>
      <p>
        <span>截止</span>
        <span>{{jobDetail.basicInfo.due}}</span>
        <span>城市</span>
        <span>{{jobDetail.basicInfo.base}}</span>
      </p>
      <p>
        <span>时间</span>
        <span>{{jobDetail.basicInfo.workTiem}}</span>
        <span>薪资</span>
        <span>{{jobDetail.basicInfo.balance}}</span>
      </p>
      <p>
        <span>实习日期</span>
        <span>尽快入职，时长待定</span>
      </p>
      <p>
        <span>投递方式</span>
        <span>{{jobDetail.basicInfo.submit}}</span>
      </p>
      <p>
        <span>来源</span>
        <span>{{jobDetail.basicInfo.source}}</span>
      </p>
    </div>

    <div class="jd">
      <header>
        <span class="block"></span>
        <h3>职位描述</h3>
      </header>
      <p>工作职责：</p>
      <ol>
        <li
          v-for="(item,index) in jobDetail.jd.responsibilities"
          :key="index"
        >{{index + 1}}.{{item}}</li>
      </ol>
      <p>任职资格：</p>
      <ol>
        <li
          v-for="(item,index) in jobDetail.jd.qualification"
          :key="index"
        >{{index + 1}}.{{item}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      jobDetail: {}
    };
  },
  computed: {
    ...mapState(["listDatas"])
  },
  beforeMount() {
    console.log(this);
    this.jobDetail = this.listDatas[this.$mp.query.index];
    console.log(this.jobDetail);
  }
};
</script>

<style>
.detailContainer {
  background-color: #fbfbfb;
  padding: 18rpx;
}
.detailContainer .logo {
  background-color: #fff;
  height: 400rpx;
  padding: 80rpx 210rpx;
}
.logo {
  text-align: center;
}
.logo img {
  width: 300rpx;
  height: 200rpx;
}
.logo h2 {
  font-weight: bold;
  font-size: 40rpx;
  margin: 30rpx 0;
}
.logo p {
  font-size: 28rpx;
  color: #9a9da2;
  margin: 10rpx;
}

/* 基本信息 */
.detailContainer .bisicInfo {
  background-color: #fff;
  margin-top: 18rpx;
}
.bisicInfo header {
  height: 60rpx;
  line-height: 60rpx;
  display: flex;
  padding: 15rpx 0;
  box-sizing: content-box;
}
.bisicInfo header h3 {
  margin-left: 20rpx;
}
.bisicInfo .block {
  background-color: #409eff;
  display: inline-block;
  width: 10rpx;
  height: 100%;
}
.bisicInfo p {
  border: solid 1rpx #eee;
  height: 60rpx;
}

.bisicInfo p span {
  margin-right: 20rpx;
  font-size: 30rpx;
}
.bisicInfo p span:nth-of-type(even) {
  font-weight: bold;
}
.bisicInfo p span:nth-of-type(odd) {
  color: #d4d5d7;
}

/* 职位描述 */
.jd {
  background-color: #fff;
  margin-top: 18rpx;
}
.jd header {
  height: 60rpx;
  line-height: 60rpx;
  display: flex;
  padding: 15rpx 0;
  box-sizing: content-box;
}
.jd header h3 {
  margin-left: 20rpx;
}
.jd .block {
  background-color: #409eff;
  display: inline-block;
  width: 10rpx;
  height: 100%;
}
.jd ol {
  margin-bottom: 50rpx;
}
</style>