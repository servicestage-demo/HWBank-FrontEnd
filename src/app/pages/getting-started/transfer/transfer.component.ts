import { Component } from '@angular/core';
import { ITaskStep } from '@avenueui/ng-devui-plus/task-step';
import { GettingStartedService, ItransferBody, ITransferData, USER } from '../getting-started.service';
import { ToastService } from '@avenueui/ng-devui/toast';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  constructor(private getStartedService: GettingStartedService, private toastService: ToastService) {}

  currStep = 0;
  steps: Array<ITaskStep> = [
    {
      name: '填写转账信息',
      icon: 'icon-base-info2',
    },
    {
      name: '确认转账信息',
      icon: 'icon-modify-trace',
    },
    {
      name: '完成',
      icon: 'icon-go-cloud-ide2',
    },
  ];
  // 转账请求体
  transferBody: ItransferBody = {
    transfer_in_card_no: this.getStartedService.target_user_id_card_no ||  '6227190103000000001', // 转入账号银行卡
    value: 0, // 转账金额
    transfer_out_card_no: this.getStartedService.user_id_card_no || '6227190103000000000' // 转出账号银行卡
  };
  // 转账成功信息
  transferData: ITransferData = {
    transfer_out_card_no: "",
    transfer_in_card_no: "",
    transfer_time: "",
    transfer_amount: null
  }
  loading = false;

  displayCurrStep(idx) {
    this.currStep = idx;
  }

  preStep() {
    this.currStep--;
  }

  nextStep() {
    if (this.currStep === 0) {
      this.currStep++;
    } else {
      this.transfer()
    }

  }

  transfer() {
    this.loading = true;
    this.getStartedService.transfer(USER.accountId,USER.accountId,this.transferBody).subscribe(res => {
      if (res.status == '200') {
        // this.transferData = res.data;
        this.currStep++;
      }
      this.loading = false
    }, () => {
      this.toastService.open({
        value: [{ severity: 'error', summary: '转账失败', content: '请检查账号是否正确！' }],
      });
    })

    // let res = {
    //   "status": "200",
    //   "message": "success",
    //   "data": {
    //     "transfer_out_card_no": "6227190103000000000",
    //     "transfer_in_card_no": "6227190103000000001",
    //     "transfer_time": "2023-08-14 09:15:21",
    //     "transfer_amount": 45
    //   }
    // }
    // if (res.status == '200' && res.data) {
    //   this.transferData = res.data;
    //   this.currStep++;
    // }
    this.loading = false
  }

}
