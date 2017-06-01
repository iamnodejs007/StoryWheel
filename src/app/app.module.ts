import { ConfigurationPage } from './../pages/configuration/configuration';
import { AnimatedTheme } from './../components/animated-theme/animated-theme';
import { FreePlayPage } from '../pages/free-play/free-play';
import { SinglePlayerPage } from './../pages/single-player/single-player';
import { IconEngine } from './../components/icon-engine/icon-engine';
import { IconText } from './../components/icon-text/icon-text';
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
import { MultiPlayerPage } from "../pages/multi-player/multi-player";
import { PlayersListPage } from "../pages/players-list/players-list";

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
    IconText,
    IconEngine,
    SinglePlayerPage,
    MultiPlayerPage,
    FreePlayPage,
    PlayersListPage,
    AnimatedTheme,
    ConfigurationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GameModule,
    BrowserModule,
    HttpModule,
    GameModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SinglePlayerPage,
    MultiPlayerPage,
    FreePlayPage,
    PlayersListPage,
    ConfigurationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
