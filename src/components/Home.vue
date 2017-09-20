<template>
  <div>
    <router-link to="/demo/list">button</router-link>
    <router-link to="/demo/list">list</router-link>
  </div>
</template>

<style lang="less" scoped>
  @import '../style/mixins';

  a {
    font-size: @font-size-caption;
    text-decoration: underline;
    display: block;
    margin-bottom: 10px;
  }
</style>
