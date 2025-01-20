<template>
  <div class="admin-products">
    <div class="header">
      <h2>商品管理</h2>
      <el-button type="primary" @click="showAddDialog">添加商品</el-button>
    </div>

    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="商品名称" />
      <el-table-column prop="category" label="分类">
        <template #default="{ row }">
          {{ getCategoryName(row.category) }}
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" width="100">
        <template #default="{ row }">
          ¥{{ row.price }}
        </template>
      </el-table-column>
      <el-table-column prop="stock" label="库存" width="100" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status === 'active' ? 'success' : 'info'">
            {{ row.status === 'active' ? '上架' : '下架' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button 
            size="small" 
            :type="row.status === 'active' ? 'warning' : 'success'"
            @click="toggleStatus(row)"
          >
            {{ row.status === 'active' ? '下架' : '上架' }}
          </el-button>
          <el-button 
            size="small"
            type="primary"
            @click="editProduct(row)"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加/编辑商品对话框 -->
    <el-dialog
      :title="dialogType === 'add' ? '添加商品' : '编辑商品'"
      v-model="dialogVisible"
      width="500px"
    >
      <el-form :model="currentProduct" label-width="100px">
        <el-form-item label="商品名称">
          <el-input v-model="currentProduct.name" />
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="currentProduct.category" style="width: 100%">
            <el-option
              v-for="category in categories"
              :key="category.id"
              :label="category.name"
              :value="category.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="价格">
          <el-input-number v-model="currentProduct.price" :min="0" />
        </el-form-item>
        <el-form-item label="库存">
          <el-input-number v-model="currentProduct.stock" :min="0" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveProduct">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'AdminProducts',
  setup() {
    const products = ref([
      {
        id: 1,
        name: 'Steam账号',
        category: 'game',
        price: 99,
        stock: 10,
        status: 'active'
      },
      {
        id: 2,
        name: 'Netflix会员',
        category: 'video',
        price: 29,
        stock: 20,
        status: 'active'
      },
      {
        id: 3,
        name: 'Spotify会员',
        category: 'music',
        price: 19,
        stock: 15,
        status: 'active'
      }
    ])

    const categories = [
      { id: 'game', name: '游戏账号' },
      { id: 'video', name: '视频会员' },
      { id: 'music', name: '音乐会员' },
      { id: 'other', name: '其他账号' }
    ]

    const dialogVisible = ref(false)
    const dialogType = ref('add')
    const currentProduct = reactive({
      id: null,
      name: '',
      category: '',
      price: 0,
      stock: 0,
      status: 'active'
    })

    const getCategoryName = (categoryId) => {
      const category = categories.find(c => c.id === categoryId)
      return category ? category.name : categoryId
    }

    const showAddDialog = () => {
      dialogType.value = 'add'
      Object.assign(currentProduct, {
        id: null,
        name: '',
        category: '',
        price: 0,
        stock: 0,
        status: 'active'
      })
      dialogVisible.value = true
    }

    const editProduct = (product) => {
      dialogType.value = 'edit'
      Object.assign(currentProduct, product)
      dialogVisible.value = true
    }

    const saveProduct = () => {
      if (dialogType.value === 'add') {
        const newProduct = {
          ...currentProduct,
          id: products.value.length + 1
        }
        products.value.push(newProduct)
      } else {
        const index = products.value.findIndex(p => p.id === currentProduct.id)
        if (index !== -1) {
          products.value[index] = { ...currentProduct }
        }
      }
      dialogVisible.value = false
      ElMessage.success(`${dialogType.value === 'add' ? '添加' : '编辑'}商品成功`)
    }

    const toggleStatus = (product) => {
      product.status = product.status === 'active' ? 'inactive' : 'active'
      ElMessage.success(`商品已${product.status === 'active' ? '上架' : '下架'}`)
    }

    return {
      products,
      categories,
      dialogVisible,
      dialogType,
      currentProduct,
      getCategoryName,
      showAddDialog,
      editProduct,
      saveProduct,
      toggleStatus
    }
  }
}
</script>

<style scoped>
.admin-products {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  margin: 0;
}

@media screen and (max-width: 768px) {
  .admin-products {
    padding: 10px;
  }
  
  .el-table {
    font-size: 14px;
  }
}
</style>
