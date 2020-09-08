<template>
  <SlotLooper>
    <template #slot-0="{ key, ref, data }">
      <div
        :ref="ref"
      >
        <div>{{ key }}</div>
        <div>{{ data.isTrue }}</div>
      </div>
    </template>
    <template #slot-1="{ key, ref, data }">
      <div
        :ref="ref"
      >
        <div>{{ key }}</div>
        <div>{{ data.isTrue }}</div>
      </div>
    </template>
    <template #slot-2="{ key, ref, data }">
      <div
        :ref="ref"
      >
        <div>{{ key }}</div>
        <div>{{ data.isTrue }}</div>
      </div>
    </template>
  </SlotLooper>
</template>

<script>
import { SlotLooper } from '../components'

export default {
  components: {
    SlotLooper
  },
}
</script>
