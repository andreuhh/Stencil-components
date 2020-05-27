import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'wrapper-accordion',
  styleUrl: 'wrapper-accordion.css',
  shadow: true,
})
export class WrapperAccordion implements ComponentInterface {

  render() {
    return (
      <Host>
        <andre-accordion width='100%' label='How do i find my member number?'
          description="Find your member number online. You can also call Customer Support
        at 1-800-426-4840 (U.S. and Canada) or 1-253-891-2500 (International)..">
        </andre-accordion>
        <andre-accordion width='100%' label='Does every member get an Annual Dividend?'
          description="Only active REI Co-op members receive an Annual Dividend notice. 
     To be an active member, you need to make net merchandise or shipping purchases
     (purchases minus credits and returns) of at least $10 per year, 
     unless you joined during that calendar year.">
        </andre-accordion>
        <andre-accordion width='100%' label='When does my divided expire?'
          description='Your dividend expires on Jan. 3, just under 
        two years after it has been issued. or example, your 2018 dividend earned on 2017 
        purchases will expire in January 2020.'

        >
        </andre-accordion>
      </Host>
    );
  }

}
