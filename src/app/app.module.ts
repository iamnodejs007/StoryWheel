import { IconEngine } from './../components/icon-engine/icon-engine';
import { IconText } from './../components/icon-text/icon-text';
import { IconControls } from './../components/icon-controls/icon-controls';
import { PlayerSelector } from './../components/player-selector/player-selector';
import { CircleProgressBar } from './../components/circle-progress-bar/circle-progress-bar';
import { HttpModule } from '@angular/http';
import { IconChooser } from './../components/icon-chooser/icon-chooser';
import { GameModule } from './../pages/game/game.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IconChooser,
    CircleProgressBar,
    PlayerSelector,
    IconControls,
    IconText,
    IconEngine
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GameModule,
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
