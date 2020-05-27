import {
  Component,
  ComponentInterface,
  Host,
  h,
  State,
  Event,
  Prop,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'inline-edit',
  styleUrl: 'inline-edit.css',
  shadow: true,
})
export class InlineEdit implements ComponentInterface {

  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  @Prop() scritta: string = 'ciaone';

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
    //console.log('ciao')
  }

  render() {
    return (
      <Host>
        <input
          placeholder={this.scritta}
          class={`input ${this.toggle ? 'show' : ''}`}
        >inline edit</input>

        <div
          class={`edit ${this.toggle ? 'hide-edit' : ''}`}
          onClick={() => this.toggleComponent()}
        >Edit</div>
        <div
          class={`confirm ${this.toggle ? 'show-now' : ''}`}
          onClick={() => this.toggleComponent()}
        >x</div>

        <div
          class={`confirm dx ${this.toggle ? 'show-now' : ''}`}
          onClick={() => this.toggleComponent()}
        >ok</div>
      </Host>
    );
  }

}
