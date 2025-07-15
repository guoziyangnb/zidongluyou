<template>
  <div id="globalHeader">
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="doMenuClick"/>
  </div>
</template>
<script setup>
import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useRouter } from "vue-router";

const current = ref(['/']);
const items = ref([
  {
    key: '/',
    icon: () => h(MailOutlined),
    label: 'index',
    title: 'index',
  },
  {
    key: '/home',
    icon: () => h(MailOutlined),
    label: 'home',
    title: 'home',
  },
  {
    key: '/about',
    icon: () => h(AppstoreOutlined),
    label: 'about',
    title: 'about',
  },
  {
    key: '/settings',
    icon: () => h(SettingOutlined),
    label:'settings',
    title:'settings',
  }
]);


const router = useRouter();

// 路由跳转事件
const doMenuClick = ({ key }) => {
  router.push({
    path: key,
  });
};

// 监听路由变化，刷新之后更新为当前选中的菜单
router.afterEach((to, from, next) => {
  current.value = [to.path];
});
</script>