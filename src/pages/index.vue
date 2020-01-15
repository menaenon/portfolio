<template>
  <Header />
</template>

<script>
import Header from '@components/Header'

export default {
  head: {
    title: 'Welcome',
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  },
  components: {
    Header
  }
}
</script>
