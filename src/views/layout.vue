<template>
  <el-container style="position: absolute;left: 0;top: 0;bottom: 0;right: 0; overflow: hidden;">
    <el-header class="d-flex align-items-center" style="background: #545c64;">
      <a class="h5 text-light mb-0 mr-auto">
        {{$conf.logo}}
      </a>
    </el-header>
    <el-container style="height: 100%;padding-bottom: 60px;">
      <!-- 侧边布局 -->
      <el-aside width="200px">
        <li v-for="i in 100" :key="i">{{i}}</li>
      </el-aside>
      <!-- 主布局 -->
      <el-main class="bg-light" style="padding-bottom: 60px;position: relative;">

      </el-main>
    </el-container>
  </el-container>
  <!-- <router-view></router-view> -->
</template>

<script>
export default {
  
}
</script>

<style>

</style>