<template lang="html">
  <main class="p-8">
    <InterfaceMarkdown
      class="overflow-hidden w-full max-w-2 rounded-t-4 bg-blue-10"
      placeholder="yay..."
      :hasHaptics="true"
      :hapticsMaxOpacity="0.1"
      :hapticsTiming="materialDecelerated"
      descendant1Classes="block w-1/2 fill-current text-black z-20"
      descendant2Classes="relative h-9  w-full block bg-green-1"
      v-slot="{ status, complete: { bold, italic, superscript, subscript, strikethrough, inlineCode, link } }"
      :keycombos="{
        bold: 'shift+ctrl+alt+b',
      }"
      :value="thing"
      @input="evt => thing = evt.target.value"
    >
      <div>
        <span>{{ status.input }}</span>
      </div>
      <div class="flex flex-col">
        <button type="button" @click="bold">bold</button>
        <button type="button" @click="italic">italic</button>
        <button type="button" @click="superscript">superscript</button>
        <button type="button" @click="subscript">subscript</button>
        <button type="button" @click="strikethrough">strikethrough</button>
        <button type="button" @click="inlineCode">inlineCode</button>
        <button type="button" @click="link">link</button>
      </div>
    </InterfaceMarkdown>

    <!-- <InterfaceWrapper /> -->

    <!-- <InterfaceString
      class="overflow-hidden w-full max-w-2 rounded-t-4 p-6 bg-blue-10"
      type="text"
      placeholder="yay..."
      :hasHaptics="true"
      :hapticsTiming="materialDecelerated"
      hapticsAlign="bottom"
      descendant1Classes="h-1 block fill-current text-green-6"
      descendant2Classes="relative h-9  w-full block bg-green-1"
      :value="thing"
      @input="evt => thing = evt.target.value"
      @blur="log"
      @click="log"
      v-slot="{ status }"
    >
      <span :class="status.input === 'focused' ? 'text-red-6' : 'text-purple-6'">{{ status.input }}</span>
    </InterfaceString> -->

    <!-- <InterfaceClick
      tag="a"
      href="/interface"
      class="inline-block overflow-hidden p-1 w-9 h-9 shadow-5 rounded-full bg-blue-6 text-blue-1"
      :hasHaptics="true"
      :hapticsTiming="materialDecelerated"
    >
      <EvaGlobe2 :class="'fill-current'"/>
    </InterfaceClick> -->
  </main>
</template>

<script>
import { ref } from '@vue/composition-api'

import { InterfaceClick, InterfaceString, InterfaceMarkdown } from '@baleada/vue-interface'
import { EvaGlobe2 } from '@baleada/vue-icons/eva-icons'
import InterfaceWrapper from '~/components/InterfaceWrapper.vue'

import { linear, verouEaseInOut, verouEaseOut, materialDecelerated } from '@baleada/animateable-utils'

export default {
  components: { EvaGlobe2, InterfaceClick, InterfaceString, InterfaceMarkdown, InterfaceWrapper,
  },
  setup () {
    function log (event) {
      console.log('yay')
    }

    const thing = ref('')

    return {
      materialDecelerated,
      log,
      thing,
    }
  }
}
</script>

<style>
</style>