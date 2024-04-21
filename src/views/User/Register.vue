<script>


export default {
  data(){
    return{
      user:{
        username:'',
        password:'',
        requestPwd:''
      },
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger:'blur'},
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
        ]
        ,requestPwd:[
          {required:true,message:'请确认账号',trigger:'blur'},
        ]
      }
    }
  },
  created(){

  },
  methods:{

    UserLogin(){
      console.log(this.code)
    }
  }
}
</script>

<template>
  <div class="loginBg">
    <div style="display: flex;background-color: white;width: 50%;border-radius: 5px;overflow: hidden">
      <div style="flex: 1">
        <img style="width: 100%" alt="" src="@/assets/log.png">
      </div>
      <div style="flex: 1; display: flex;align-items: center;justify-content: center">
        <el-form :model="user" style="width: 80%">
          <div class="input" style="font-size: 20px;font-weight: bold;text-align: center;align-items: center;margin-bottom: 20px">欢迎注册后台管理系统</div>
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" size="medium" placeholder="请输入账号" v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" size="medium" show-password placeholder="请输入密码" v-model="user.password"></el-input>
          </el-form-item>
<!--          验证码-->
          <el-form-item prop="validCode">
            <el-input prefix-icon="el-icon-lock" size="medium" show-password placeholder="请确认密码" v-model="user.requestPwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%">注 册</el-button>
          </el-form-item>
          <div style="display: flex">
            <div style="flex: 1">已注册？立即<span style="color: #0f9876;cursor: pointer" @click="$router.push('/userLogin')">登录</span></div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style>
.loginBg{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
}
</style>
