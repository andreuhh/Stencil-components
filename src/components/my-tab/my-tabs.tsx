import {
  Component,
  ComponentInterface,
  Prop,
  Element,
  State,
  h,
  Host,
  EventEmitter,
  Event,
} from '@stencil/core';

@Component({
  tag: 'my-tabs',
  styleUrl: 'my-tab.css',
  shadow: true,
})
export class MyTabs implements ComponentInterface {
  @State() tabs: HTMLMyTabElement[] = [];
  @State() active: number = 1;

  @Element() el: HTMLElement;

  @Prop() defaultActive: number = 1;

  @Event({
    eventName: 'changed',
  })
  onChanged: EventEmitter;

  // esegue codice prima del caricamento di my-tabs
  componentWillLoad() {
    this.active = this.defaultActive || 1;
    this.tabs = Array.from(this.el.querySelectorAll('my-tab')); // Crea una nuova istanza array

    if (this.tabs.length === 0) {
      throw new Error('[my-tabs] Must have at least one tab');
    }
  }

  openTab(index) {
    if (index >= this.tabs.length) {
      throw new Error(
        `[my-tabs] Index ${index} is out of bounds of tabs length`
      );
    }
    if (!this.tabs[index].disabled) {
      const active = index + 1;
      this.active = active;
      this.onChanged.emit({ tab: active });
    }
  }

  render() {
    return (
      <Host>
        <div class="tabs-list">
          {this.tabs.map((tab, index) => (
            <button
              key={index}
              class={`tab-button ${this.active === index + 1 ? 'active' : ''}`}
              role="tab"
              disabled={tab.disabled}
              onClick={() => this.openTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div class="content">
          <slot name={`tab_${this.active}`} />
        </div>
      </Host>
    );
  }
}
