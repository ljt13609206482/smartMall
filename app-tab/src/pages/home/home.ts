import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //初始化变量
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
  ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // 获取输入框中输入的数据，保存在val中
    let val = ev.target.value;

    // 如果该值为空字符串，则不要过滤items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
