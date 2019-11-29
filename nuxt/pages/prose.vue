<template lang="html">
<ProseArticle>
  <div class="">{{ messages.butt }}</div>
  <component :is="article" />
</ProseArticle>
</template>

<script>
import { ref } from '@vue/composition-api'
import article from '~/assets/md/prose.md'
export default {
  layout: 'prose',
  setup () {
    const messages = ref({
      butt: 'cheek',
    })

    return {
      article,
      messages,
    }
  }
}
</script>

<style>

</style>
