import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'andre-accordion',
  styleUrl: 'andre-accordion.css',
  shadow: true,
})
export class AndreAccordion {

  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  @Prop() label: string;

  @Prop() description: string;

  @Prop() width: string;

  //@Prop() color: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <div class='cont'>
        <button class='accordion'
          style={{
            width: this.width,
          }}
          onClick={() => this.toggleComponent()} >
          {this.label}
          {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>
        <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
          style={{ width: this.width }}
        >
          <p>{this.description}</p>
        </div>
      </div>
    )
  }

}
