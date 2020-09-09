<template>
  <slot
    v-for="{ key, ref, data } in things"
    :key="key"
    :ref="ref"
    :data="data"
    :name="`slot-${key}`"
  />
</template>

<script>
import { ref } from 'vue'
import { useBindings } from '@baleada/vue-features/util'

export default {
  setup () {
    const refs = ref([]),
          el0 = ref(null),
          el1 = ref(null),
          el2 = ref(null),
          things = ref([
            {
              key: 0,
              ref: el => { console.log(el); (el0.value = el) },
              data: {
                isTrue: true,
              }
            },
            {
              key: 1,
              ref: el => { console.log(el); (el1.value = el) },
              data: {
                isTrue: false,
              }
            },
            {
              key: 2,
              ref: el => { console.log(el); (el2.value = el) },
              data: {
                isTrue: false,
              }
            }
          ])

    useBindings({
      target: el0,
      bindings: {
        role: 'example'
      }
    })

    return {
      things,
      el0,
      el1,
      el2,
    }
  }
}
</script>
