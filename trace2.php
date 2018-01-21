<?php
/**
 * Created by PhpStorm.
 * User: xiejun
 * Date: 2018/1/8
 * Time: 下午3:47
 */
$fp=fopen('hostipal-After2.txt','r');

$traces=[];
$count=[];
while (!feof($fp)){
    $buf=fgets($fp);
    if (in_array($buf,$traces)){
        $key=array_search($buf,$traces);
        $count[$key]++;
    }else{
        array_push($traces,$buf);
        array_push($count,1);
    }
}

//
//print_r($traces);
//print_r($count);
//foreach ($traces as $v){
//    echo '['.$v.']'.',';
//}
foreach ($count as $v){
    echo $v.',';
}


fclose($fp);