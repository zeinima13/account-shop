<template>
  <div class="shop-container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeCategory"
          @select="handleCategorySelect"
        >
          <el-menu-item v-for="cat in categories" :key="cat.id" :index="cat.id">
            {{ cat.name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      
      <el-main>
        <el-row :gutter="20">
          <el-col :span="24" v-for="product in products" :key="product.id">
            <el-card class="product-card">
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <div class="price">¥{{ product.price }}</div>
                <div class="stock">库存: {{ product.stock }}</div>
              </div>
              <div class="purchase-form">
                <el-form :model="orderForm" label-width="80px">
                  <el-form-item label="数量">
                    <el-input-number 
                      v-model="orderForm[product.id]" 
                      :min="1" 
                      :max="product.stock"
                    />
                  </el-form-item>
                  <el-form-item label="邮箱">
                    <el-input v-model="email" placeholder="请输入邮箱"/>
                  </el-form-item>
                  <el-button type="primary" @click="submitOrder(product)">立即下单</el-button>
                </el-form>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Shop',
  setup() {
    const router = useRouter()
    const activeCategory = ref('1')
    const email = ref('')
    const orderForm = reactive({})

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
      }
    ])

    const handleCategorySelect = (index) => {
      activeCategory.value = index
      // 这里应该调用API获取该分类下的商品
    }

    const submitOrder = (product) => {
      if (!email.value) {
        ElMessage.error('请输入邮箱')
        return
      }
      
      const quantity = orderForm[product.id]
      if (!quantity) {
        ElMessage.error('请选择购买数量')
        return
      }

      // 跳转到支付页面
      router.push({
        name: 'payment',
        query: {
          productId: product.id,
          quantity,
          email: email.value
        }
      })
    }

    return {
      activeCategory,
      categories,
      products,
      email,
      orderForm,
      handleCategorySelect,
      submitOrder
    }
  }
}
</script>

<style scoped>
.shop-container {
  height: 100vh;
}

.product-card {
  margin-bottom: 20px;
}

.product-info {
  margin-bottom: 20px;
}

.price {
  color: #f56c6c;
  font-size: 20px;
  margin: 10px 0;
}

.stock {
  color: #909399;
}

.purchase-form {
  max-width: 400px;
}
</style>
