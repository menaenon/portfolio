<template>
  <div>
    <Header />
    <nuxt />
    <Bottom />
  </div>
</template>

<script>
import Header from '../../src/components/Header'
import Bottom from '../../src/components/Bottom'
export default {
  components: { Header,Bottom }
}
</script>
