<template>
<div>
    
    <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']" unique-opened default-active='$route.path'>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>内容管理
            </template>
            <el-menu-item-group>
            <template slot="title">物品</template>
              <el-menu-item index="/items/ItemsCreate">新建物品</el-menu-item>
              <el-menu-item index="/items/ItemsList">物品列表</el-menu-item>
              </el-menu-item-group>
            <el-menu-item-group>
            <template slot="title">英雄</template>
              <el-menu-item index="/heroes/HeroCreate">新建英雄</el-menu-item>
              <el-menu-item index="/heroes/HeroesList">英雄列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>运营管理</template>
            <el-menu-item-group>
              <template slot="title">广告位</template>
                <el-menu-item index="/ads/AdsCreate">新建广告位</el-menu-item>
                <el-menu-item index="/ads/AdsList">广告位列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">文章</template>
              <el-menu-item index="/articles/ArticleCreate">新建文章</el-menu-item>
              <el-menu-item index="/articles/articlesList">文章列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
          <el-menu-item-group>
            <template slot="title">分类</template>
              <el-menu-item index="/categories/CatCreate">新建分类</el-menu-item>
              <el-menu-item index="/categories/CatList">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">管理员</template>
              <el-menu-item index="/adminUser/AdminCreate">新建管理员</el-menu-item>
              <el-menu-item index="/adminUser/AdminList">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        </el-menu>
    </el-aside>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
        </el-header>
        
        <el-main>
        <router-view :key="$router.path"></router-view>
        <!--<el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>-->
        </el-main>
    </el-container>
    </el-container>
</div>
</template>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>