import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ObservationComponent} from '../../pages/observation/observation.component'
import { AddObservationComponent } from '../../pages/add-observation/add-observation.component'
import { PatientComponent } from '../../pages/patient/patient.component'
import { InfoRDVComponent } from '../../pages/info-rdv/info-rdv.component';
import { ObservationDetailsComponent }     from '../../pages/observation-details/observation-details.component';
import { from } from 'rxjs';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'observation',  component: ObservationComponent },
    { path: 'AddObservation/:id',        component: AddObservationComponent },
    { path: 'patient/:id',        component: PatientComponent },
    { path: 'infoRDV/:id',        component: InfoRDVComponent },
    { path: 'detailsObservation/:id',  component: ObservationDetailsComponent }
];
