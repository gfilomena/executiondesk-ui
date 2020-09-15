import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterIconComponent } from './components/filter-icon/filter-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { AllMaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersTableComponent,
    HeaderComponent,
    FilterIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
