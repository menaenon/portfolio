<template>
  <div>
    <Header />
    <pre>
      content
      content
    </pre>
    <Bottom />
  </div>
</template>

<script>
import Header from '@components/Header'
import Bottom from '@components/Bottom'

export default {
  head: {
    title: 'Welcome',
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  },
  components: { Header, Bottom }
}
</script>
