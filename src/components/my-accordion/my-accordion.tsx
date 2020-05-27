import { Component, ComponentInterface, h } from '@stencil/core';


@Component({
  tag: 'my-accordion',
  styleUrl: 'my-accordion.css',
  shadow: true,
})
export class MyAccordion implements ComponentInterface {

  render() {
    return (
      <div class='content'>
        <div class='accordion'>
          <li class='acc-item' id='user'>
            <a href='#user' class='btn'>User profile</a>
            <div class='submenu'>
              <a href='#'>Username</a>
              <a href='#'>Info</a>
              <i class="fas fa-adjust"></i>
            </div>
          </li>

          <li class='acc-item' id='emails'>
            <a href='#emails' class='btn'>Emails</a>
            <div class='submenu'>
              <a href='#'>Username</a>
              <a href='#'>Info</a>
            </div>
          </li>

          <li class='acc-item' id='settings'>
            <a href='#setting' class='btn'>Settings</a>
            <div class='submenu'>
              <a href='#'>Username</a>
              <a href='#'>Info</a>
            </div>
          </li>

          <li class='acc-item' id='member'>
            <a href='#member' class='btn'>MemberShop</a>
            <div class='submenu'>
              <a href='#'>Username</a>
              <a href='#'>Info</a>
            </div>
          </li>

          <li class='acc-item'>
            <a href='#' class='btn'>Exit</a>
          </li>
        </div>
      </div >
    );
  }

}
