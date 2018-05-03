<template>
  <button class="button" :style="{color: color, borderColor: color}" @click="handleClick" :class="{rounded: rounded}"><slot></slot></button>
</template>

<script>
  export default {
    props: {
      rounded: Boolean,
      handleClick: {
        default: () => () => null
      },
      color: {
        default: 'white'
      }
    }
  }
</script>

<style>
  .rounded {
    border-radius: 5px;
  }
  .button {
    /* margin: 0 10px 20px; */
    padding: 10px 20px;
    border: none;
    display: inline-block;
    background-color: #884898;
    box-shadow: 0 6px #884898;
    font-size: 114%;
    line-height: 1;
    color: #fff;
    position: relative;
    cursor: pointer;
  }

  .button:hover {
    box-shadow: 0 5px #884898;
    top: 1px;
  }
  .button:active {
  background-color: #932993;
    box-shadow: 0 0 #884898;
    top: 6px;
  }
 
</style>