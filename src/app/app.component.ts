import { Component } from '@angular/core';

@Component({
  selector: 'da-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'HWBank';
  menu = [
    {
      title: '余额',
      id:'balance',
      open: true,
    },
    {
      title: '转账',
      id:'transfer',
    },
    {
      title: '转账记录',
      id:'record',
      open: true,
    },
  ];
  menuSelected:any;
  itemClick(event:any) {
    console.log(event);
    this.menuSelected = event.item;
    
  }
}
