<template>
    <div class="w-full mx-auto max-w-4xl">
        <FormInput @complete="addBookmark"></FormInput>
        <ActionBar @trigger="updateOption"></ActionBar>
        <div>
            <div class="flex flex-wrap -mx-2">
                <Bookmark
                    :style="{ 'animation-delay': `${key + 1 * 1.5}ms` }"
                    v-for="(bookmark, key) in bookmarks"
                    :bookmark="bookmark"
                    :edit="edit"
                    :id="key"
                    @delete="remove"
                    :key="key">
                    {{ key + 1 * 1.5 }}
                </Bookmark>
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
            }
        },
        methods: {
            previewMeta(meta) {
                this.meta = meta
            },
            updateOption(type, val) {
                this[type] = val
            },
            addBookmark(meta) {
                this.bookmarks.push(meta)
                this.bookmarks = this.bookmarks
                this.$forceUpdate()
            },
            remove(id) {
                this.bookmarks.splice(id, 1)
                this.bookmarks = this.bookmarks
                this.$forceUpdate()
            }
        },

        computed: {
            bookmarks: {
                get: function() {
                    return JSON.parse(localStorage.getItem('bookmarks')) || []
                },
                set: function(val) {
                    localStorage.setItem('bookmarks', JSON.stringify(val))
                }
            }
        },
    }
</script>
