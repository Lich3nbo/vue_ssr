<template>
  <div>
    我是动态参数页
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>