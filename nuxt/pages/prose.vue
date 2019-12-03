<template lang="html">
<ProseArticle>
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
