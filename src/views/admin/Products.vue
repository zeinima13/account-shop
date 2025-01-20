<template>
  <div class="admin-products">
    <div class="header">
      <h2>商品管理</h2>
      <el-button type="primary" @click="showAddDialog">添加商品</el-button>
    </div>

    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="商品名称" />
      <el-table-column prop="category" label="分类" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="stock" label="库存" />
      <el-table-column prop="status" label="状态">
        <template #default="{ row }">
          <el-tag :type="row.status === '上架' ? 'success' : 'info'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button-group>
            <el-button type="primary" @click="editProduct(row)">编辑</el-button>
            <el-button 
              :type="row.status === '上架' ? 'warning' : 'success'"
              @click="toggleStatus(row)"
            >
              {{ row.status === '上架' ? '下架' : '上架' }}
            </el-button>
            <el-button type="danger" @click="deleteProduct(row)">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加/编辑商品对话框 -->
    <el-dialog 
      :title="dialogType === 'add' ? '添加商品' : '编辑商品'" 
      v-model="dialogVisible"
    >
      <el-form :model="productForm" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="productForm.name" />
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="productForm.category">
            <el-option 
              v-for="cat in categories" 
              :key="cat.id" 
              :label="cat.name" 
              :value="cat.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="价格">
          <el-input-number v-model="productForm.price" :min="0" />
        </el-form-item>
        <el-form-item label="库存">
          <el-input-number v-model="productForm.stock" :min="0" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveProduct">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'AdminProducts',
  setup() {
    const products = ref([
      {
        id: 1,
        name: '微博-信用分510以上---6-9级老号',
        category: '微博产品',
        price: 99,
        stock: 100,
        status: '上架'
      }
    ])

    const categories = [
      { id: '1', name: '微博产品' },
      { id: '2', name: '微博白号' },
      { id: '3', name: '微博号' }
    ]

    const dialogVisible = ref(false)
    const dialogType = ref('add')
    const productForm = reactive({
      name: '',
      category: '',
      price: 0,
      stock: 0
    })

    const showAddDialog = () => {
      dialogType.value = 'add'
      Object.assign(productForm, {
        name: '',
        category: '',
        price: 0,
        stock: 0
      })
      dialogVisible.value = true
    }

    const editProduct = (product) => {
      dialogType.value = 'edit'
      Object.assign(productForm, product)
      dialogVisible.value = true
    }

    const saveProduct = () => {
      // 这里应该调用API保存商品
      if (dialogType.value === 'add') {
        products.value.push({
          id: Date.now(),
          ...productForm,
          status: '上架'
        })
      } else {
        const index = products.value.findIndex(p => p.id === productForm.id)
        if (index !== -1) {
          products.value[index] = { ...productForm }
        }
      }
      dialogVisible.value = false
    }

    const toggleStatus = (product) => {
      product.status = product.status === '上架' ? '下架' : '上架'
    }

    const deleteProduct = (product) => {
      ElMessageBox.confirm('确定要删除该商品吗？', '提示', {
        type: 'warning'
      }).then(() => {
        const index = products.value.findIndex(p => p.id === product.id)
        if (index !== -1) {
          products.value.splice(index, 1)
        }
      })
    }

    return {
      products,
      categories,
      dialogVisible,
      dialogType,
      productForm,
      showAddDialog,
      editProduct,
      saveProduct,
      toggleStatus,
      deleteProduct
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
</style>
