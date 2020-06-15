<template>
  <el-container>
    <el-header>
      <span class="main-title">bpm</span>
      <!-- <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <div style="display:inline-block;margin-left:auto;">
        <amplify-sign-out></amplify-sign-out>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-menu-item index="09">
            <NuxtLink to="/">Dashboard</NuxtLink>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>Flow
            </template>
            <el-menu-item-group>
              <template slot="title">
                <NuxtLink to="/flow">new</NuxtLink>
              </template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script></script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  height: 100px;
  display: flex;
  align-items: center;
}

.el-aside {
  color: #333;
}
</style>
