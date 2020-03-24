<template lang="html">
<ProseLayout
  :fullPathInjectKey="fullPathInjectKey"
  :defaultPropsInjectKey="defaultPropsInjectKey"
  :interfacePropsInjectKey="interfacePropsInjectKey"
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
              canCopy: true,
            },
            details: {
              classes: 'butt',
            },
            grid: {
              classes: 'butt',
              canFilterByQuery: true,
            },
            heading: {
              classes: 'butt',
              canCopy: true,
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
          },
          interfacePropsInjectKey = Symbol('interfaceProps'),
          interfaceProps = {
            button: {
              hasHaptics: true,
              hapticsMaxOpacity: .1,
            }
          }


    provide(fullPathInjectKey, fullPath)
    provide(messagesInjectKey, messages)
    provide(defaultPropsInjectKey, defaultProps)
    provide(interfacePropsInjectKey, interfaceProps)

    return {
      fullPathInjectKey,
      messagesInjectKey,
      defaultPropsInjectKey,
      interfacePropsInjectKey,
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
