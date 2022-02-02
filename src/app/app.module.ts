import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { BuyLandComponent } from './buy-land/buy-land.component';
import { BuyListComponent } from './buy-list/buy-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { LandDetailsComponent } from './land-details/land-details.component';
import { LeaseLandComponent } from './lease-land/lease-land.component';
import { LeaseListComponent } from './lease-list/lease-list.component';
import { EditLeaseListComponent } from './edit-lease-list/edit-lease-list.component';
import { LeaseDetailsComponent } from './lease-details/lease-details.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { MapComponent } from './map/map.component';
import { EditCoordinatesComponent } from './edit-coordinates/edit-coordinates.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    BuyLandComponent,
    BuyListComponent,
    EditListComponent,
    LandDetailsComponent,
    LeaseLandComponent,
    LeaseListComponent,
    EditLeaseListComponent,
    LeaseDetailsComponent,
    SearchEngineComponent,
    MapComponent,
    EditCoordinatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
