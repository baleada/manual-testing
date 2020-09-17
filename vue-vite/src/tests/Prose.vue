<template>
  <ul>
    <li
      v-for="heading in context.article.headings"
      :key="heading.slug"
    >
      <RouterLink :to="`#${heading.slug}`">{{ heading.text }}</RouterLink>
    </li>
  </ul>

  <ul>
    <li
      v-for="{ tag, src, ariaLabel } in context.article.media"
      class="h-13"
      :key="src"
    >
      <component :is="tag" class="max-h-full" :src="src" />
      <p>{{ ariaLabel }}</p>
    </li>
  </ul>

  <main class="mt-10">
    <ProseArticle class="px-10">
      <component :is="prose" />
    </ProseArticle>
  </main>

  <pre class="mt-10"><code>{{ contextJson }}</code></pre>
</template>

<script>
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { createContext } from '@baleada/vue-prose'
import prose from '../assets/test.prose'

export default {
  setup () {
    const fullPath = computed(() => useRoute().fullPath)
    
    const messages = {
      list: {
        searchByQueryPlaceholder: 'Baleada yay!',
      }
    }

    const defaultProps = {
            blockquote: {
              readerCanTweet: true,
              tweetVia: 'BaleadaToolkit',
              tweetUrl: 'current',
            },
            codeblock: {
              readerCanCopy: true,
              // hasLineNumbers: true,
              // hasLang: true,
            },
            heading: {
              classes: '',
              readerCanCopy: false
            },
            list: {
              // readerCanSearch: true,
              // readerCanChangeSearchCaseSensitivity: true,
            },
            table: {
              // readerCanSearch: true,
              // readerCanChangeSearchCaseSensitivity: true,
            },
            media: {
              classes: 'h-13',
            }
          }

    const interfaceProps = {}

    const context = createContext(
      { fullPath },
      {
        messages,
        defaultProps,
        interfaceProps,
      }
    )

    const contextJson = computed(() => JSON.stringify(context, null, 2))
    
    return {
      prose,
      context,
      contextJson,
    }
  }
}
</script>

<style lang="postcss">
svg {
  @apply h-6 w-6;
}

.baleada-prose-heading {
  @apply mt-12 mb-6 text-7;
}

.baleada-prose-media .baleada-prose-contents {
  @apply h-full;
}

.baleada-prose-media .baleada-prose-contents * {
  @apply max-h-full;
}

[role="grid"] {
  display: table;
}

[role="rowgroup"] {
  display: table-row-group;
}

[role="rowgroup"]:first-child {
  display: table-header-group;
}

[role="row"] {
  display: table-row;
}

[role="columnheader"],
[role="cell"] {
  display: table-cell;
}
</style>
