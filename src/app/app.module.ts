import { ConfigurationPage } from './../pages/configuration/configuration';
import { PlayersListPage } from './../pages/players-list/players-list';
import { FreePlayPage } from './../pages/free-play/free-play';
import { MultiPlayerPage } from './../pages/multi-player/multi-player';
import { SinglePlayerPage } from './../pages/single-player/single-player';
import { IconEngineModule } from './../components/icon-engine/icon-engine.module';
import { AnimatedThemeModule } from './../components/animated-theme/animated-theme.module';
import { AdMobFree } from '@ionic-native/admob-free';
import { AdmobFreeProvider } from './../providers/admob-free-provider';
import { HttpModule } from '@angular/http';
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
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '4bf02862'
  }
};
 

@NgModule({
  declarations: [
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
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    GameModule,
    BrowserModule,
    HttpModule,
    AnimatedThemeModule,
    IconEngineModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdMobFree,
    AdmobFreeProvider
  ]
})
export class AppModule {}
