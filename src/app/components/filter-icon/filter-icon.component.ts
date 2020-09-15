import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'filter-icon',
  templateUrl: './filter-icon.component.html',
  styleUrls: ['./filter-icon.component.scss'],
})
export class FilterIconComponent implements ICellRendererAngularComp {
  constructor(private http: HttpClient) {}

  value: string;
  params: any;

  agInit(params: any) {
    if (params.data) {
      this.params = params;
      console.log('params', params);
    }
  }

  refresh(): boolean {
    return false;
  }
  data;
  order_filtered() {
    this.params.data.isinGroupAvailable = false;

    console.log('order_filtered');
    this.data = this.http.get('http://localhost:3000/order_filtered');
    console.log('data', this.data);
  }
}
