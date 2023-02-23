<template>
    <header class="flex flex-row justify-between items-center px-6 py-4">
      <div>
        <a href="#" class="font-semibold text-2xl text-white">WOCO</a>
      </div>
      <div class="flex flex-row space-x-4 items-center">
        <input
          type="text"
          class="bg-transparent border-b border-gray-300 outline-none text-white placeholder-gray-500 text-sm h-10 w-64"
          placeholder="Search for articles"
        />
        <div class="relative inline-block text-left">
          <div>
            <button
              class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              @click="isMenuOpen = !isMenuOpen"
            >
              <img
                class="h-8 w-8 rounded-full object-cover"
                src="./assets/images/avatar.jpg"
                alt="User Avatar"
              />
            </button>
          </div>
  
          <div
            v-if="isMenuOpen"
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
  };
  </script>
  
  <style scoped>
  header {
    background-color: #1d1e29;
  }
  </style>
  