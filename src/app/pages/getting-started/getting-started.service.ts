import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface SourceType {
  id: string;
  account_info_id: string;
  user_info_id: string;
  transfer_type: string;
  amount: number;
  balance: string;
  transfer_from_card_no: string;
  transfer_to_card_no: string;
  create_time: string;
  modify_time: string;
}

export interface ItransferBody {
  transfer_in_card_no: string; // 转入账号银行卡
  value: number; // 转账金额
  transfer_out_card_no: string // 转出账号银行卡
}

export interface ITransferData {
  transfer_out_card_no: string;
  transfer_in_card_no: string;
  transfer_time: string;
  transfer_amount: number;

}

export const USER = {
  userId: '51238876-fb79-4fe1-8b5f-a242315eaa8e',
  accountId: '5a62839e-f838-4e1a-a635-064ffb449ca3'
}

@Injectable({
  providedIn: 'root'
})
export class GettingStartedService {
  user_info_id = '600000000000000003'
  user_id_card_no = '6222200000000003'
  card_no = '800000000000000003'

  target_user_info_id = '600000000000000044'
  target_user_id_card_no = '6222200000000002'

  constructor(private http: HttpClient) { }

  tofiexdTwo(num) {
    if (typeof num === 'number') {
      return num.toFixed(2)
    }
    return num
  }



  transfer(user_info_id, account_info_id, param): any {
    const url = `/accounting/v1/user-infoes/${this.user_info_id}/account-infoes/${this.card_no}/transfer`
    const headers = {
      'user-info-id': this.user_info_id
    }
    return this.http.post(url, param, {headers});
  }


  // 查询用户
  getAccountUser(user_info_id): any {
    const url = `/usercenter/v1/user-infoes/${this.user_info_id}`
    const headers = {
      'user-info-id': this.user_info_id
    }
    return this.http.get(url, {headers});
  }

  // 查询账户
  getAccountBalance(user_info_id, account_info_id): any {
    const url = `/accounting/v1/user-infoes/${this.user_info_id}/account-infoes/${this.card_no}`
    const headers = {
      'user-info-id': this.user_info_id
    }
    return this.http.get(url, {headers});
  }

  // 查询转账记录
  getAccountRecord(user_info_id, account_info_id,page_num=1,page_size=10): any {
    const url = `/accounting/v1/user-infoes/${this.user_info_id}/account-infoes/${this.card_no}/account-trans-details?page_num=${page_num}&page_size=${page_size}&is_query_total=true`
    const headers = {
      'user-info-id': this.user_info_id
    }
    return this.http.get(url, {headers});
  }
}
