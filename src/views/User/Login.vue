<script>
import ValidCode from "@/components/ValidCode.vue";

export default {
  components: {
    ValidCode
  },
  data() {
    // 自定义验证规则
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value.toLowerCase() !== this.code) {//小写
        callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }

    return {
      code: '',//验证组件传递来的code
      user: {
        code: '',
        username: '',
        password: ''
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
        code: [
          {validator: validateCode, trigger: 'blur'}
        ]
      }
    }
  },
  created() {

  },
  methods: {
    getCode(code) {
      // console.log(code)
      this.code = code.toLowerCase()
    },
    UserLogin() {
      this.$refs['loginRef'].validate((valid) => {
        if (valid) {
          // 验证通过
          this.$request.post('/login', this.user).then(res => {
            if (res.code === '200') {
              this.$router.push('/')
              this.$message.success('登录成功')
              // 存储用户信息
              localStorage.setItem('indexUser', JSON.stringify(res.data))
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
        <el-form :model="user" style="width: 80%" :rules="rules" ref="loginRef">
          <div class="input"
               style="font-size: 20px;font-weight: bold;text-align: center;align-items: center;margin-bottom: 20px">
            欢迎登录后台管理系统
          </div>
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" size="medium" placeholder="请输入账号"
                      v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" size="medium" show-password placeholder="请输入密码"
                      v-model="user.password"></el-input>
          </el-form-item>
          <!--          验证码-->
          <el-form-item prop="code">
            <div style="display: flex">
              <el-input prefix-icon="el-icon-circle-check" size="medium" style="flex: 1" v-model="user.code"
                        placeholder="请输入验证码"></el-input>
              <div style="flex: 1;height: 36px">
                <valid-code @update:value="getCode"></valid-code>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="UserLogin">登 录</el-button>
          </el-form-item>
          <div style="display: flex">
            <div style="flex: 1">还没有账号？立即<span style="color: #0f9876;cursor: pointer"
                                                      @click="$router.push('/register')">注册</span></div>
            <div style="flex: 1;text-align: right;"><span style="cursor: pointer;color:#0f9876 ">忘记密码</span></div>
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
  background-color: #b5eac3;
}
</style>
