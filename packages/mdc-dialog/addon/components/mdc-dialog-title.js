import Component from '@ember/component';
import layout from '../templates/components/mdc-dialog-title';

export default Component.extend({
  layout,

  classNames: ['mdc-dialog__title'],

  tagName: 'h2'
});
