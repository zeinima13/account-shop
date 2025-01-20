<template>
  <div class="shop-container">
    <div class="sidebar">
      <h2>商品分类</h2>
      <el-menu
        :default-active="activeCategory"
        class="category-menu"
        @select="handleCategorySelect"
      >
        <el-menu-item
          v-for="category in categories"
          :key="category.id"
          :index="category.id"
        >
          {{ category.name }}
        </el-menu-item>
      </el-menu>
    </div>

    <div class="main-content">
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <div class="product-meta">
              <span class="price">¥{{ product.price }}</span>
              <span class="stock">库存: {{ product.stock }}</span>
            </div>
            <el-button
              type="primary"
              size="small"
              @click="handleBuyClick(product)"
              :disabled="product.stock <= 0"
            >
              {{ product.stock > 0 ? '立即购买' : '暂时缺货' }}
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="确认订单"
      width="30%"
    >
      <div class="order-form">
        <el-form
          ref="orderForm"
          :model="orderForm"
          :rules="orderRules"
          label-width="80px"
        >
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="orderForm.email" placeholder="请输入邮箱地址"></el-input>
          </el-form-item>
          <el-form-item label="数量" prop="quantity">
            <el-input-number
              v-model="orderForm.quantity"
              :min="1"
              :max="selectedProduct ? selectedProduct.stock : 1"
            ></el-input-number>
          </el-form-item>
          <div class="order-total">
            总价: ¥{{ orderTotal }}
          </div>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleOrderConfirm">
            确认下单
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Picture } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'Shop',
  components: {
    Picture
  },
  setup() {
    const router = useRouter()
    const activeCategory = ref('1')
    const dialogVisible = ref(false)
    const selectedProduct = ref(null)
    
    const categories = [
      { id: '1', name: '游戏账号' },
      { id: '2', name: '会员账号' },
      { id: '3', name: '流媒体账号' },
      { id: '4', name: '其他账号' }
    ]

    const products = [
      {
        id: '1',
        name: 'Steam账号',
        price: 99,
        stock: 10,
        category: '1',
        image: '/product-images/steam.png'
      },
      {
        id: '2',
        name: 'Netflix会员',
        price: 29,
        stock: 20,
        category: '3',
        image: '/product-images/netflix.png'
      },
      {
        id: '3',
        name: 'Spotify会员',
        price: 19,
        stock: 15,
        category: '3',
        image: '/product-images/spotify.png'
      }
    ]

    const orderForm = ref({
      email: '',
      quantity: 1
    })

    const orderRules = {
      email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
      ],
      quantity: [
        { required: true, message: '请选择购买数量', trigger: 'blur' }
      ]
    }

    const orderTotal = computed(() => {
      if (!selectedProduct.value) return 0
      return selectedProduct.value.price * orderForm.value.quantity
    })

    const handleCategorySelect = (categoryId) => {
      activeCategory.value = categoryId
      // 这里可以根据分类筛选商品
    }

    const handleBuyClick = (product) => {
      selectedProduct.value = product
      orderForm.value.quantity = 1
      dialogVisible.value = true
    }

    const handleOrderConfirm = () => {
      if (!selectedProduct.value) return
      
      // 这里可以添加表单验证
      router.push({
        name: 'payment',
        query: {
          productId: selectedProduct.value.id,
          quantity: orderForm.value.quantity,
          email: orderForm.value.email,
          amount: orderTotal.value
        }
      })
    }

    return {
      activeCategory,
      categories,
      products,
      dialogVisible,
      selectedProduct,
      orderForm,
      orderRules,
      orderTotal,
      handleCategorySelect,
      handleBuyClick,
      handleOrderConfirm
    }
  }
}
</script>

<style scoped>
.shop-container {
  display: flex;
  min-height: 100vh;
  background: #f5f7fa;
}

.sidebar {
  width: 200px;
  background: white;
  padding: 20px 0;
  border-right: 1px solid #e6e6e6;
}

.sidebar h2 {
  padding: 0 20px;
  margin: 0 0 20px 0;
  font-size: 18px;
  color: #303133;
}

.category-menu {
  border-right: none;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 1rem;
}

.product-image img {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  margin: 0 0 1rem;
  font-size: 1.2rem;
  color: #333;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;
}

.price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #e53935;
}

.stock {
  color: #666;
}

.order-form {
  padding: 20px 0;
}

.order-total {
  text-align: right;
  padding: 10px 0;
  font-size: 16px;
  color: #f56c6c;
  font-weight: bold;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
