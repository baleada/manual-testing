<template lang="html">
  <section class="flex max-w-7">
    <InterfaceMarkdown
      type="textarea"
      :hasHaptics="true"
      :class="rootClasses"
      :descendant1Classes="hapticsClasses"
      :descendant2Classes="inputClasses"
      :descendant3Classes="contentsClasses"
      v-bind="attrs"
      v-on="listeners"
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
            <template>
              <span name="text" :class="` sr-only`">Bold</span>
            </template>
            <template>
              <OcticonsBold24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.italic"
            name="Italic"
          >
            <template>
              <span name="text" :class="` sr-only`">Italic</span>
            </template>
            <template>
              <OcticonsItalic24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.superscript"
            name="Superscript"
          >
            <template>
              <span name="text" :class="` sr-only`">Superscript</span>
            </template>
            <template>
              <div class="relative h-em-1 w-em-1">
                <span class="absolute top-0 left-0 text-1">sup</span>
              </div>
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.subscript"
            name="Subscript"
          >
            <template>
              <span name="text" :class="` sr-only`">Subscript</span>
            </template>
            <template>
              <div class="relative h-em-1 w-em-1">
                <span class="absolute bottom-0 left-0 text-1">sub</span>
              </div>
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.strikethrough"
            name="Strikethrough"
          >
            <template>
              <span name="text" :class="` sr-only`">Strikethrough</span>
            </template>
            <template>
              <div class="relative flex items-center justify-center h-em-1 w-em-1">
                <span>S</span>
                <OcticonsHorizontalRule24 :class="`  absolute top-0 left-0`" />
              </div>
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.code"
            name="Code"
          >
            <template>
              <span name="text" :class="` sr-only`">Code</span>
            </template>
            <template>
              <OcticonsCode24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.link"
            name="Link"
          >
            <template>
              <span name="text" :class="` sr-only`">Link</span>
            </template>
            <template>
              <OcticonsLink24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.codeblock"
            name="Codeblock"
          >
            <template>
              <span name="text" :class="` sr-only`">Codeblock</span>
            </template>
            <template>
              <OcticonsCodeSquare24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.blockquote"
            name="Blockquote"
          >
            <template>
              <span name="text" :class="` sr-only`">Blockquote</span>
            </template>
            <template>
              <OcticonsQuote24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.orderedList"
            name="Ordered List"
          >
            <template>
              <span name="text" :class="` sr-only`">Ordered List</span>
            </template>
            <template>
              <OcticonsListOrdered24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.unorderedList"
            name="Unordered List"
          >
            <template>
              <span name="text" :class="` sr-only`">Unordered List</span>
            </template>
            <template>
              <OcticonsListUnordered24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="() => complete.heading(1)"
            name="Heading 1"
          >
            <template>
              <span name="text" :class="` sr-only`">Heading 1</span>
            </template>
            <template>
              <OcticonsHeading24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
          <InterfaceClick
            class="flex-shrink-0 bg-white text-primary-100 hover:text-primary-50"
            :decorations="['grows', 'bordered']"
            type="button"
            @click="complete.horizontalRule"
            name="Horizontal Rule"
          >
            <template>
              <span name="text" :class="` sr-only`">Horizontal Rule</span>
            </template>
            <template>
              <OcticonsHorizontalRule24 :class="'h-6 w-6'" />
            </template>
          </InterfaceClick>
        </div>
      </template>
    </InterfaceMarkdown>
  </section>
</template>

<script>
import { computed, getCurrentInstance } from 'vue'

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
    console.log('here')
    const attrs = computed(() => getCurrentInstance().$attrs),
          listeners = computed(() => getCurrentInstance().$listeners),
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