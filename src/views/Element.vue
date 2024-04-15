<template>
  <div>
    <el-container>
      <!--      侧边栏-->
      <el-aside style="width: 200px;height: 100vh;background-color: #001529">
        <!--        log-->
        <div class="log">log</div>
        <!--        菜单-->
        <!--        default-active="/"当前路由位置-->
        <el-menu router background-color="#001529" text-color="rgba(255, 255,255,0.65)" active-text-color="#fff" style="border: none" :default-active="$route.path">
          <el-menu-item index="/">
            <!--            index属性只在el-menu-item生效设置路由-->
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>系统首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/element">系统首页</el-menu-item>
          <el-menu-item>系统首页</el-menu-item>
          <el-menu-item>系统首页</el-menu-item>
          <!--          二级菜单-->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>系统首页</span>
            </template>
            <el-menu-item>用户信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>


      <el-container>
        <!--        头部区域-->
        <el-header>
          头部
        </el-header>
        <!--        主体区域-->
        <el-main>主体</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
<style>
.log{
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
