import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from '@angular/common/http';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { RestService } from './services/rest.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    BrowserAnimationsModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FooterModule,
    FixedPluginModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
