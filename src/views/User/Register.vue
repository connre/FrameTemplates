<script>

export default {
  data() {

    // 自定义验证规则
    const  validatePass = (rule , rePass , callback) =>{
      if (rePass === ''){
        callback(new Error('请确认密码'))
      }else if(rePass !== this.user.password){
        callback(new Error('两次密码不一致'))
      }else{
        callback()
      }
    }

    return {
      user: {
        username: '',
        password: '',
        rePass:''
      },
      // 固定表单校验
      rules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        // 自定义验规则方法
        rePass: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    }
  },
  created() {

  },
  methods: {
    register() {
      this.$refs['registerRef'].validate((valid) => {
        if (valid) {
          // 验证通过
          this.$request.post('/register', this.user).then(res => {
            if (res.code === '200') {
              this.$router.push('/userLogin')
              this.$message.success('注册成功')
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      })

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
        <el-form :model="user" style="width: 80%" :rules="rules" ref="registerRef">
          <div class="input"
               style="font-size: 20px;font-weight: bold;text-align: center;align-items: center;margin-bottom: 20px">
            欢迎注册后台管理系统
          </div>
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" size="medium" placeholder="请输入账号"
                      v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" size="medium" show-password placeholder="请输入密码"
                      v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item prop="rePass">
            <el-input prefix-icon="el-icon-lock" size="medium" show-password placeholder="请确认密码"
                      v-model="user.rePass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" style="width: 100%" @click="register">注 册</el-button>
          </el-form-item>
          <div style="display: flex">
            <div style="flex: 1">已有账号？立即<span style="color: #0f9876;cursor: pointer"
                                                      @click="$router.push('/userLogin')">登录</span></div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style>
.loginBg {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5c795e;
}
</style>
