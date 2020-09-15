import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MarketOrder } from '../../models/table.definitions';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<MarketOrder[]> {
    return this.http.get(`${environment.DB_BASE_URL}/orders`).pipe(
      map((orders: MarketOrder[]) =>
        orders.map((order) => {
          order.dateCreated = new Date().getTime();
          return order;
        })
      )
    );
  }

  getOrder(orderId: number): Observable<MarketOrder> {
    return this.http.get<MarketOrder>(
      `${environment.DB_BASE_URL}/orders/${orderId}`
    );
  }
}
