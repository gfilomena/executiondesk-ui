import { GridOptions } from '@ag-grid-community/all-modules';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular/public-api';
import { FieldTable, MarketOrder } from 'src/models/table.definitions';
import { OrdersService } from 'src/services/rest/orders.service';
import { FilterIconComponent } from '../filter-icon/filter-icon.component';

@Component({
  selector: 'orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  public gridOptions: GridOptions;

  @ViewChild('agGrid') agGrid: AgGridAngular;

  gridApi;
  gridColumnApi;
  defaultColDef = { resizable: true };
  colResizeDefault = 'shift';
  columnDefs: FieldTable[];
  autoGroupColumnDef: any;
  rowData: MarketOrder[];
  frameworkComponents: any;

  constructor(private ordersService: OrdersService) {
    this.columnDefs = [
      {
        headerName: 'Order Number',
        field: 'orderId',
        sortable: true,
        checkboxSelection: true,
      },
      {
        headerName: 'Status',
        field: 'status',
        sortable: true,
      },
      {
        headerName: 'Elapsed',
        field: 'dateCreated',
        sortable: true,
      },
      {
        headerName: 'Responsible',
        field: 'responsible',
        sortable: true,
      },
      {
        headerName: 'Order Type',
        field: 'orderType',
        sortable: true,
      },
      { headerName: 'Qty', field: 'quantity', sortable: true },
      {
        headerName: '',
        field: 'isinGroupAvailable',
        sortable: true,
        cellRenderer: 'filterIconRenderer',
      },
      {
        headerName: 'Instrument ISIN',
        field: 'instrument',
        sortable: true,
      },
      {
        headerName: 'Execution Type',
        field: 'execType',
        sortable: true,
      },
      {
        headerName: 'Validity',
        field: 'validity',
        sortable: true,
      },
      {
        headerName: 'Asset Class',
        field: 'assetClass',
        sortable: true,
      },
      {
        headerName: 'Currency',
        field: 'currency',
        sortable: true,
      },
      { headerName: 'Market', field: 'market', sortable: true },
      {
        headerName: 'Est.Price',
        field: 'estPrice',
        sortable: true,
      },
    ];

    this.autoGroupColumnDef = {
      headerName: 'Model',
      field: 'model',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        checkbox: true,
      },
    };

    this.frameworkComponents = {
      filterIconRenderer: FilterIconComponent,
    };
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  ngOnInit() {
    this.ordersService.getOrders().subscribe((data) => {
      this.rowData = data;
    });
  }

  showFilterIcon(params) {
    if (params.data.isinGroupAvailable) {
    }

    // return params.data.isinGroupAvailable
    //   ? `<mat-icon (click)="order_filtered()" class="mat-icon material-icons mat-icon-no-color" role="img" aria-hidden="true">
    //   filter_alt</mat-icon>`
    //   : '';
  }
  //<button (click)="test()"><i class="material-icons" >filter_alt</i></button>
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + ' ' + node.model)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
