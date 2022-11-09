import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioPlanesComponent } from './inicio-planes/inicio-planes.component';
import { TalleresComponent } from './talleres/talleres.component';
import { PagoComponent } from './pago/pago.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroCompletoComponent } from './registro-completo/registro-completo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioPlanesComponent,
    TalleresComponent,
    PagoComponent,
    FooterComponent,
    RegistroCompletoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
