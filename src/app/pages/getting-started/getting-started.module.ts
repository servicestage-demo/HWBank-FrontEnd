import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { TaskStepModule } from '@avenueui/ng-devui-plus/task-step';
import { AlertModule } from '@avenueui/ng-devui/alert';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'ng-devui';
import { IconModule } from '@avenueui/ng-devui/icon';
import { SampleComponent } from './sample/sample.component';
import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { TransferComponent } from './transfer/transfer.component';
import { BalanceComponent } from './balance/balance.component';
import { RecordComponent } from './record/record.component';
import { GettingStartedService } from './getting-started.service';
import { TransferInfoComponent } from './transfer/transfer-info/transfer-info.component';
import { TransferConfirmComponent } from './transfer/transfer-confirm/transfer-confirm.component';
import { TransferCompleteComponent } from './transfer/transfer-complete/transfer-complete.component';
import { ToastService } from '@avenueui/ng-devui';




@NgModule({
  declarations: [GettingStartedComponent, SampleComponent, BalanceComponent, TransferComponent, RecordComponent, TransferInfoComponent, TransferConfirmComponent, TransferCompleteComponent],
  imports: [SharedModule, GettingStartedRoutingModule, HttpClientModule, DataTableModule, TaskStepModule, AlertModule, IconModule],
  providers: [GettingStartedService, ToastService],
})
export class GettingStartedModule {}
