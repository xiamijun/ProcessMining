<?php
$fp=fopen('hostipal-newData.txt','r');
$str='';
while (!feof($fp)){
    $buf=fgets($fp);
    $arr2=explode("\t",$buf);
    array_splice($arr2,-2);
    $item=implode(',',$arr2);
    $str.=$item."\n";
}
$fp2=fopen('hostipal-After.txt','w');
fwrite($fp2,$str);
fclose($fp);
fclose($fp2);