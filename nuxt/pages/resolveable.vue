<template lang="html">
  <main class="relative flex flex-col items-center h-screen bg-gray-9">
    <div class="flex items-center">
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="resolve">resolve</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="log">log</button>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import { useResolveable } from '@baleada/vue-composition'

const responseStub = 'stub',
      promiseStub = new Promise(function(resolve, reject) {
        window.setTimeout(function() {
          resolve(responseStub)
        }, 2000)
      })

export default {
  setup() {
    const el = ref(null),
          resolveable = useResolveable(() => promiseStub)

    console.log(resolveable.value.promiseGetter())

    function resolve () {
      resolveable.value.resolve()
        .then(instance => {
          console.log(instance)
          console.log(resolveable.value.response)
        })
    }

    function log () {
      console.log(JSON.stringify(resolveable.value.status, null, 2))
      console.log(JSON.stringify(resolveable.value.responseJson, null, 2))
    }

    return {
      el,
      resolve,
      log,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
