<template lang="html">
<ProseLayout
  :fullPathInjectKey="fullPathInjectKey"
  :messagesInjectKey="messagesInjectKey"
>
  <ThreeColumn />
</ProseLayout>
</template>

<script>
import { computed, provide } from '@vue/composition-api'

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
          messagesInjectKey = Symbol('messages')


    provide(fullPathInjectKey, fullPath)
    provide(messagesInjectKey, messages)

    return {
      fullPathInjectKey,
      messagesInjectKey,
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
