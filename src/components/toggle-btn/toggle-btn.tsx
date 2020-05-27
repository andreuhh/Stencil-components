import {
  Component,
  ComponentInterface,
  Host,
  h,
  State,
  Event,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'toggle-btn',
  styleUrl: 'toggle-btn.css',
  shadow: true,
})
export class ToggleBtn implements ComponentInterface {
  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
    console.log('im toogled');
  }

  render() {
    return (
      <Host>
        <div class="container">
          <button
            id="toggle"
            class="btn btn-toggle"
            onClick={() => this.toggleComponent()}
          >
            Show modal
      </button>
          <div id="text-box"
            class={`text-box ${this.toggle ? 'show' : ''}`}
          >
            <div
              id="close"
              class="close"
              onClick={() => this.toggleComponent()}
            >X</div>

            <h3>ADD TO CART</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <main></main>
        </div>
      </Host>
    );
  }

}
