interface MarketOrder {
  orderId: number;
  status: string;
  dateCreated: number;
  responsible: string;
  orderType: string;
  quantity: number;
  isinGroupAvailable: boolean;
  instrument: string;
  execType: string;
  validity: string;
  assetClass: string;
  currency: string;
  market: string;
  estPrice: number;
}

interface FieldTable {
  field: string;
  headerName: string;
  hide?: boolean;
  checkboxSelection?: boolean;
  headerCheckboxSelection?: boolean;
  headerCheckboxSelectionFilteredOnly?: boolean;
  enableRowGroup?: boolean;
  editable?: boolean;
  filter?: string;
  sortable?: boolean;
  cellRenderer?: any;
}

enum TimerStatus {
  GOOD = 'primary',
  WARNING = 'accent',
  ALERT = 'warn',
}

export { MarketOrder, FieldTable, TimerStatus };
