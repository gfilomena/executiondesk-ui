import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'filter-icon',
  templateUrl: './filter-icon.component.html',
  styleUrls: ['./filter-icon.component.scss'],
})
export class FilterIconComponent {
  constructor(private http: HttpClient) {}

  data;
  order_filtered() {
    console.log('order_filtered');
    this.data = this.http.get('http://localhost:3000/order_filtered');
    console.log('data', this.data);
  }
}
