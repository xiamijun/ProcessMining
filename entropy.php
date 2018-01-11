<?php

function p($i){
    $N=20;
    if ($i==1||$i==5||$i==3||$i==2||$i==4||$i==6||$i==7||$i==8||$i==9||$i==10||$i==11||$i==12||$i==13||$i==14||$i==15||$i==16||$i==17||$i==18||$i==19||$i==20){
        return 1/$N;
    }
}

function H($s){
    $Hs=0;
    for ($i=1;$i<=$s;$i++){
        $Hs-=p($i)*log(p($i));
    }
    return $Hs;
}

function bigP($s){
    $Ps=0;
    for ($i=1;$i<=$s;$i++){
        $Ps+=p($i);
    }
    return $Ps;
}

//遍历数为表格行数
for ($s=1;$s<=20;$s++){
    echo log(bigP($s))+log(1-bigP($s))+H($s)/bigP($s)+(H(5)-H($s))/(1-bigP($s)).'</br>';
}

