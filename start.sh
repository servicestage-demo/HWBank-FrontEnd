#!/bin/bash
##
# Copyright@2017 Huawei Technologies Co., Ltd. 
##
#set NODE_HOME
#NODE_HOME=/opt/node-v4.8.4
#check NODE_HOME & npm
if [ ! -d "./proxy.conf.json" ]; then
  touch ./proxy.conf.json
fi
conf="{
    \"/accounting\": {
        \"target\": \"http://$1:80\",
        \"secure\": false,
        \"logLevel\": \"debug\",
        \"changeOrigin\": true,
        \"headers\": { \"Host\": \"www.bankdemo.com\" },
        \"pathRewrite\": {
            \"/accounting\": \"http://$1:80/accounting\"
          }
    },
    \"/usercenter\": {
        \"target\": \"http://$1:80\",
        \"secure\": false,
        \"logLevel\": \"debug\",
        \"changeOrigin\": true,
        \"headers\": { \"Host\": \"www.bankdemo.com\" },
        \"pathRewrite\": {
            \"/usercenter\": \"http://$1:80/usercenter\"
          }
    },
    \"/infocenter\": {
        \"target\": \"http://$1:80\",
        \"secure\": false,
        \"logLevel\": \"debug\",
        \"changeOrigin\": true,
        \"headers\": { \"Host\": \"www.bankdemo.com\" },
        \"pathRewrite\": {
            \"/infocenter\": \"http://$1:80/infocenter\"
          }
    }
}"
> ./proxy.conf.json
echo "$conf" > ./proxy.conf.json
echo "$1 www.bankdemo.com" >> /etc/hosts
chmod +x ./node_modules/.bin/ng
npm start