<template>
  <input v-model="mode" type="checkbox" id="theme" value="dark"/>
  <label for="theme"></label>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const mode = ref(false)

    return { mode }
  }
}
</script>

<style lang="scss">
input[type=checkbox] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  width: 50px;
  height: 25px;
  background: white;
  float: right;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 19px;
  height: 19px;
  background: #252423;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #252423;
}

input:checked + label:after {
  left: calc(100% - 5px);
  background: white;
  transform: translateX(-100%);
}

label:active:after {
  width: 45px;
}
</style>
