<template>
  <div class="login-container">
    <div class="login-box">
      <h2>管理员登录</h2>
      <el-form 
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        @submit.prevent="handleLogin"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button 
            type="primary" 
            style="width: 100%"
            @click="handleLogin"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

export default {
  name: 'AdminLogin',
  components: {
    User,
    Lock
  },
  setup() {
    const router = useRouter()
    const loginForm = reactive({
      username: '',
      password: ''
    })

    const loginRules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ]
    }

    const handleLogin = () => {
      // 这里应该调用真实的登录API
      // 现在为了演示，使用硬编码的用户名和密码
      if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
        localStorage.setItem('adminToken', 'demo-token')
        router.push('/admin/products')
        ElMessage.success('登录成功')
      } else {
        ElMessage.error('用户名或密码错误')
      }
    }

    return {
      loginForm,
      loginRules,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.login-box h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #303133;
}

@media screen and (max-width: 768px) {
  .login-box {
    margin: 20px;
    padding: 20px;
  }
}
</style>
