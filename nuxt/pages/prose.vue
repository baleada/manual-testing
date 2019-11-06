<template lang="html">
<ProseArticle>
  <component :is="article" />
</ProseArticle>
</template>

<script>
import article from '~/assets/md/prose.md'
export default {
  layout: 'ProseThreeColumnLayout',
  setup () {
    return {
      article
    }
  }
}
</script>
