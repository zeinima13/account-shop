<template>
  <div class="shop-container">
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
  name: 'Shop',
  setup() {
    const router = useRouter()
    const form = ref({
      productType: '',
      product: '',
      region: '',
      gender: 'random'
    })

    const quantities = ref([0, 0, 0])

    const productTypes = [
      { value: 'game', label: '游戏账号' },
      { value: 'video', label: '视频会员' },
      { value: 'music', label: '音乐会员' }
    ]

    const products = ref([
      { id: 1, name: 'Steam账号', type: 'game', price: 99 },
      { id: 2, name: 'Netflix会员', type: 'video', price: 29 },
      { id: 3, name: 'Spotify会员', type: 'music', price: 19 }
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
        gender: form.value.gender
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
  display: flex;
  justify-content: center;
  padding: 20px;
}

.order-form {
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
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

  .order-form {
    padding: 15px;
  }

  .el-select {
    width: 100%;
  }
}
</style>
