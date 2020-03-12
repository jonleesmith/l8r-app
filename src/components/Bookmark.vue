<template>
    <div class="bookmark relative my-2 px-2 w-full md:w-1/2 flex" :class="{ 'edit' : (edit) }">
        <button @click.prevent="deleteBookmark" class="absolute top-0 right-0 -mt-2 text-gray-600 focus:outline-none" v-if="edit">
            <span class="inline-block rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </span>
        </button>
        <div class="bookmark-card w-full">
            <!-- <div>
                 :style="{
                background: `url(${bookmark.image})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center center',
                'background-size': 'cover',
                }"
            </div> -->

            <div class="relative">
                <div>
                    <a :href="bookmark.url" @click.prevent="viewUrl(bookmark.url)" target="_blank" class="text-base font-medium flex items-center mb-1">
                        <img v-if="bookmark.icon && showIcon" :src="bookmark.icon" class="w-4 h-4 mr-3" @error="noIcon">
                        <p>{{ bookmark.title }}</p>
                    </a>
                </div>
                <div class="text-sm text-gray-600 mb-2 flex-grow">
                    {{ bookmark.description }}
                </div>
            </div>
            <div>
                <a class="font-medium text-sm text-blue-500 border-transparent border-b hover:border-blue-500" :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
            </div>
        </div>
    </div>
</template>
<script>

const shell = require('electron').shell;

export default {
    props: ['bookmark', 'edit', 'id'],
    data() {
        return {
            showIcon: true,
        }
    },
    methods: {
        viewUrl(url) {
            shell.openExternal(url);
        },
        noIcon() {
            this.showIcon = false
        },
        deleteBookmark() {
            if ( window.confirm('Are you sure you want to remove this bookmark?') )
            {
                this.$emit('delete', this.id)
            }
        }
    }
}
</script>
<style>

.theme-light .bookmark-card {
   @apply bg-white;
}

.theme-dark .bookmark-card {
    @apply bg-gray-800;
}

.bookmark-card {
    @apply py-6 px-8 shadow rounded flex flex-col;
}

.bookmark.edit {
  animation: shake 1s infinite;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  0%, 10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 40%, 60%, 80%, 100% {
    transform: translate3d(1px, 0, 0);
  }
}
</style>
