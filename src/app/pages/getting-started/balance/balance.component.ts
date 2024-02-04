import { Component } from '@angular/core';
import { GettingStartedService, USER } from '../getting-started.service';



@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  balance = 0;
  unit = '元'
  constructor(private getStartedService: GettingStartedService) {}

  ngOnInit(): void {
    this.queryBalance()
  }

  queryBalance() {

    this.getStartedService.getAccountUser('600000000000000002').subscribe(res => {
      console.log(res);
    })

    this.getStartedService.getAccountBalance(USER.userId,USER.accountId).subscribe(res => {
      if (res.status === '200' && res.data) {
        this.balance = res.data.balance
      }
    })
    

    // let res = {
    //   "status": "200",
    //   "message": "success",
    //   "data": {
    //     "id": "5a62839e-f838-4e1a-a635-064ffb449ca3",
    //     "user_info_id": "51238876-fb79-4fe1-8b5f-a242315eaa8e",
    //     "bank_card_no": "6227190103000000001",
    //     "balance": 1125,
    //     "create_time": "2023-08-11 09:26:07",
    //     "modify_time": "2023-08-11 09:31:25"
    //   }
    // }

    // if (res.status === '200' && res.data) {
    //   this.balance = res.data.balance
    // }
  }

  
  

}
