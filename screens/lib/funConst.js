import React from "react";
import {View, Alert, Linking, Dimensions} from "react-native";
import NavigationService from "./NavigationService";
import GLOBALS from "./Globals";
export const formatDate = function (date,format) {
    //lay formart theo php;
    //co diem khac la d m luon la so du format la hoa hay thuong
    if(!format || !date){
        return '';
        // return 'Error: pls enter format';
    }

    let dateObj = new Date(date);

    if(dateObj =='Invalid Date'){
        if(parseInt(date)==date){
            dateObj = new Date(date*1000);
        }
        else{
            let d = date.replace(/-/g,'/').replace(/\.000000/g,'');
            dateObj = new Date(d);
        }
        if(dateObj =='Invalid Date')
            return date;
    }

    let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let curr_date = dateObj.getDate();
    let curr_month = dateObj.getMonth();
    curr_month = curr_month + 1;
    let curr_year = dateObj.getFullYear();
    let curr_min = dateObj.getMinutes();
    let curr_hr= dateObj.getHours();
    let curr_sc= dateObj.getSeconds();

    let a = 'pm';
    let A = 'PM';
    let curr_hr_12  = curr_hr;
    if(curr_hr < 12){
        a= 'am';
        A = 'AM';
    }
    else if(curr_hr > 12){
        curr_hr_12 =  curr_hr - 12;
    }

    if(curr_month.toString().length == 1)
        curr_month = '0' + curr_month;
    if(curr_date.toString().length == 1)
        curr_date = '0' + curr_date;
    if(curr_hr.toString().length == 1)
        curr_hr = '0' + curr_hr;
    if(curr_min.toString().length == 1)
        curr_min = '0' + curr_min;
    if(curr_sc.toString().length == 1)
        curr_sc = '0' + curr_sc;

    format = format.replace(/d|D/g,curr_date);
    format = format.replace(/m|M/g,curr_month);
    format = format.replace(/Y/g,curr_year);
    curr_year = curr_year.toString();
    format = format.replace(/y/g,curr_year.slice(-2));
    format = format.replace(/h/g,curr_hr_12);
    format = format.replace(/H/g,curr_hr);
    format = format.replace(/i|I/g,curr_min);
    format = format.replace(/s|S/g,curr_sc);
    format = format.replace(/a/g,a);
    format = format.replace(/A/g,A);

    return format;
};
export const numberFormat = function (number,decimals,decimalPoint,thousands_sep) {
    decimalPoint = decimalPoint || '.';
    thousands_sep = thousands_sep || ',';
    decimals = parseInt(decimals);
    decimals = (decimals===0)?0:(decimals || null);

    number = (number)?number.toString():'0';
    var ck = number.split('.');
    var b = ck[1] || '';

    if(decimals !== null&&b!=''){
        b = b.slice(0,decimals);
        b = (parseFloat('0.'+b)).toString().replace('0.','');
    }
    number = (parseInt(number)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1"+thousands_sep)+(b==''?'':decimalPoint+b);
    number = number+((ck.length==2&&ck[1]=='')?decimalPoint:'');
    return number;
};
export const printElement = function(selector) {
    //export ui app
};
export const md5 = function (string) {
    // try {return CryptoJS.MD5(string).toString();} catch (err) {alert(err.message)}
};
export const sha1 = function (string) {
    // try {return CryptoJS.SHA1(string).toString();} catch (err) {alert(err.message)}
};

//thao tac voi array
export const empty = function (v) {
    if(typeof v == 'object'){
        return Object.keys(v).length == 0;
    }
    else {
        return !v;
    }
};
export const count = function (v) {
    if(typeof v == 'object'){
        return Object.keys(v).length;
    }
    else if(v) {
        return 1;
    }
    else{
        return 0;
    }
};
export const find = function (vl,arr) {
    var res = {};
    for(var x in arr){
        if(vl == arr[x])
            res[x] = arr[x];
    }
    return res;
};
export const removeItem = function (vl,arr) {
    if(Array.isArray(arr)) {
        var j = 0;
        for (var i in arr){
            if (arr[i] == vl) {
                arr.splice(j, 1);
            }
            j++;
        }
    }
    else {
        for (var i in arr){
            if(arr[i] == vl)
                delete arr[i];
        };
    }
    return arr;
};
export const sum = function(arr,key){
    var s=0;
    arr = arr||{};
    if(typeof key=='undefined'){
        for (var i in arr){
            s = s+(parseFloat(arr[i])||0);
        };
    }
    else{
        for (var i in arr){
            s = s+(parseFloat(arr[i][key])||0);
        };
    }
    return s;
};
export const autoIncrement = function(arr){
    if(empty(arr))return 0;
    var max = 0,m;
    for (var i in arr){
        m = parseInt(i) || 0;
        if(max<m)
            max=m;
    };
    return max+1;
};

export const array_values = function(array){
    try {
        return Object.values(array);
    }
    catch (err) {
        alert(err.message);
    }
};
export const array_keys = function(array){
    try {
        return Object.keys(array);
    }
    catch (err) {
        alert(err.message);
    }
};
export const array_push = function(array,v){
    try {
        return array[autoIncrement(array)]=v;
    }
    catch (err) {
        alert(err.message);
    }
};
// export const array_unshift = function(array){};
// export const array_pop = function(array){};
// export const array_shift = function(array){};
export const array_flip = function(arr){
    try {
        var array_flipped={};
        for (var i in arr){
            array_flipped[arr[i]]=i;
        };
        return array_flipped;
    }
    catch (err) {
        alert(err.message);
    }
};
// export const SORT_REGULAR=0;
export const SORT_NUMERIC=1;
export const SORT_STRING=2;
// export const SORT_LOCALE_STRING=5;
// export const SORT_NATURAL=6;
// export const SORT_FLAG_CASE=8;
export const sort = function(array,sort_flags){
    try {
        var fun;
        if(Array.isArray(array)){
            if(typeof sort_flags == 'undefined' || sort_flags==SORT_NUMERIC){
                fun = function (a, b) {return ((parseFloat(a)||0) - (parseFloat(b)||0));}
            }
            else if(sort_flags==SORT_STRING){}
            array.sort(fun);
        }
        else {
            var b=[];
            if(typeof sort_flags == 'undefined' || sort_flags==SORT_NUMERIC){
                b = Object.keys(array).sort(function (a, b) {return ((parseFloat(array[a])||0) - (parseFloat(array[b])||0));});
            }
            else if(sort_flags==SORT_STRING){
                b = Object.keys(array).sort(function(a,b){return (JSON.stringify(array[a]).replace(/([^0-9])/g,'9999999999999999999$1')<JSON.stringify(array[b]).replace(/([^0-9])/g,'9999999999999999999$1'))?-1:0});
            }
            var i=0;
            for (var j in array){
                var vl = array[b[i]];
                delete array[b[i]];
                array[b[i]]=vl;
                i++;
            }
        }
    }
    catch (err) {
        alert(err.message);
    }
};
export const array_reverse = function(array){
    try {
        if(Array.isArray(array)){
            var a = Object.assign([],array);
            return a.reverse();
        }
        else {
            var a={};
            for (var i in array){
                var item = {};item[i]=array[i];
                a = Object.assign(item,a);
            };
            return a;
        }

    }
    catch (err) {
        alert(err.message);
    }
};
export const array_merger = function(array1,array2){
    try {
        var arr = {};
        arr = Object.assign(arr,array1);
        var logAutoIncrement = autoIncrement(arr);
        for (var i in array2){
            if(parseInt(i)==i){
                arr[logAutoIncrement]=array2[i];
                logAutoIncrement++;
            }
            else {
                arr[i]=array2[i];
            }
        }
        return arr;
        //return Object.assign(array1,array2);
    }
    catch (err) {
        alert(err.message);
    }
};
export const in_array = function(item,array){
    try {
        if(Array.isArray(array)){
            return array.indexOf(item) !==-1;
        }
        else {
            return Object.values(array).indexOf(item) !==-1;
        }
    }
    catch (err) {
        alert(err.message);
    }
};
export const is_array = function(array){
    try {
        return typeof array === 'object';
    }
    catch (err) {
        alert(err.message);
    }
};


//end thao tac voi array

//cac ham toan hoc
export const abs = Math.abs;//(x)	Returns the absolute value of x
export const acos = Math.acos;//(x)	Returns the arccosine of x, in radians
export const asin = Math.asin;//(x)	Returns the arcsine of x, in radians
export const atan = Math.atan;//(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
export const atan2 = Math.atan2;//(y, x)	Returns the arctangent of the quotient of its arguments
export const floor = Math.floor;//(x)	Returns the value of x rounded down to its nearest integer
export const ceil = Math.ceil;//(x)	Returns the value of x rounded up to its nearest integer
export const round = Math.round;//(x)	Returns the value of x rounded to its nearest integer
export const cos = Math.cos;//(x)	Returns the cosine of x (x is in radians)
export const exp = Math.exp;//(x)	Returns the value of Ex
export const log = Math.log;//(x)	Returns the natural logarithm (base E) of x
export const max = Math.max;//(x, y, z, ..., n)	Returns the number with the highest value
export const min = Math.min;//(x, y, z, ..., n)	Returns the number with the lowest value
export const pow = Math.pow;//(x, y)	Returns the value of x to the power of y
export const random =  function(x,y){if(!y){y=99999999999;}if(!x){x=0;}return Math.floor((Math.random() * y) + x);};//()	Returns a random number between 0 and 1
export const sin = Math.sin;//(x)	Returns the sine of x (x is in radians)
export const sqrt = Math.sqrt;//(x)	Returns the square root of x
export const tan = Math.tan;//(x)	Returns the tangent of an angle
//cac ham toan hoc

//cac ham su ly chuoi
/**
 * tac chuoi thanh mang
 */
export const explode = function (delimiter,string) {try {return string.split(delimiter);} catch (err) {alert(err.message.replace(/split/g,'explode'))}};
/**
 * chuyen mang ve chuoi
 */
export const join = function (glue,arr) {try {return Object.values(arr).join(glue);} catch (err) {alert(err.message)}};
/**
 * đếm số ký tự chuỗi
 */
export const strlen = function (string) {try {return string.length;} catch (err) {alert(err.message.replace(/length/g,'strlen'))}};
/**
 * tìm và thay thế ký tự trong chuỗi
 */
export const str_replace = function (search,replace,string) {
    try {var regexParse = new RegExp(search,'g');return string.replace(regexParse,replace);}
    catch (err) {alert(err.message.replace(/replace/g,'str_replace'))}
};
/**
 * loại bỏ thẻ html trong chuỗi
 */
export const strip_tags = function (string) {
    // try {return $(string).text();} catch (err) {alert(err.message)}
    return string.replace(/(<([^>]+)>)/ig,"");
};
/**
 * Hàm này lấy một chuỗi con nằm trong chuỗi $str bắt đầu từ ký tự thứ $start và chiều dài $length
 */
export const substr = function (string,start,length) {try {return string.substr(start,length);} catch (err) {alert(err.message)}};
/**
 * before_needle = false, Tách một chuỗi bắt đầu từ  ky_tu_cho_truoc cho đến hết chuỗi.
 * before_needle = true, Tách một chuỗi bắt đầu từ đầu đến ky_tu_cho_truoc.
 */
export const strstr = function (string,needle,before_needle) {
    try {if(before_needle){return string.substr(0,string.indexOf(needle));} else {return string.substr(string.indexOf(needle));}}
    catch (err) {alert(err.message)}
};
/**
 * Hàm tìm vị trí của chuối needle trong string bắt đầu từ vị trí offset chở đi
 */
export const strpos = function (string,needle,offset) {try {var res = string.indexOf(needle,offset);return (res===-1)?false:res;} catch (err) {alert(err.message)}};
//Chuyển tất cả các ký tự chuỗi string sang chữ thường
export const strtolower = function (string) {try {return string.toLowerCase();} catch (err) {alert(err.message)}};
//Chuyển tất cả các ký tự chuỗi string sang chữ hoa
export const strtoupper = function (string) {try {return string.toUpperCase();} catch (err) {alert(err.message)}};
//chuyển chữ cái đầu của chuỗi sang hoa
export const ucfirst = function (string) {try {return string[0].toUpperCase() + string.slice(1);} catch (err) {alert(err.message)}};
//chuyển chữ cái đầu của chuỗi sang chữ thường
export const lcfirst = function (string) {try {return string[0].toLowerCase() + string.slice(1);} catch (err) {alert(err.message)}};
//chuyển chữ cái đầu của từ sang chữ cái Hoa
export const ucwords = function (string) {
    try {return string.replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {return letter.toUpperCase();});}
    catch (err) {alert(err.message)}
};
export const trim = function (str) {
    return str.trim();
};
//end cac ham su ly chuoi
export const getLink = function(url,i,type,getAll){
    url = '/'+url;
    if(type=='GET'){
        let searchs = url.split('?')[1].split('&');
        let $get={};
        // $get[i]=undefined;
        for(let x in searchs){
            let v = searchs[x].split('=');
            if(v.length>1){
                $get[v[0]]=v[1];
            }
        }
        if(getAll)
            return $get;
        else
            return $get[i];
    }
    else{
        let arr = url.split('?')[0].replace(/\\/g,"/").replace(/\/\.\/|\/\//g,"/").split('/').filter(Boolean);
        function a(arr){
            let c = arr;
            for(let x in arr){
                if(arr[x]=='..'){
                    let c1 = arr.splice((x-1),2);
                    c = a(arr);
                    break;
                }
            }
            return c;
        }
        arr = a(arr);
        if(getAll)
            return arr;
        else{
            if(typeof arr[i]=='undefined'){
                return '';
            }
            else{
                // Alert.alert(arr[i]);
                return arr[i];
            }
        }
    }
};

export const callNavigate = (url,fun,params)=> {
    params = params || {};
    let ck = url.split(/http\:\/\/|https\:\/\//);
    if(ck[0]=='' && url !=''){
        Linking.openURL(url);
    }
    else {
        url = url==''?'index':url;
        // url +='?abc=1&deg=23f';
        let _get = (url.split('?')[1])?url.split('?')[1]:'';
        // fun.navigate(getLink(url,0),{"_getSegment_1":getLink(url,1),"_getSegment_2":getLink(url,2),"_getSegment_3":"","_getSegment_4":"","_getSegment_5":"","_getSegment_6":"","_getSegment_7":""});
        let param = {"_getSegment":getLink(url,1,undefined,true).join('/'),'_get':_get};
        let arr = _get.split('&');
        let key = param._get+param._getSegment;
        for (let i in arr){
            let ck = arr[i].split('=');
            param[ck[0]]=ck[1]||'';
        }
        // fun.navigate(getLink(url,0),param,key);

        let routeName=getLink(url,0);
        GLOBALS.curentRouteName=routeName;
        // fun.navigate({
        //     routeName: routeName,
        //     params: Object.assign(param,params),
        //     key: routeName + key
        // });

        NavigationService.navigate(routeName,Object.assign(param,params));
    }
};
export const fetchCustomApi = (url,_post,_headers,callBack,callBackError,showLoading)=>{
    _post = _post|| {};
    let data = {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        body: JSON.stringify(_post),
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
            'x-csrftoken':  ''//GLOBALS.userInfo.TOKEN?GLOBALS.userInfo.TOKEN:'' //cookie.load('csrftoken')
        }
    };
    
    console.log(url);
    setTimeout(function() {
        return fetch(url,data)
        .then((response) => {
            
            if(response.status==200){
                try {
                    return response.json();
                } catch (e) {
                    
                    return {
                        errCode:1,
                        msg:'Error network',
                        data:{data:{}}
                    }
                }
            }
            else{
                
                return {
                    errCode:1,
                    msg:'Error network',
                    data:{data:{}}
                }
            }
            
            // response.json()
        })
        .then((responseJson) => {
            
            if(callBack){
                callBack(responseJson)
            }
        }).catch((error) => {
            
            if(callBackError){
                callBackError(error)
            }
        });
    }, 100);
};

export const getImgDimension = (url)=>{
    //mac dinh link anh se co cau truc
    // /mytheme/img/tenanh--dms--120-x-120.jpg(png...);
    let arr = url.split(/--dms--|-x-/);
    if(arr[1] && arr[1]) {
        return {width: parseFloat(arr[1])||0, height: parseFloat(arr[2])||0};
    }
    else {
        return false;
    }
};

export const getDateStrFromSec = (sec) => {
    let d = parseInt(sec/(60 * 60 * 24));
    return convertToMultiDigit(d);
};

export const getHourStrFromSec = (sec) => {        
    let h = parseInt(sec / (60 * 60));
    let leftSec = sec - h * 60 * 60;
    let m = parseInt(leftSec/60);
    leftSec = leftSec - m * 60;
    let s = parseInt(leftSec);


    return convertToMultiDigit(h) + "h : " + convertToMultiDigit(m) + "p : " + convertToMultiDigit(s) + "s";
};

export const convertToMultiDigit = (val) => {
    if(val >= 10){
        return val;
    }

    if(val < 10){
        return "0" + val;
    }
};

export const getSubStr = (val, maxlength) => {
    if(val.length <= maxlength - 3){
        return val;
    }
    // console.log(maxlength - 3);
    return val.substring(0, maxlength - 3) + "...";
}
