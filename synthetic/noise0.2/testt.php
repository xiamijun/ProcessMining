<?php


function p($i){
    $N=15;
    if ($i==2||$i==3||$i==4||$i==6||$i==7||$i==8||$i==9||$i==10||$i==11||$i==12||$i==13){
        return 1/$N;
    }elseif ($i==5||$i==1){
        return 2/$N;
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
for ($s=1;$s<=13;$s++){
    echo log(bigP($s))+log(1-bigP($s))+H($s)/bigP($s)+(H(13)-H($s))/(1-bigP($s)).'</br>';
}

