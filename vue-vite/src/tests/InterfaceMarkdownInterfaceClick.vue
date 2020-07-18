<template>
  <div class="h-screen w-screen flex flex-col space-y-6 items-center justify-center bg-blue-20">
    <span>string: {{ string }}</span>
    <section class="flex">
      <InterfaceMarkdown
        type="textarea"
        class="p-3 bg-white shadow-5 rounded-4 text-black"
        :value="string"
        @input="inputHandle"
        :hasHaptics="true"
        hapticsClasses="h-2 w-full"
        v-slot="{ status, complete }"
      >
        <div class="block">{{ status.input }}</div>
        <div class="block">{{ status.value }}</div>
        <div class="block">{{ status.arrow }}</div>
        <div class="flex flex-col overflow-x-hidden overflow-y-scroll h-16">
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.bold"
            name="Bold"
          >
            <span name="text" :class="` sr-only`">Bold</span>
            <OcticonsBold24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.italic"
            name="Italic"
          >
              <span name="text" :class="` sr-only`">Italic</span>
              <OcticonsItalic24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.superscript"
            name="Superscript"
          >
              <span name="text" :class="` sr-only`">Superscript</span>
              <div class="relative h-em-1 w-em-1">
                <span class="absolute top-0 left-0 text-1">sup</span>
              </div>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.subscript"
            name="Subscript"
          >
              <span name="text" :class="` sr-only`">Subscript</span>
              <div class="relative h-em-1 w-em-1">
                <span class="absolute bottom-0 left-0 text-1">sub</span>
              </div>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.strikethrough"
            name="Strikethrough"
          >
              <span name="text" :class="` sr-only`">Strikethrough</span>
              <div class="relative flex items-center justify-center h-em-1 w-em-1">
                <span>S</span>
                <OcticonsHorizontalRule24 :class="`  absolute top-0 left-0`" />
              </div>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.code"
            name="Code"
          >
              <span name="text" :class="` sr-only`">Code</span>
              <OcticonsCode24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.link"
            name="Link"
          >
              <span name="text" :class="` sr-only`">Link</span>
              <OcticonsLink24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.codeblock"
            name="Codeblock"
          >
              <span name="text" :class="` sr-only`">Codeblock</span>
              <OcticonsCodeSquare24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.blockquote"
            name="Blockquote"
          >
              <span name="text" :class="` sr-only`">Blockquote</span>
              <OcticonsQuote24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.orderedList"
            name="Ordered List"
          >
              <span name="text" :class="` sr-only`">Ordered List</span>
              <OcticonsListOrdered24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.unorderedList"
            name="Unordered List"
          >
              <span name="text" :class="` sr-only`">Unordered List</span>
              <OcticonsListUnordered24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="() => complete.heading(1)"
            name="Heading 1"
          >
              <span name="text" :class="` sr-only`">Heading 1</span>
              <OcticonsHeading24 :class="'h-6 w-6'" />
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.horizontalRule"
            name="Horizontal Rule"
          >
              <span name="text" :class="` sr-only`">Horizontal Rule</span>
              <OcticonsHorizontalRule24 :class="'h-6 w-6'" />
          </InterfaceClick>
        </div>
      </InterfaceMarkdown>
    </section>
  </div>
</template>

<script>
import { ref, watchEffect, watch } from 'vue'
import { InterfaceMarkdown, InterfaceClick } from '@baleada/vue-interface'
import {
  OcticonsBold24,
  OcticonsItalic24,
  OcticonsChevronUp24,
  OcticonsChevronDown24,
  OcticonsCode24,
  OcticonsLink24,
  OcticonsCodeSquare24,
  OcticonsQuote24,
  OcticonsListOrdered24,
  OcticonsListUnordered24,
  OcticonsHeading24,
  OcticonsHorizontalRule24
} from '@baleada/vue-icons/octicons'

export default {
  components: {
    InterfaceMarkdown,
    InterfaceClick,
    OcticonsBold24,
    OcticonsItalic24,
    OcticonsChevronUp24,
    OcticonsChevronDown24,
    OcticonsCode24,
    OcticonsLink24,
    OcticonsCodeSquare24,
    OcticonsQuote24,
    OcticonsListOrdered24,
    OcticonsListUnordered24,
    OcticonsHeading24,
    OcticonsHorizontalRule24,
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