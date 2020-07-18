<template lang="html">
  <section class="h-screen w-screen flex flex-col items-center justify-center bg-blue-20">
    <InterfaceMarkdown
      type="textarea"
      :hasHaptics="true"
      :class="rootClasses"
      class="max-w-7"
      :hapticsClasses="hapticsClasses"
      :interfaceClasses="inputClasses"
      :contentsClasses="contentsClasses"
      v-bind="attrs"
    >
      <template v-slot="{ status, complete }">
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
      </template>
    </InterfaceMarkdown>
  </section>
</template>

<script>
import { ref, computed, getCurrentInstance } from 'vue'

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
  inheritAttrs: false,
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
  props: {
    type: {
      type: String,
    },
    size: {
      type: Number,
      default: 4,
      validator: value => [3, 4, 5].includes(value)
    },
    decorations: {
      type: Array,
      default: () => [],
      validator: array => array.every(item => ['raised', 'bordered'].includes(item)),
    },
  },
  setup (props) {
    const markdown = ref(''),
          attrs = computed(() => getCurrentInstance().$attrs || {}),
          listeners = computed(() => getCurrentInstance().$listeners || {}),
          sizeClasses = computed(() => sizes[props.size]),
          decorationClasses = computed(() => {
            return props.decorations
              .map(item => decorations[item](props.size))
              .join(' ')
          }),
          rootBase = 'overflow-hidden rounded-t-4 transition duration-2 leading-0 flex items-center w-full p-px-2 space-x-2',
          hapticsBase = 'text-primary-90 fill-current h-px-2 rounded-full transition-none',
          inputBase = 'form-textarea border-0 focus:shadow-0 bg-transparent h-16 w-full border-4',
          contentsBase = 'flex items-center justify-center transition duration-2 leading-0 border-4 p-px-3 rounded-4',
          rootClasses = computed(() => [`baleada-interface-string-${props.size}`, rootBase, decorationClasses.value].join(' ')),
          hapticsClasses = computed(() => [hapticsBase].join(' ')),
          inputClasses = computed(() => [inputBase, sizeClasses.value].join(' ')),
          contentsClasses = computed(() => [contentsBase].join(' '))

    return {
      attrs,
      listeners,
      rootClasses,
      hapticsClasses,
      inputClasses,
      contentsClasses,
    }
  }
}

/* Styles */
const sizes = {
        '3': 'px-2 py-px text-3',
        '4': 'py-1 px-2',
        '5': 'px-4 py-3 text-5 md:text-6',
      },
      decorations = {
        raised: size => 'shadow-5',
        bordered: size => 'bg-transparent border-current' + (size === 3 ? ' border-4' : ' border-5'),
      }
</script>