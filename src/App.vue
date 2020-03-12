<template>
  <div id="app" class="font-sans">
      <div class="wrapper pt-12 px-8 min-h-screen" :class="[ ( (darkMode) ? 'theme-dark' : 'theme-light' ) ]">
        <div
            class="bg-gray-900 w-full h-16 fixed top-0 left-0 flex items-center justify-center z-50"
            style="-webkit-app-region: drag" >
            <div class="flex items-center">
                <span class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                    </span>&nbsp;
                    <span class="font-medium text-white">l8r</span>
            </div>
        </div>
        <div class="py-12">
            <Home></Home>
        </div>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Home from '@/pages/Home'

    export default {
        components: {
            Home
        },
        computed: {
            ...mapState({
                darkMode: 'darkMode'
            })
        }
    }

</script>


<style src="./assets/main.css">
