<template>
  <div>
    <el-container>
<!--      侧边栏-->
      <el-aside :width="asideWidth" style="height: 100vh;background-color: #001529">
<!--        log-->
        <div class="log">
          <img src="@/assets/log.png" alt="" style="width: 40px;height: 40px;border-radius: 50px">
          <span class="logo-title" v-show="!isCollapse">彤云</span>
        </div>
<!--        菜单-->
<!--        default-active="/"当前路由位置-->
<!--        :collapse-transition="false"动画效果-->
        <el-menu :collapse="isCollapse" :collapse-transition="false"  router background-color="#001529" text-color="rgba(255,255,255,0.65)" active-text-color="#fff" style="border: none" :default-active="$route.path">
          <el-menu-item index="/">
<!--            index属性只在el-menu-item生效设置路由-->
              <i class="el-icon-house"></i>
              <span slot="title">系统首页</span>
          </el-menu-item>
          <el-menu-item index="/1">
            <!--            index属性只在el-menu-item生效设置路由-->
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>系统首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/2">
            <!--            index属性只在el-menu-item生效设置路由-->
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>系统首页</span>
            </template>
          </el-menu-item>
<!--          二级菜单-->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>系统首页</span>
            </template>
            <el-menu-item>用户信息</el-menu-item>
            <el-menu-item>管理员信息</el-menu-item>
            <el-menu-item index="/">系统首页</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>


      <el-container>
<!--        头部区域-->
        <el-header>
          <i :class="CollapseIcon" style="font-size: 26px" @click="handleCollapse"></i>
<!--          面包屑-->
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px">
            <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/user'}">用户管理</el-breadcrumb-item>
          </el-breadcrumb>
<!--          用户头像登录功能等-->
          <div style="flex: 1;width: 0;display: flex;align-items: center;justify-content: flex-end">
            <i class="el-icon-quanping" style="font-size: 26px" @click="handleFull"></i>
            <el-dropdown placement="bottom">
              <div style="display: flex;align-items: center;cursor: default">
                <img src="@/assets/log.png" alt="" style="width: 40px;height: 40px;margin: 0 5px">
                <span>管理员</span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
<!--        主体区域-->
        <el-main>主体</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return{
      isCollapse:false,
      asideWidth:'200px',
      CollapseIcon:'el-icon-s-fold'
    }
  },
  methods:{
    handleCollapse(){
      this.isCollapse = !this.isCollapse;
      // 2选一
      // this.asideWidth = this.isCollapse ? '64px':'200px'
      if(this.isCollapse){
        this.asideWidth = '64px'
      }else{
        this.asideWidth = '200px'
      }
      this.CollapseIcon = this.isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'
    },
    handleFull(){
      document.documentElement.requestFullscreen()
    }
  }
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
.el-menu--inline{
  background-color: #000c17 !important;
}
.el-menu--inline .el-menu-item {
  background-color: #000c17 !important;
  padding-left: 49px !important;
}
.el-menu-item:hover, .el-submenu__title:hover{
  color: #fff !important;
}
.el-submenu__title:hover i {
  color: #fff !important;
}
.el-menu-item.is-active {
  background-color: #1890ff !important;
  border-radius: 10px !important;
  width: calc(100% - 8px);
  margin-left: 4px;
}
.el-menu-item.is-active i , .el-menu-item.is-active .el-tooltip{
  margin-left: -4px;
}
.el-menu-item{
  height: 40px !important;
  line-height: 40px !important;

}
.el-submenu__title{
  height: 40px !important;
  line-height: 40px !important;
}
.el-submenu__icon-arrow{
  margin-top: -3px !important;
}
.el-submenu .el-menu-item{
  min-width: 0 !important;
}
.el-menu--inline .el-menu-item.is-active{
  padding-left: 45px !important;
}
.el-aside{
  transition: width .3s;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}
.logo-title{
  margin-left: 4px;
  font-size: 20px;
  transition: all .3s;
}
.el-header{
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  display: flex;
  align-items: center;
}
</style>
