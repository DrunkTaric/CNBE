<template>
  <section class="flex justify-center items-center w-full h-auto p-3">
    <section
      class="grid grid-cols-8 w-[70%] h-full p-4 pl-7 pr-7 justify-center items-center bg-container rounded-full">
      <section id="logo" class="w-6 h-6">
        <NuxtLink to="/" class="font-bold text-lg">
          <iconsLogo />
        </NuxtLink>
      </section>

      <section id="routes" class="flex justify-center items-center col-start-4 col-span-2 space-x-5">
        <NuxtLink to="/home" class="font-bold text-lg">
          Home
        </NuxtLink>
        <NuxtLink to="/forum" class="font-bold text-lg">
          Forum
        </NuxtLink>
        <NuxtLink to="/home" class="font-bold text-lg">
          Contact
        </NuxtLink>
        <NuxtLink to="/home" class="font-bold text-lg">
          Apply
        </NuxtLink>
      </section>

      <section id="dark-mode" class="flex col-start-8">
        <UButton icon="i-material-symbols-dark-mode-outline" color="" class="mr-0 ml-auto bg-reactive">
          <iconsDarkMode />
        </UButton>
      </section>
    </section>
  </section>
</template>
