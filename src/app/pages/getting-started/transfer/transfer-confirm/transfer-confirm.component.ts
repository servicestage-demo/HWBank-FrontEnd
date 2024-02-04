import { Component, Input } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { GettingStartedService, ItransferBody } from '../../getting-started.service';

@Component({
  selector: 'app-transfer-confirm',
  templateUrl: './transfer-confirm.component.html',
  styleUrls: ['./transfer-confirm.component.scss']
})
export class TransferConfirmComponent {
  layoutDirection: FormLayout = FormLayout.Vertical;
  @Input() transferBody: ItransferBody;
  constructor(private getStartedService: GettingStartedService) {}

  fiexdTwo(num) {
    return this.getStartedService.tofiexdTwo(num)
  }
}
