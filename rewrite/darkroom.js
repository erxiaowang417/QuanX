/*
圈x配置
[mitm]
hostname= jk.5apk.cn

[rewrite_local]  

#名称 

^ https://api.revenuecat.com/v1/subscribers/$RCAnonymou url script-response-body https://gitee.com/xiaoerwang/quan-x/raw/master/rewrite/***
*/

const path1 = "offer";

if ($request.path.indexOf(path1) != -1){;}
else{

var body = 
{"request_date":"2021-05-07T09:34:46Z","request_date_ms":1620380086125,"subscriber":{"entitlements":{"co.bergen.Darkroom.entitlement.allToolsAndFilters":{"expires_date":"2022-05-04T13:29:23Z","product_identifier":"co.bergen.Darkroom.product.month.everything","purchase_date":"2020-05-01T13:29:23Z"}},"first_seen":"2021-05-07T09:30:20Z","last_seen":"2021-05-07T09:30:20Z","management_url":null,"non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:b36fa6c865e64f8d938172613d629d44","original_application_version":"52335","original_purchase_date":"2021-05-07T08:46:35Z","other_purchases":{},"subscriptions":{"co.bergen.Darkroom.product.month.everything":{"is_sandbox":false,"period_type":"trial","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2022-05-04T13:29:23Z","original_purchase_date":"2020-05-01T13:29:23Z","purchase_date":"2020-05-01T13:29:23Z","store":"app_store"}}}}; 
$done({body:JSON.stringify(body)});
}
