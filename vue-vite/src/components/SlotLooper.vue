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

export default {
  setup () {
    const refs = ref([]),
          things = ref([
            {
              key: 0,
              ref: el => (refs.value = [...refs.value, el]),
              data: {
                isTrue: true,
              }
            },
            {
              key: 1,
              ref: el => (refs.value = [...refs.value, el]),
              data: {
                isTrue: false,
              }
            },
            {
              key: 2,
              ref: el => (refs.value = [...refs.value, el]),
              data: {
                isTrue: false,
              }
            }
          ])

    return {
      things
    }
  }
}
</script>
