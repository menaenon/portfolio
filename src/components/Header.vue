<template functional>
  <nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
    <div class="container mx-auto flex flex-wrap items-center">
      <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
        <nuxt-link to="/" class="font-semibold text-xl tracking-tight">
          t_o_d  portfolio
        </nuxt-link>
      </div>
      <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
        <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
          <li class="mr-3">
            <nuxt-link to="/" class="inline-block py-2 px-4 text-white no-underline hover:text-gray-500">Home</nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link to="/skill" class="inline-block text-white no-underline hover:text-gray-500 py-2 px-4">Skill</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>