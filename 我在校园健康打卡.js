
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://gw.wozaixiaoyuan.com/health/mobile/health/save?batch=5000001`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'JWSESSION' : `填你的`,
'Content-Type' : `application/json;charset=UTF-8`,
'Origin' : `https://gw.wozaixiaoyuan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.26(0x18001a34) NetType/WIFI Language/zh_CN miniProgram/wxce6d08f781975d91`,
'Cookie' : `JWSESSION=bb1ba039dd6f4c0dab56c839cc74cb53`,
'Host' : `gw.wozaixiaoyuan.com`,
'Referer' : `https://gw.wozaixiaoyuan.com/h5/mobile/health/index/health/detail?id=5000001`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/plain, */*`
};
const body = `{"location":"中国/四川省/达州市/渠县/李馥镇//156/511725/156511700/511725120","t1":"[\"无下列情况，身体健康\"]","t2":"否","t3":"36.6","t4":"无不适症状","t5":"未列为风险区","t6":"正常","t7":"三针全部接种","t8":"否","t9":"中国/四川省/达州市/渠县/李馥镇//156/511725/156511700/511725120","type":0,"locationType":0}`;
#上面信息也填你的
const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
