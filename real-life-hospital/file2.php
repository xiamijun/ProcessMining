$fp=fopen('hostipal-newData.txt','r');
$str='';
$count=0;
while (!feof($fp)){
    $buf=fgets($fp);
    $count++;
    $arr=explode("\t",$buf);
    for ($i=0;$i<count($arr)-2;$i++){
        $str.=$count.';'.$arr[$i]."\n";
    }

}
$fp2=fopen('hostipal-newData2.txt','w');
fwrite($fp2,$str);
fclose($fp);
fclose($fp2);