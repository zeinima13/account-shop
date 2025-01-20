<template>
  <div class="payment-container">
    <div class="payment-card">
      <div class="order-info">
        <div class="success-icon">
          <el-icon><CircleCheckFilled /></el-icon>
        </div>
        <div class="order-details">
          <div class="order-title">订单信息</div>
          <div class="order-item">
            <span>订单号：</span>
            <span>{{ orderId }}</span>
          </div>
          <div class="order-item">
            <span>付款金额：</span>
            <span>{{ amount }} USDT</span>
          </div>
          <div class="warning-text">
            由于第三方充值限制规则，目前仅支持USDT充值，请耐心等待其他支付方式的开放。
          </div>
        </div>
      </div>

      <div class="payment-methods">
        <div class="section-title">USDT - 请选择您的支付钱包</div>
        <div class="wallet-list">
          <div v-for="wallet in wallets" 
               :key="wallet.id" 
               class="wallet-item"
               :class="{ active: selectedWallet === wallet.id }"
               @click="selectWallet(wallet)">
            <img :src="wallet.icon" :alt="wallet.name" class="wallet-icon">
            <div class="wallet-info">
              <div class="wallet-name">{{ wallet.name }}</div>
              <div class="wallet-type">{{ wallet.type }}</div>
              <div class="wallet-status">{{ wallet.status }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="payment-action">
        <el-button type="primary" class="pay-button" @click="confirmPayment">
          已完成支付
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { CircleCheckFilled } from '@element-plus/icons-vue'

export default {
  name: 'Payment',
  components: {
    CircleCheckFilled
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const orderId = ref('')
    const amount = ref(0)
    const selectedWallet = ref(null)

    const wallets = ref([
      {
        id: 1,
        name: 'imToken',
        type: 'TRC20 / ERC20 / BEP20',
        status: '【快速支付】点击充充值，请手机浏览访问该网站',
        icon: '/wallet-icons/imtoken.png'
      },
      {
        id: 2,
        name: 'TokenPocket',
        type: 'TRC20 / ERC20 / BEP20',
        status: '【快速支付】点击充充值，请手机浏览访问该网站',
        icon: '/wallet-icons/tokenpocket.png'
      },
      {
        id: 3,
        name: '欧易web3钱包',
        type: 'TRC20 / ERC20',
        status: '请使用欧易web3钱包，交易确认后系统充值到账',
        icon: '/wallet-icons/okx.png'
      }
    ])

    onMounted(() => {
      orderId.value = 'BL' + Date.now()
      amount.value = route.query.amount || 0
    })

    const selectWallet = (wallet) => {
      selectedWallet.value = wallet.id
    }

    const confirmPayment = () => {
      if (!selectedWallet.value) {
        ElMessage.error('请选择支付钱包')
        return
      }
      ElMessage.success('支付确认成功！')
      router.push('/')
    }

    return {
      orderId,
      amount,
      wallets,
      selectedWallet,
      selectWallet,
      confirmPayment
    }
  }
}
</script>

<style scoped>
.payment-container {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 20px;
}

.payment-card {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.order-info {
  padding: 20px;
  background: #f0f9eb;
  border-radius: 8px 8px 0 0;
  display: flex;
  gap: 20px;
}

.success-icon {
  color: #67c23a;
  font-size: 24px;
}

.order-details {
  flex: 1;
}

.order-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.order-item {
  margin: 10px 0;
  color: #666;
}

.warning-text {
  color: #e6a23c;
  font-size: 14px;
  margin-top: 15px;
}

.payment-methods {
  padding: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #303133;
}

.wallet-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.wallet-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid #ebeef5;
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

.wallet-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.wallet-info {
  flex: 1;
}

.wallet-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.wallet-type {
  color: #666;
  font-size: 14px;
  margin-bottom: 5px;
}

.wallet-status {
  color: #409eff;
  font-size: 12px;
}

.payment-action {
  padding: 20px;
  text-align: center;
  border-top: 1px solid #ebeef5;
}

.pay-button {
  width: 200px;
  height: 40px;
}
</style>
