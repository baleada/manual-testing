<template lang="html">
  <main class="relative flex flex-col items-center h-screen">
    <div class="flex items-center">
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="store">store</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="remove">remove</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="removeStatus">removeStatus</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="log">log</button>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import { useStoreable } from '@baleada/vue-composition'

export default {
  setup() {
    const el = ref(null),
          storeable = useStoreable('baleadaStoreableKey')

    function store () {
      storeable.value.store('baleadaStoreableValue')
      console.log(storeable.value.status)
    }

    function remove () {
      storeable.value.remove()
      console.log(storeable.value.status)
    }

    function removeStatus () {
      storeable.value.removeStatus()
      console.log(storeable.value.status)
    }

    function log () {
      console.log(storeable.value)
      console.log(JSON.stringify(storeable.value.status, null, 2))
      console.log(JSON.stringify(storeable.value.string, null, 2))
    }

    return {
      el,
      store,
      remove,
      removeStatus,
      log,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
