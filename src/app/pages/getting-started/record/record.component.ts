import { Component } from '@angular/core';
import { SortDirection } from '@avenueui/ng-devui';
import { SortEventArg } from 'ng-devui';
import { GettingStartedService, SourceType, USER } from '../getting-started.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {
  constructor (private getStartedService: GettingStartedService) {}
  basicDataSource: Array<any>;
  dataTableOptions = {
    columns: [
      {
        field: 'transfer_type',
        header: '转账类型',
        fieldType: 'text',
        order: 1,
      },
      {
        field: 'amount',
        header: '转账金额',
        fieldType: 'number',
        order: 2
      },
      {
        field: 'balance',
        header: '账户余额',
        fieldType: 'number',
        order: 3
      },
      {
        field: 'transfer_from_card_no',
        header: '转入账户',
        fieldType: 'text',
        order: 4
      },
      {
        field: 'transfer_to_card_no',
        header: '转出账户',
        fieldType: 'text',
        order: 5
      },
      {
        field: 'create_time',
        header: '交易创建时间',
        fieldType: 'text',
        order: 6
      },
      {
        field: 'modify_time',
        header: '交易更新时间',
        fieldType: 'text',
        order: 7
      }
    ]
  };
  sortedColumn: SortEventArg[] = [{
    field: 'create_time',
    direction: SortDirection.ASC
  }];

  ngOnInit() {
    this.getStartedService.getAccountRecord(USER.userId,USER.accountId).subscribe( res => {
      if (res.status === '200' && res.data?.list?.length) {
        this.basicDataSource = res.data.list.map(e => {
          if (e.transfer_type === 'transfer out') {
            e.transfer_type = '转出'
          } else if (e.transfer_type === 'transfer in') {
            e.transfer_type = '转进'
          }
          return e;
        })
        console.log(this.basicDataSource)

        console.log(this.basicDataSource)
      }
    })
    // if (this.res.status === '200' && this.res.data?.list?.length) {
    //   this.basicDataSource = this.res.data.list.map(e => {
    //     if (e.transfer_type === 'transfer out') {
    //       e.transfer_type = '转出'
    //     } else if (e.transfer_type === 'transfer in') {
    //       e.transfer_type = '转进'
    //     }
    //     return e;
    //   })
    // }
  }

  multiSortChange(multiSort) {
    console.log('multiSort selected', multiSort);
    if (multiSort.length) {
      const {direction, field} = multiSort[multiSort.length - 1];
      if (['balance','amount'].includes(field)) {
        this.basicDataSource.sort((a, b) => {
          if (direction === 'DESC') {
            return a[field] - b[field]
          } else if (direction === 'ASC') {
            return b[field] - a[field]
          }
        })
      } else {
        this.basicDataSource.sort((a, b) => {
          if (direction === 'DESC') {
            return a[field].localeCompare(b[field])
          } else if (direction === 'ASC') {
            return b[field].localeCompare(a[field])
          }

          // name 必须相等
          return 0;
        })
      }
    }
  }

  res = {
    "status": "200",
    "message": "success",
    "data": {
      "total": 5,
      "list": [
        {
          "id": "11240c72-3f96-441a-aa1b-7e43dc543549",
          "account_info_id": "5a62839e-f838-4e1a-a635-064ffb449ca3",
          "user_info_id": "51238876-fb79-4fe1-8b5f-a242315eaa8e",
          "transfer_type": "transfer out",
          "amount": 30,
          "balance": 1170,
          "transfer_from_card_no": "6227190103000000001",
          "transfer_to_card_no": "6227190103000000000",
          "create_time": "2023-08-11 15:06:34",
          "modify_time": "2023-08-11 15:06:34"
        },
        {
          "id": "7f31c516-5255-48ee-ade8-cb3a5e998322",
          "account_info_id": "5a62839e-f838-4e1a-a635-064ffb449ca3",
          "user_info_id": "51238876-fb79-4fe1-8b5f-a242315eaa8e",
          "transfer_type": "transfer in",
          "amount": 200,
          "balance": 1200,
          "transfer_from_card_no": "6227190103000000000",
          "transfer_to_card_no": "6227190103000000001",
          "create_time": "2023-08-11 09:33:47",
          "modify_time": "2023-08-11 09:33:47"
        },
        {
          "id": "a4119e1e-f758-4cdd-ad00-caf5ccf0dcf7",
          "account_info_id": "5a62839e-f838-4e1a-a635-064ffb449ca3",
          "user_info_id": "51238876-fb79-4fe1-8b5f-a242315eaa8e",
          "transfer_type": "transfer out",
          "amount": 45,
          "balance": 1125,
          "transfer_from_card_no": "6227190103000000001",
          "transfer_to_card_no": "6227190103000000000",
          "create_time": "2023-08-11 15:34:46",
          "modify_time": "2023-08-11 15:34:46"
        },
        {
          "id": "aae0ba62-4f48-47fc-8549-35fdadd4c6bb",
          "account_info_id": "5a62839e-f838-4e1a-a635-064ffb449ca3",
          "user_info_id": "51238876-fb79-4fe1-8b5f-a242315eaa8e",
          "transfer_type": "transfer out",
          "amount": 45,
          "balance": 1080,
          "transfer_from_card_no": "6227190103000000000",
          "transfer_to_card_no": "6227190103000000001",
          "create_time": "2023-08-14 09:15:20",
          "modify_time": "2023-08-14 09:15:20"
        },
        {
          "id": "e9adbb6d-8a80-4be8-921a-e501205a8cf9",
          "account_info_id": "5a62839e-f838-4e1a-a635-064ffb449ca3",
          "user_info_id": "51238876-fb79-4fe1-8b5f-a242315eaa8e",
          "transfer_type": "transfer in",
          "amount": 45,
          "balance": 1125,
          "transfer_from_card_no": "6227190103000000000",
          "transfer_to_card_no": "6227190103000000001",
          "create_time": "2023-08-14 09:15:21",
          "modify_time": "2023-08-14 09:15:21"
        }
      ],
      "pageNum": 1,
      "pageSize": 10,
      "size": 5,
      "startRow": 1,
      "endRow": 5,
      "pages": 1,
      "prePage": 0,
      "nextPage": 0,
      "isFirstPage": true,
      "isLastPage": true,
      "hasPreviousPage": false,
      "hasNextPage": false,
      "navigatePages": 8,
      "navigatepageNums": [
        1
      ],
      "navigateFirstPage": 1,
      "navigateLastPage": 1
    }
  }
}
