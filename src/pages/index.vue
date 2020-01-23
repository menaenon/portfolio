<template>
  <div>
    <Profile />
  </div>
</template>

<script>
import Profile from '@components/Profile'

export default {
  head: {
    title: 'Menaenon',
    meta: [{ hid: 'description', name: 'description', content: 'Menaenon' }]
  },
  components: { Profile }
}
</script>
