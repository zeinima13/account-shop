<template>
  <div class="shop-container">
    <div class="header">
      <div class="logo">账户商店</div>
    </div>
    <div class="main-content">
      <div class="left-menu">
        <div class="category-title">账户商品</div>
        <el-menu
          :default-active="activeCategory"
          class="category-menu"
          @select="handleCategorySelect"
        >
          <el-menu-item v-for="cat in categories" :key="cat.id" :index="cat.id">
            {{ cat.name }}
          </el-menu-item>
        </el-menu>
      </div>
      
      <div class="right-content">
        <div class="product-list">
          <div v-for="product in products" :key="product.id" class="product-item" @click="selectProduct(product.id)">
            <div class="product-info">
              <div class="product-name">{{ product.name }}</div>
              <div class="product-details" v-if="selectedProduct === product.id">
                <div class="price">价格: {{ product.price }} USDT</div>
                <div class="stock">库存: {{ product.stock }}</div>
                <el-input v-model="email" placeholder="请输入邮箱" class="email-input" />
                <el-button type="primary" class="order-btn" @click="submitOrder(product)">
                  立即下单
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default {
  name: 'Shop',
  setup() {
    const router = useRouter()
    const activeCategory = ref('1')
    const email = ref('')
    const selectedProduct = ref(null)

    const categories = [
      { id: '1', name: '微博产品' },
      { id: '2', name: '微博白号' },
      { id: '3', name: '微博号' }
    ]

    const products = ref([
      { 
        id: 1, 
        categoryId: '1',
        name: '微博-信用分510以上---6-9级老号', 
        price: 99,
        stock: 100
      },
      {
        id: 2,
        categoryId: '1',
        name: '微博0-20级',
        price: 49,
        stock: 200
      },
      {
        id: 3,
        categoryId: '2',
        name: '微博白号',
        price: 29,
        stock: 500
      }
    ])

    const handleCategorySelect = (index) => {
      activeCategory.value = index
      selectedProduct.value = null
    }

    const filteredProducts = computed(() => {
      return products.value.filter(p => p.categoryId === activeCategory.value)
    })

    const selectProduct = (productId) => {
      selectedProduct.value = selectedProduct.value === productId ? null : productId
    }

    const submitOrder = (product) => {
      if (!email.value) {
        ElMessage.error('请输入邮箱')
        return
      }

      router.push({
        name: 'payment',
        query: {
          productId: product.id,
          email: email.value,
          amount: product.price
        }
      })
    }

    return {
      activeCategory,
      categories,
      products: filteredProducts,
      email,
      selectedProduct,
      handleCategorySelect,
      selectProduct,
      submitOrder
    }
  }
}
</script>

<style scoped>
.shop-container {
  min-height: 100vh;
  background: #f5f7fa;
}

.header {
  background: linear-gradient(45deg, #4b9eff, #7cc2ff);
  padding: 20px;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.main-content {
  display: flex;
  margin: 20px;
  gap: 20px;
}

.left-menu {
  width: 250px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.category-title {
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
}

.right-content {
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.product-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.product-name {
  color: #333;
  font-size: 14px;
}

.product-details {
  margin-top: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 4px;
}

.price, .stock {
  margin-bottom: 10px;
  color: #666;
}

.email-input {
  margin: 10px 0;
}

.order-btn {
  width: 100%;
}
</style>
