import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-tab',
  styleUrl: 'my-tab.css',
  shadow: true,
})
export class Mytab implements ComponentInterface {
  @Prop() tabKey: number;
  @Prop() name: string;
  @Prop({
    reflectToAttr: true,
  })
  disabled: boolean; // diventa un attributo renderizzato nell html

  render() {
    return <slot />;
  }
}
