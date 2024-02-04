import { Component, Input } from '@angular/core';
import { GettingStartedService, ITransferData } from '../../getting-started.service';

@Component({
  selector: 'app-transfer-complete',
  templateUrl: './transfer-complete.component.html',
  styleUrls: ['./transfer-complete.component.scss']
})
export class TransferCompleteComponent {
  @Input() transferData: ITransferData;
  constructor(private getStartedService: GettingStartedService) {}
  fiexdTwo(num) {
    return this.getStartedService.tofiexdTwo(num)
  }
}
