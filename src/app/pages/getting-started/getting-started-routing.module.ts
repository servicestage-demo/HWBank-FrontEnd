import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample/sample.component';
import { GettingStartedComponent } from './getting-started.component';
import { BalanceComponent } from './balance/balance.component';
import { RecordComponent } from './record/record.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
    children: [
      { path: 'balance', component: BalanceComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'record', component: RecordComponent },
      { path: '', redirectTo: 'balance', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingStartedRoutingModule {}
