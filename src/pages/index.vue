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
    meta: [{ hid: 'description', name: 'description', content: 'Menaenon' }],
    link: [{ rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' }]
  },
  components: { Profile }
}
</script>
