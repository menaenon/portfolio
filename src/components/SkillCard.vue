<template>
  <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 lg:mb-32">
    <div :class="bgColor" class="border rounded shadow p-2">
      <div class="flex flex-row items-center">
        <div class="text-left">
          <h1 class="text-3xl text-white font-bold">{{ skillCategory }}</h1>
        </div>
        <div class="flex-1 text-right">
          <h5 class="text-gray-800">{{ skillName }}</h5>
          <h3 class="text-pink-900 text-3xl">{{ skillProgress }} %</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    skillName: {
      type: String,
      required: true
    },
    skillProgress: {
      type: Number,
      required: true
    },
    skillCategory: {
      type: String,
      required: true
    }
  },
  computed: {
    bgColor() {
      const bgColorCode = (skill) => ({
        "Frontend": "bg-orange-400"
        ,"Backend": "bg-teal-500"
        ,"DB": "bg-green-400"
        ,"Infra": "bg-red-600"
      })[skill];
      return bgColorCode(this.skillCategory);
    }
  }
};
</script>