<template>
  <article ref="article">
    <component :is="prose" />
  </article>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { createContext } from '@baleada/vue-prose'
import prose from '../assets/prose.md'

export default {
  setup () {
    const article = ref(null)

    const fullPath = computed(() => route.fullPath)
    
    const messages = {
      list: {
        searchByQueryPlaceholder: 'Baleada yay!',
      }
    }

    const defaultProps = {
            article: {
              getScrollableContainer: () => article.value
            },
            blockquote: {
              canTweet: true,
              tweetVia: 'BaleadaToolkit',
              tweetUrl: 'current',
            },
            codeblock: {
              canCopy: true,
            },
            heading: {
              classes: '',
              canCopy: true,
            },
          }

    createContext(
      { fullPath },
      {
        messages,
        defaultProps,
        interfaceProps,
      }
    )

    return { article, prose }
  }
}
</script>
