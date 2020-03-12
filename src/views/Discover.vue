<template>
  <div>
    <flickity ref="flickity" :options="flickityOptions" class="px-10">
      <div class="w-full bg-red-500 max-w-full text-white px-8 rounded-b-lg pt-12 mb-10" @click="story('Create Personal Projects')">
        <div class="uppercase mb-4">The Basics</div>
        <h1 class="font-normal mb-4">Create Personal Projects</h1>
        <p class="w-64 leading-normal text-grey-lighter">With these apps, creativity has no boundaries.</p>
      </div>
      <div class="w-full bg-red-500 max-w-full text-white px-8 rounded-b-lg pt-12 mb-10" @click="story('Create Personal Projects')">
        <div class="uppercase mb-4">Another Title</div>
        <h1 class="font-normal mb-4">Another Title Here</h1>
        <p class="w-64 leading-normal text-grey-lighter">Andre is the best!!</p>
      </div>
      <div class="w-full bg-red-500 max-w-full text-white px-8 rounded-b-lg pt-12 mb-10" @click="story('Create Personal Projects')">
        <div class="uppercase mb-4">The Basics</div>
        <h1 class="font-normal mb-4">Create Personal Projects</h1>
        <p class="w-64 leading-normal text-grey-lighter">With these apps, creativity has no boundaries.</p>
      </div>
      <div class="w-full bg-red-500 max-w-full text-white px-8 rounded-b-lg pt-12 mb-10" @click="story('Create Personal Projects')">
        <div class="uppercase mb-4">The Basics</div>
        <h1 class="font-normal mb-4">Create Personal Projects</h1>
        <p class="w-64 leading-normal text-grey-lighter">With these apps, creativity has no boundaries.</p>
      </div>
    </flickity>

    <div class="flex mb-10 px-10">
      <div class="w-1/2 mr-4 bg-grey-darkest rounded-lg flex px-8 py-6" @click="story('Get Focused, Fast')">
        <div class="flex-1">
          <div class="uppercase text-grey-light text-xs mb-1">Featured App</div>
          <h1 class="font-normal text-2xl mb-4">Get Focused, Fast</h1>
          <p class="text-grey-light text-xs leading-normal">OmniFocus transforms your to-do list. Click to read how.</p>
        </div>
        <div class="text-right">
          <img src="../assets/discover2.jpg" alt="image" class="rounded-full w-40">
        </div>
      </div>

      <div class="w-1/2 ml-4 bg-grey-darkest rounded-lg px-8 py-6" @click="story('Apps That Look Great in Dark Mode')">
        <div class="uppercase text-grey-light text-xs mb-1">Collection</div>
        <h1 class="font-normal text-2xl mb-4">Apps That Look Great in Dark Mode</h1>
        <p class="text-grey-light text-xs leading-normal mb-4">Dark is the new black.</p>
        <img src="../assets/icons_darkmode.png" alt="icons">
      </div>
    </div>

    <div class="text-grey mb-10 px-10">
      Terms & Conditions
    </div>

  </div>
</template>

<script>
import Flickity from 'vue-flickity'

// @ is an alias to /src
export default {
  name: 'home',
  components: {
    Flickity
  },
  created() {
    window.addEventListener('scroll', this.toggleTitleBar, { passive: true })
  },
  data() {
    return {
      response: null,
      loading: true,
      posts: [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts() {
      this.$axios.get('posts')
        .then(res => {
          this.response = res
          this.posts = res.data
        })
    },
    story(title) {
      this.$router.push({
        name: 'story',
        params: { title }
      })
    },
    product(title) {
      this.$router.push({
        name: 'product',
        params: { title }
      })
    }
  }
}
</script>

<style>

</style>

