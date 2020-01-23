<template>
<div>
  <h1 class="text-4xl text-gray-900 text-center font-semibold">
    <i class="las la-battery-full"></i>Skill
  </h1>
  <div class="flex flex-wrap mb-2">
    <SkillCard :skillName="'HTML / CSS / Javascript'" :skillProgress="75" :skillCategory="'Frontend'" />
    <SkillCard :skillName="'jQuery / Vue,js / Nuxt.js'" :skillProgress="70" :skillCategory="'Frontend'" />
    <SkillCard :skillName="'tailwindcss / Vuetify'" :skillProgress="60" :skillCategory="'Frontend'" />
    <SkillCard :skillName="'Java / PHP'" :skillProgress="60" :skillCategory="'Backend'" />
    <SkillCard :skillName="'PlayFramework / FuelPHP'" :skillProgress="60" :skillCategory="'Backend'" />
    <SkillCard :skillName="'MySQL'" :skillProgress="60" :skillCategory="'DB'" />
    <SkillCard :skillName="'Nginx / Docker / AWS(EC2,Cloudformation)'" :skillProgress="90" :skillCategory="'Infra'" />
  </div>
</div>
</template>
<script>
import SkillCard from '@components/SkillCard'
export default {
  components: { SkillCard }
}
</script>