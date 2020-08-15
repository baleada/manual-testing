<template>
  <div>this is nested</div>
  <div>{{ message }}</div>
</template>

<script>
import { useThing } from '../../assets/js'

export default {
  setup () {
    return { message: useThing() }
  }
}
</script>
