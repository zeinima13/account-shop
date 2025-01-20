<template>
  <div class="payment-container">
    <div class="payment-box">
      <div class="order-info">
        <h2>订单信息</h2>
        <div class="info-item">
          <span class="label">订单编号:</span>
          <span class="value">{{ orderId }}</span>
        </div>
        <div class="info-item">
          <span class="label">商品名称:</span>
          <span class="value">{{ order.productName }}</span>
        </div>
        <div class="info-item">
          <span class="label">购买数量:</span>
          <span class="value">{{ order.quantity }}</span>
        </div>
        <div class="info-item">
          <span class="label">支付金额:</span>
          <span class="value price">¥{{ order.total }}</span>
        </div>
      </div>

      <div class="payment-method">
        <h3>选择支付方式</h3>
        <div class="wallet-options">
          <div 
            v-for="wallet in wallets" 
            :key="wallet.id"
            class="wallet-item"
            :class="{ active: selectedWallet === wallet.id }"
            @click="selectWallet(wallet.id)"
          >
            <img :src="wallet.icon" :alt="wallet.name">
            <span>{{ wallet.name }}</span>
          </div>
        </div>
      </div>

      <div v-if="selectedWallet" class="payment-qr">
        <div class="qr-code">
          <!-- 这里放二维码图片 -->
          <img src="/qr-code.png" alt="支付二维码">
        </div>
        <div class="wallet-address">
          <p>钱包地址：</p>
          <div class="address-box">
            <span>{{ walletAddress }}</span>
            <el-button 
              type="primary" 
              size="small"
              @click="copyAddress"
            >
              复制
            </el-button>
          </div>
        </div>
      </div>

      <div class="payment-tips">
        <p>支付完成后请等待系统自动确认</p>
        <p>如有问题请联系客服</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

export default {
  name: 'PaymentPage',
  setup() {
    const route = useRoute()
    const order = ref({})
    const orderId = ref('')
    const selectedWallet = ref('')
    const walletAddress = ref('TRx1234567890abcdef1234567890abcdef12')

    const wallets = [
      { id: 'imtoken', name: 'imToken', icon: '/wallet-icons/imtoken.svg' },
      { id: 'tokenpocket', name: 'TokenPocket', icon: '/wallet-icons/tokenpocket.svg' },
      { id: 'okx', name: 'OKX', icon: '/wallet-icons/okx.svg' }
    ]

    onMounted(() => {
      // 生成随机订单号
      orderId.value = 'ORD' + Date.now().toString().slice(-8)
      
      // 获取订单信息
      try {
        const orderData = JSON.parse(route.params.order || '{}')
        order.value = orderData
      } catch (error) {
        console.error('Failed to parse order data:', error)
        ElMessage.error('订单数据错误')
      }
    })

    const selectWallet = (walletId) => {
      selectedWallet.value = walletId
    }

    const copyAddress = () => {
      navigator.clipboard.writeText(walletAddress.value)
        .then(() => {
          ElMessage.success('地址已复制')
        })
        .catch(() => {
          ElMessage.error('复制失败')
        })
    }

    return {
      order,
      orderId,
      wallets,
      selectedWallet,
      walletAddress,
      selectWallet,
      copyAddress
    }
  }
}
</script>

<style scoped>
.payment-container {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.payment-box {
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.order-info {
  margin-bottom: 30px;
}

.order-info h2 {
  margin: 0 0 20px;
  color: #303133;
  font-size: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
}

.info-item .label {
  color: #909399;
}

.info-item .value {
  color: #303133;
}

.info-item .price {
  color: #f56c6c;
  font-size: 16px;
  font-weight: bold;
}

.payment-method {
  margin-bottom: 30px;
}

.payment-method h3 {
  margin: 0 0 15px;
  color: #303133;
}

.wallet-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.wallet-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.wallet-item:hover {
  border-color: #409eff;
}

.wallet-item.active {
  border-color: #409eff;
  background: #ecf5ff;
}

.wallet-item img {
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
}

.wallet-item span {
  font-size: 12px;
  color: #606266;
}

.payment-qr {
  margin: 30px 0;
  text-align: center;
}

.qr-code {
  margin-bottom: 20px;
}

.qr-code img {
  width: 200px;
  height: 200px;
}

.wallet-address {
  margin-top: 20px;
}

.wallet-address p {
  margin: 0 0 10px;
  color: #909399;
}

.address-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #f5f7fa;
  padding: 10px;
  border-radius: 4px;
}

.address-box span {
  font-family: monospace;
  color: #606266;
}

.payment-tips {
  margin-top: 30px;
  text-align: center;
  color: #909399;
  font-size: 14px;
}

.payment-tips p {
  margin: 5px 0;
}

/* 移动端优化 */
@media screen and (max-width: 768px) {
  .payment-container {
    padding: 10px;
  }

  .payment-box {
    padding: 20px;
  }

  .wallet-options {
    grid-template-columns: repeat(2, 1fr);
  }

  .address-box {
    flex-direction: column;
    gap: 10px;
  }

  .address-box span {
    word-break: break-all;
  }
}
</style>
