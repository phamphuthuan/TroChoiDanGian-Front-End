import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SynthesisComponent } from './synthesis/synthesis.component';
import { LuyenaiComponent } from './synthesis/luyenai/luyenai.component';
import { PhongtucComponent } from './synthesis/phongtuc/phongtuc.component';
import { TranchienComponent } from './synthesis/tranchien/tranchien.component';
import { TritueComponent } from './synthesis/tritue/tritue.component';
import { NghenghiepComponent } from './synthesis/nghenghiep/nghenghiep.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContentComponent } from './about/content/content.component';
import { VideocontentComponent } from './about/videocontent/videocontent.component';
import { SideshowsComponent } from './homepage/sideshows/sideshows.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SynthesisComponent,
    LuyenaiComponent,
    PhongtucComponent,
    TranchienComponent,
    TritueComponent,
    NghenghiepComponent,
    AboutComponent,
    HomepageComponent,
    ContentComponent,
    VideocontentComponent,
    SideshowsComponent,
    ContactComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
