import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { Globals } from './globals'
import { AngularMultiSelectModule } from 'angular4-multiselect-dropdown/angular4-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Auth components*/
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

/* Index components*/
import { NavComponent } from './components/index/nav/nav.component';
import { HomeComponent } from './components/index/home/home.component';
import { SendImageComponent } from './components/index/send-image/send-image.component';

/* Services */
import { AuthService } from './services/auth.service';
import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { ChannelsService } from './services/channels.service';
import { GroupsService } from './services/groups.service';
import { MessagesService } from './services/messages.service';
import { ProfileService } from './services/profile.service';
import { UsersService } from './services/users.service';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, LogoutComponent,
    NavComponent, 
    HomeComponent,
    SendImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMultiSelectModule,
  ],
  providers: [
    AuthService,
    EnsureAuthenticatedService,
    ChannelsService,
    GroupsService,
    MessagesService,
    ProfileService,
    UsersService,
    ChatService,
    Globals    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
