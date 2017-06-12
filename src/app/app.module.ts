import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { HomePage } from '../pages/home/home';
import { CustomModal } from '../pages/home/custom-modal-sample';
import { BrowserModule }  from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { TabsPage } from '../pages/tabs/tabs';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainServices } from '../services/main.service';

import {ChartsModule} from 'ng2-charts/charts/charts';
import { DevExtremeModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CustomModal,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ModalModule.forRoot(),
    BootstrapModalModule,
    FormsModule,
    BrowserModule,
    ChartsModule,
    DevExtremeModule,
    DxChartModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CustomModal,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MainServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
