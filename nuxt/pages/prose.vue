<template lang="html">
  <ProseArticle>
    <component :is="article" />
  </ProseArticle>
</template>

<script>
import { ref } from '@vue/composition-api'
import article from '~/assets/md/prose.md'

import SlotThing from '../components/SlotThing.vue'

export default {
  layout: 'prose',
  components: {
    SlotThing,
  },
  setup () {
    return {
      article,
    }
  }
}
</script>

<style>
svg {
  height: 100px;
  width: 100px;
}
</style>
