import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { I18nService } from 'ng-devui/i18n';
import { Subject } from 'rxjs';
import { DValidateRules } from 'ng-devui';

import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/@core/services/auth.service';
import { PersonalizeService } from 'src/app/@core/services/personalize.service';
import { ThemeType } from '../../models/theme';
import { FormLayout } from 'ng-devui/form';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'da-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();

  tabActiveId: string | number = 'tab1';
  showPassword = false;
  horizontalLayout: FormLayout = FormLayout.Horizontal;

  toastMessage: any;
  

  tabItems: any = [
    {
      id: 'tab1',
      title: '账号密码登录'
    },
    {
      id: 'tab2',
      title: '邮箱登录'
    }
  ];

  

  formData = {
    userAccount: 'Admin',
    userAccountPassword: 'DevUI.admin',
    userEmail: 'admin@devui.com',
    userEmailPassword: 'devuiadmin'
  };

  formRules: { [key: string]: DValidateRules } = {
    usernameRules: {
      validators: [
        { required: true },
        { minlength: 3 },
        { maxlength: 20 },
        {
          pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/,
          message: 'The user name cannot contain characters except uppercase and lowercase letters.',
        },
      ]
    },
    emailRules: {
      validators: [
        { required: true },
        { email: true },
      ],
    },
    passwordRules: {
      validators: [{ required: true }, { minlength: 6 }, { maxlength: 15 }, { pattern: /^[a-zA-Z0-9\d@$!%*?&.]+(\s+[a-zA-Z0-9]+)*$/ }],
      message: 'Enter a password that contains 6 to 15 digits and letters.',
    },
  };

  @HostListener('window:keydown.enter')
  onEnter() {
    this.onClick(this.tabActiveId);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    
    private i18n: I18nService,
    private personalizeService: PersonalizeService
  ) {
    
  }

  ngOnInit(): void {
    
    this.personalizeService.setRefTheme(ThemeType.Default);

    this.route.queryParams.pipe(
      map(param => param['code'])
    ).subscribe(code => {
      if(code && code.length > 0) {
        setTimeout(() => {
          this.toastMessage = [
            {
              severity: 'success',
              content: 'Github 授权回调成功',
            },
          ];
        });
      }
    });
  }

  onClick(tabId: string | number) {
    switch (tabId) {
      case 'tab1':
        this.authService
          .login(this.formData.userAccount, this.formData.userAccountPassword)
          .subscribe(
            (res) => {
              this.authService.setSession(res);
              this.router.navigate(['/']);
            },
            (error) => {
              this.toastMessage = [
                {
                  severity: 'error',
                  summary: '用户名或密码错误',
                  content: '请输入正确的用户名密码，用户名：Admin，密码：DevUI.admin'
                  
                }
              ];
            }
          );
        break;
      case 'tab2':
        this.authService
          .login(this.formData.userEmail, this.formData.userEmailPassword)
          .subscribe(
            (res) => {
              this.authService.setSession(res);
              this.router.navigate(['/']);
            },
            (error) => {
              this.toastMessage = [
                {
                  severity: 'error',
                  summary: '用户名或密码错误',
                  content: '请输入正确的用户名密码，用户名：admin@devui.com，密码：devuiadmin'
                }
              ];
            }
          );
        break;
      default:
        break;
    }
  }

  

  

  onKeyUp(e: KeyboardEvent, tabId: string | number) {
    if (e.keyCode === 13) {
      this.onClick(tabId);
    }
  }

  handleAuth(type: string){
    console.log(type);
    const config = {
      oauth_uri: 'https://github.com/login/oauth/authorize',
      redirect_uri: 'https://devui.design/admin/login',
      client_id: 'ef3ce924fcf915c50910'
    };
    if (!environment.production) {
      config.redirect_uri = 'http://localhost:4200/login';
      config.client_id = 'ecf5e43d804e8e003196';
    }
    window.location.href = `${config.oauth_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`
  }
}
