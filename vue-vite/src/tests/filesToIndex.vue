<template>
  <span>{{ message }}</span>
</template>

<script>
import { useThing } from '../assets/js'

export default {
  setup () {
    return { message: useThing() }
  }
}
</script>
