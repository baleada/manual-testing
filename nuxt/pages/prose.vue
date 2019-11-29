<template lang="html">
<ProseArticle>
  <template v-slot:before="{ frontMatter: { title } }">
    <ProseHeading :level="1">{{ title }}</ProseHeading>
  </template>
  <component :is="article" />
</ProseArticle>
</template>

<script>
import { ref } from '@vue/composition-api'
import article from '~/assets/md/prose.md'
export default {
  layout: 'prose',
  setup () {
    return {
      article,
    }
  }
}
</script>

<style>

</style>
