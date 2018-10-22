import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule, 
        MatGridListModule, 
        MatCardModule, 
        MatMenuModule, 
        MatInputModule, 
        MatSelectModule, 
        MatRadioModule, MatTableModule, MatPaginatorModule, MatSortModule 
      } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TroutCardsComponent } from './trout-cards/trout-cards.component';
import { LuresComponent } from './lures/lures.component';
import { FliesComponent } from './flies/flies.component';
import { JumboHomeComponent } from './jumbo-home/jumbo-home.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { HomeComponent } from './home/home.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { MyFishingHoleFormComponent } from './my-fishing-hole-form/my-fishing-hole-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFishingHolesComponent } from './my-fishing-holes/my-fishing-holes.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyFishingHoleFeedComponent } from './my-fishing-hole-feed/my-fishing-hole-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'auth', component: UserProfileComponent }, 
  { path: 'dashboard', component: DashboardHomeComponent }, 
  { path: 'trout-cards', component: TroutCardsComponent }, 
  { path: 'lures', component: LuresComponent }, 
  { path: 'flies', component: FliesComponent }, 
  { path: 'my-fishing-holes', component: MyFishingHolesComponent}, 
  { path: '**', component: Notfound404Component }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    TroutCardsComponent,
    LuresComponent,
    FliesComponent,
    JumboHomeComponent,
    Notfound404Component,
    HomeComponent,
    DashboardHomeComponent,
    MyFishingHoleFormComponent,
    MyFishingHolesComponent,
    MyFishingHoleFeedComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    CoreModule, 
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule, 
    FormsModule, 
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    ), MatInputModule, MatSelectModule, MatRadioModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatSortModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
