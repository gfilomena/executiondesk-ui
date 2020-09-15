// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'icon-button-renderer',
  template: `
    <button
      type="button"
      *ngIf="params.data.isinGroupAvailable"
      (click)="onClick($event)"
    >
      {{ label }}
    </button>
  `,
})
export class IconButtonRendererComponent implements ICellRendererAngularComp {
  params;
  label: string;
  show: boolean;

  agInit(params): void {
    this.params = params;
    this.show = params.data.isinGroupAvailable;
    console.log('this.show', this.show);
    if (params.data.isinGroupAvailable) {
      //console.log('this.show', this.show);
    }
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        // ...something
      };
      this.params.onClick(params);
    }
  }
}
