<template>
  <div class="shop-container">
    <div class="shop-header">
      <div class="header-image">
        <img src="https://via.placeholder.com/800x200" alt="Header Image">
      </div>
      <div class="info-section">
        <div class="notice">
          <h3>商城公告</h3>
          <p>欢迎来到我们的账号商城！我们提供优质的账号服务。</p>
          <p>温馨提示：请在购买前仔细阅读商品说明。</p>
        </div>
        <div class="merchant-info">
          <h3>商户信息</h3>
          <p>商家：优质账号商城</p>
          <p>营业时间：7x24小时</p>
          <div class="contact">
            <p>客服QQ：123456789</p>
            <p>客服微信：shop123456</p>
          </div>
        </div>
      </div>
    </div>
    <div class="order-form">
      <el-form @submit.prevent="submitOrder">
        <!-- 商品类型选择 -->
        <el-form-item>
          <el-select
            v-model="form.productType"
            placeholder="请选择商品类型"
            style="width: 100%"
          >
            <el-option
              v-for="type in productTypes"
              :key="type.value"
              :label="type.label"
              :value="type.value"
            />
          </el-select>
        </el-form-item>

        <!-- 商品选择 -->
        <el-form-item>
          <el-select
            v-model="form.product"
            placeholder="请选择商品"
            style="width: 100%"
          >
            <el-option
              v-for="product in filteredProducts"
              :key="product.id"
              :label="product.name"
              :value="product.id"
            />
          </el-select>
        </el-form-item>

        <!-- 商品信息 -->
        <div v-if="selectedProduct" class="product-info">
          <div class="info-row">
            <span class="label">商品单价：</span>
            <span class="value price">¥{{ selectedProduct.price }}</span>
          </div>
          <div class="info-row">
            <span class="label">商品库存：</span>
            <span class="value stock">{{ selectedProduct.stock }} 件</span>
          </div>
        </div>

        <!-- 地区选择 -->
        <el-form-item>
          <el-select
            v-model="form.region"
            placeholder="请选择地区"
            style="width: 100%"
          >
            <el-option
              v-for="region in regions"
              :key="region.value"
              :label="region.label"
              :value="region.value"
            />
          </el-select>
        </el-form-item>

        <!-- 数量控制 -->
        <div class="quantity-controls">
          <div class="quantity-item" v-for="(qty, index) in quantities" :key="index">
            <el-button 
              circle 
              size="small"
              @click="decreaseQuantity(index)"
            >-</el-button>
            <span class="quantity-value">{{ qty }}</span>
            <el-button 
              circle 
              size="small"
              @click="increaseQuantity(index)"
            >+</el-button>
          </div>
        </div>

        <!-- 邮箱输入 -->
        <el-form-item prop="email">
          <el-input
            v-model="form.email"
            placeholder="请输入邮箱地址"
            type="email"
          >
            <template #prefix>
              <el-icon><Message /></el-icon>
            </template>
          </el-input>
          <div class="email-tip">卡密将发送到此邮箱，请认真填写</div>
        </el-form-item>

        <!-- 性别选择 -->
        <el-form-item class="gender-selection">
          <el-radio-group v-model="form.gender">
            <el-radio label="random">随机</el-radio>
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 下单提示 -->
        <div class="order-tip">
          下单后系统自动发送卡密到该邮箱
        </div>

        <!-- 提交按钮 -->
        <el-button 
          type="primary" 
          class="submit-button"
          @click="submitOrder"
        >
          立即下单
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default {
  name: 'ShopPage',
  setup() {
    const router = useRouter()
    const form = ref({
      productType: '',
      product: '',
      region: '',
      gender: 'random',
      email: ''
    })

    const quantities = ref([0, 0, 0])

    const productTypes = [
      { value: 'game', label: '游戏账号' },
      { value: 'video', label: '视频会员' },
      { value: 'music', label: '音乐会员' }
    ]

    const products = ref([
      { id: 1, name: 'Steam账号', type: 'game', price: 99, stock: 100 },
      { id: 2, name: 'Netflix会员', type: 'video', price: 29, stock: 50 },
      { id: 3, name: 'Spotify会员', type: 'music', price: 19, stock: 200 }
    ])

    const regions = [
      { value: 'cn', label: '中国大陆' },
      { value: 'hk', label: '香港' },
      { value: 'tw', label: '台湾' }
    ]

    const filteredProducts = computed(() => {
      if (!form.value.productType) return []
      return products.value.filter(p => p.type === form.value.productType)
    })

    const selectedProduct = computed(() => {
      return products.value.find(p => p.id === form.value.product)
    })

    const increaseQuantity = (index) => {
      quantities.value[index]++
    }

    const decreaseQuantity = (index) => {
      if (quantities.value[index] > 0) {
        quantities.value[index]--
      }
    }

    const submitOrder = () => {
      const selectedProduct = products.value.find(p => p.id === form.value.product)
      if (!selectedProduct) {
        ElMessage.warning('请选择商品')
        return
      }

      const totalQuantity = quantities.value.reduce((a, b) => a + b, 0)
      if (totalQuantity === 0) {
        ElMessage.warning('请选择购买数量')
        return
      }

      const order = {
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        quantity: totalQuantity,
        price: selectedProduct.price,
        total: selectedProduct.price * totalQuantity,
        region: form.value.region,
        gender: form.value.gender,
        email: form.value.email
      }

      router.push({
        name: 'payment',
        params: { 
          order: JSON.stringify(order)
        }
      })
    }

    return {
      form,
      quantities,
      productTypes,
      products,
      regions,
      filteredProducts,
      selectedProduct,
      increaseQuantity,
      decreaseQuantity,
      submitOrder
    }
  }
}
</script>

<style scoped>
.shop-container {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 20px;
}

.shop-header {
  max-width: 800px;
  margin: 0 auto 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  overflow: hidden;
}

.header-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #e5e9f2;
}

.header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-section {
  padding: 20px;
}

.notice, .merchant-info {
  margin-bottom: 20px;
}

.notice h3, .merchant-info h3 {
  margin: 0 0 10px;
  color: #303133;
  font-size: 16px;
}

.notice p, .merchant-info p {
  margin: 5px 0;
  color: #606266;
  font-size: 14px;
}

.contact {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ebeef5;
}

.order-form {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.product-info {
  margin: 15px 0;
  padding: 15px;
  background: #f8f9fb;
  border-radius: 8px;
  border: 1px solid #e4e7ed;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
}

.info-row .label {
  color: #606266;
  font-size: 14px;
}

.info-row .value {
  font-weight: 500;
  color: #303133;
}

.info-row .price {
  color: #f56c6c;
  font-size: 18px;
  font-weight: bold;
}

.info-row .stock {
  color: #67c23a;
}

.email-tip {
  margin-top: 5px;
  color: #909399;
  font-size: 12px;
}

.quantity-controls {
  margin: 20px 0;
}

.quantity-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.quantity-value {
  width: 40px;
  text-align: center;
  margin: 0 10px;
}

.gender-selection {
  margin: 20px 0;
}

.order-tip {
  color: #909399;
  font-size: 14px;
  margin: 15px 0;
  text-align: center;
}

.submit-button {
  width: 100%;
  margin-top: 20px;
}

/* 移动端优化 */
@media screen and (max-width: 768px) {
  .shop-container {
    padding: 10px;
  }

  .shop-header {
    margin-bottom: 15px;
  }

  .header-image {
    height: 150px;
  }

  .info-section {
    padding: 15px;
  }

  .order-form {
    padding: 15px;
  }
}
</style>
