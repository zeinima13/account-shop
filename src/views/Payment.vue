<template>
  <div class="payment-container">
    <el-card class="payment-card">
      <template #header>
        <div class="card-header">
          <span>订单信息</span>
        </div>
      </template>
      
      <el-descriptions :column="1" border>
        <el-descriptions-item label="订单号">{{ orderId }}</el-descriptions-item>
        <el-descriptions-item label="支付金额">{{ totalAmount }} USDT</el-descriptions-item>
      </el-descriptions>

      <div class="payment-methods">
        <h3>USDT - 请选择您的支付方式</h3>
        <el-radio-group v-model="selectedMethod">
          <el-radio-button v-for="method in paymentMethods" 
            :key="method.name" 
            :label="method.name">
            {{ method.label }}
          </el-radio-button>
        </el-radio-group>
      </div>

      <div class="payment-instructions" v-if="selectedMethod">
        <el-alert
          title="请在支付完成后点击下方已完成支付按钮"
          type="warning"
          :closable="false"
        />
        <div class="instruction-content">
          {{ getInstructions(selectedMethod) }}
        </div>
      </div>

      <div class="action-buttons">
        <el-button type="primary" @click="confirmPayment">已完成支付</el-button>
        <el-button @click="cancelOrder">取消订单</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'Payment',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const orderId = ref('')
    const totalAmount = ref(0)
    const selectedMethod = ref('')

    const paymentMethods = [
      { name: 'imToken', label: 'imToken - TRC20/ERC20/BEP20' },
      { name: 'TokenPocket', label: 'TokenPocket - TRC20/ERC20/BEP20' },
      { name: 'MetaMask', label: 'MetaMask - ERC20' }
    ]

    onMounted(() => {
      // 生成订单号
      orderId.value = 'BL' + Date.now()
      // 计算总金额
      const { productId, quantity } = route.query
      // 这里应该从API获取商品价格
      totalAmount.value = 99 * quantity
    })

    const getInstructions = (method) => {
      return `请使用${method}钱包扫描二维码完成支付，或直接转账至以下地址：\nTRC20地址：TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`
    }

    const confirmPayment = () => {
      // 这里应该调用API验证支付状态
      ElMessage.success('支付成功！')
      router.push('/orders')
    }

    const cancelOrder = () => {
      router.push('/')
    }

    return {
      orderId,
      totalAmount,
      selectedMethod,
      paymentMethods,
      getInstructions,
      confirmPayment,
      cancelOrder
    }
  }
}
</script>

<style scoped>
.payment-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.payment-card {
  margin-bottom: 20px;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
}

.payment-methods {
  margin: 20px 0;
}

.payment-instructions {
  margin: 20px 0;
}

.instruction-content {
  margin: 20px 0;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 4px;
  white-space: pre-line;
}

.action-buttons {
  margin-top: 20px;
  text-align: center;
}
</style>
