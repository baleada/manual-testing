<template lang="html">
<ProseLayout
  :fullPathInjectKey="fullPathInjectKey"
  :defaultPropsInjectKey="defaultPropsInjectKey"
>
  <ThreeColumn />
</ProseLayout>
</template>

<script>
import { ref, computed, provide } from '@vue/composition-api'

import useRouter from '~/assets/js/useRouter.js'

import ThreeColumn from '~/components/ThreeColumn'

export default {
  components: {
    ThreeColumn
  },
  setup() {
    const { route } = useRouter(),
          fullPath = computed(() => route.value.fullPath),
          fullPathInjectKey = Symbol('fullPath'),
          lang = 'en',
          messages = computed(() => {
            return lang === 'en' && {
              grid: {
                changeFilterCaseSensitivityLabel: 'butt',
              }
            }
          }),
          messagesInjectKey = Symbol('messages'),
          defaultPropsInjectKey = Symbol('defaultProps'),
          defaultProps = {
            article: {
              classes: 'butt',
            },
            aside: {
              classes: 'butt',
            },
            blockquote: {
              classes: 'butt',
            },
            codeblock: {
              classes: 'butt',
            },
            details: {
              classes: 'butt',
            },
            grid: {
              classes: 'butt',
            },
            heading: {
              classes: 'butt',
            },
            list: {
              classes: 'butt',
            },
            media: {
              classes: 'butt',
            },
            section: {
              classes: 'butt',
            },
          }


    provide(fullPathInjectKey, fullPath)
    provide(messagesInjectKey, messages)
    provide(defaultPropsInjectKey, defaultProps)

    return {
      fullPathInjectKey,
      messagesInjectKey,
      defaultPropsInjectKey,
    }
  },
}
</script>

<style>
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
[role="gridcell"] {
  display: table-cell;
  border: 1px solid black;
  padding: 1rem;
}

[role="columnheader"]:focus,
[role="gridcell"]:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
</style>
