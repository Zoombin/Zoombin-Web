<?php
/* 判断是否为手机访问 */
$ua = strtolower($_SERVER['HTTP_USER_AGENT']);
$uachar = "/(nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|mobile)/i";
if(($ua == '' || preg_match($uachar, $ua))&& !strpos(strtolower($_SERVER['REQUEST_URI']),'wap')){
    //手机访问
    header("Location:/mobile"); 
	exit;
}else{
    //PC 访问
    header("Location:/index_pc.html"); 
	exit;
}