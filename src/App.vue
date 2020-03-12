<template>
  <div id="app" style="-webkit-app-region: drag" class="font-sans">
    <div class="w-full mx-auto" style="max-width: 1000px;">
        <FormInput @complete="addBookmark"></FormInput>
        <ActionBar v-if="bookmarks.length" @trigger="updateOption"></ActionBar>
        <div>
            <div class="flex flex-wrap -mx-2">
                <Bookmark
                    :style="{ 'animation-delay': `0.${key}s` }"
                    v-for="(bookmark, key) in bookmarks"
                    :bookmark="bookmark"
                    :edit="edit"
                    :id="key"
                    @delete="remove"
                    :key="key">
                </Bookmark>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

    import Bookmark from '@/components/Bookmark.vue'
    import ActionBar from '@/components/ActionBar.vue'
    import FormInput from '@/components/FormInput.vue'

    export default {
        components: {
            FormInput,
            ActionBar,
            Bookmark
        },
        data() {
            return {
                edit: false,
                meta: false,
                bookmarks: [],
            }
        }
    }
</script>


<style src="./assets/main.css">
