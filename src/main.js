import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Element Plus
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElMessage,
  ElIcon
} from 'element-plus'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/form/style/css'
import 'element-plus/es/components/select/style/css'
import 'element-plus/es/components/radio/style/css'

const app = createApp(App)

// 注册需要的组件
const components = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElIcon
]

components.forEach(component => {
  app.component(component.name, component)
})

// 全局属性
app.config.globalProperties.$message = ElMessage

app.use(router).mount('#app')
