import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuyenaiComponent } from './synthesis/luyenai/luyenai.component';
import { NghenghiepComponent } from './synthesis/nghenghiep/nghenghiep.component';
import { PhongtucComponent } from './synthesis/phongtuc/phongtuc.component';
import { TranchienComponent } from './synthesis/tranchien/tranchien.component';
import { TritueComponent } from './synthesis/tritue/tritue.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Trang chủ', component: HomepageComponent },
  { path: 'Giới thiệu', component: AboutComponent },
  { path: 'Hỗ trợ chúng tôi', component: ContactComponent },
  { path: 'Luyến ái', component: LuyenaiComponent },
  { path: 'Nghề nghiệp', component: NghenghiepComponent },
  { path: 'Phong tục', component: PhongtucComponent },
  { path: 'Trận chiến', component: TranchienComponent },
  { path: 'Trí tuệ', component: TritueComponent },
  { path: 'Đăng nhập', component: LoginComponent },
  { path: 'Chi tiết', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
