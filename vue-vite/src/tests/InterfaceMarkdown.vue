<template>
  <div class="h-screen w-screen flex flex-col space-y-6 items-center justify-center bg-blue-20">
    <span>string: {{ string }}</span>
    <InterfaceMarkdown
      type="textarea"
      class="p-3 bg-white shadow-5 rounded-4 text-black"
      :value="string"
      @input="inputHandle"
      :hasHaptics="true"
      hapticsClasses="h-2 w-full"
      v-slot="{ complete }"
    >
      <button @click="complete.bold">
        bold
      </button>
    </InterfaceMarkdown>
  </div>
</template>

<script>
import { ref, watchEffect, watch } from 'vue'
import { InterfaceMarkdown } from '@baleada/vue-interface'

export default {
  components: {
    InterfaceMarkdown,
  },
  setup () {
    const string = ref(''),
          inputHandle = ({ target: { value } }) => string.value = value

    return {
      string,
      inputHandle,
    }
  }
}
</script>

<style lang="postcss">
rectangle {
  @apply bg-black;
}

</style>
