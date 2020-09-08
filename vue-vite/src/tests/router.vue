<template>
  <pre class="bg-blue-10"><code>{{ routerJson }}</code></pre>
  <pre class="bg-blue-30"><code>{{ routeJson }}</code></pre>
</template>

<script>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup () {
    const router = useRouter(),
          route = useRoute(),
          routerJson = computed(() => JSON.stringify(router, null, 2)),
          routeJson = computed(() => JSON.stringify(route, null, 2))

    console.log(router)
    console.log(route)

    return {
      routerJson,
      routeJson
    }
  }
}
</script>
