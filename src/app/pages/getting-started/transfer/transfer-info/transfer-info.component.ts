import { Component, Input } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { ItransferBody } from '../../getting-started.service';

@Component({
  selector: 'app-transfer-info',
  templateUrl: './transfer-info.component.html',
  styleUrls: ['./transfer-info.component.scss']
})
export class TransferInfoComponent {
  layoutDirection: FormLayout = FormLayout.Vertical;
  @Input() transferBody: ItransferBody;
}
