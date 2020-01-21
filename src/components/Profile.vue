<template functional>
  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    <div
      id="profile"
      class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
    >
      <div class="p-4 md:p-12 text-center lg:text-left">
        <div
          class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style="background-image: url('https://cdn.pixabay.com/photo/2013/07/13/13/45/tux-161464_1280.png')"
        ></div>
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">t_o_d</h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
          <i class="las la-user-alt"></i>
          Web Application Developer
        </p>
        <p
          class="pt-2 text-gray-600 text-base flex items-center justify-center lg:justify-start"
        >
          <i class="las la-map-marker"></i>
          Okinawa, Japan
        </p>
        <p class="pt-2 text-base flex items-center justify-center lg:justify-start">
          <i class="las la-archive"></i>
          <a class="link text-blue-300" href="https://github.com/menaenon/portfolio"><i class="lab la-github"></i></a>
          <a class="link text-blue-300" href="https://qiita.com/t_o_d"><i class="la la-github-alt"></i></a>
        </p>
        <p class="pt-8 text-sm">
          I am Web Application Developer in Okinawa
        </p>
      </div>
    </div>
    <div class="w-full lg:w-2/5">
      <img
        src="https://cdn.pixabay.com/photo/2013/07/13/13/45/tux-161464_1280.png"
        class="rounded-none lg:rounded-lg hidden lg:block"
      />
    </div>
  </div>
</template>