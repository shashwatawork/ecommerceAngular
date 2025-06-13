import { Component } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  activeTab: string | null = '';

  setActiveTab(tab: string) {
    this.activeTab = this.activeTab === tab ? null : tab;
  }
}
