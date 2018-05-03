import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import MyButton from './Button.vue';

storiesOf('MyButton', module)
  .add('Rounded', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('Square', () => ({
    components: { MyButton },
    template: '<my-button :rounded="false">square</my-button>'
  }))
  ;