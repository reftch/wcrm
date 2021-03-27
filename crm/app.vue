<template>
    <router-view></router-view>
</template>

<style lang="less">
@import '../src/styles/index.less';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>