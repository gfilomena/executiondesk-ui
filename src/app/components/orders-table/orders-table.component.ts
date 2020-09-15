import { GridOptions } from '@ag-grid-community/all-modules';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular/public-api';
import { MarketOrder } from 'src/models/table.definitions';
import { OrdersService } from 'src/services/rest/orders.service';

@Component({
  selector: 'orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  public gridOptions: GridOptions;

  @ViewChild('agGrid') agGrid: AgGridAngular;

  gridApi;
  gridColumnApi;
  defaultColDef = { resizable: true };
  colResizeDefault = 'shift';
  rowData: MarketOrder[];

  columnDefs = [
    {
      headerName: 'Order Number',
      field: 'orderId',
      sortable: true,
      filter: true,
      checkboxSelection: true,
    },
    {
      headerName: 'Status',
      field: 'status',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Elapsed',
      field: 'dateCreated',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Responsible',
      field: 'responsible',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Order Type',
      field: 'orderType',
      sortable: true,
      filter: true,
    },
    { headerName: 'Qty', field: 'quantity', sortable: true, filter: true },
    {
      headerName: '',
      field: 'isinGroupAvailable',
      sortable: true,
      filter: true,
      cellRenderer: this.showFilterIcon,
    },
    {
      headerName: 'Instrument ISIN',
      field: 'instrument',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Execution Type',
      field: 'execType',
      sortable: true,
      filter: true,
    },
    { headerName: 'Validity', field: 'validity', sortable: true, filter: true },
    {
      headerName: 'Asset Class',
      field: 'assetClass',
      sortable: true,
      filter: true,
    },
    { headerName: 'Currency', field: 'currency', sortable: true, filter: true },
    { headerName: 'Market', field: 'market', sortable: true, filter: true },
    {
      headerName: 'Est.Price',
      field: 'estPrice',
      sortable: true,
      filter: true,
    },
  ];

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    },
  };

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  ngOnInit() {
    this.ordersService.getOrders().subscribe((data) => {
      this.rowData = data;
    });
  }

  showFilterIcon(params) {
    return params.data.isinGroupAvailable
      ? `<mat-icon (click)="order_filtered()" class="mat-icon material-icons mat-icon-no-color" role="img" aria-hidden="true">
      filter_alt</mat-icon>`
      : '';
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
