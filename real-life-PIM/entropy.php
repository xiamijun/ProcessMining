<?php

function p($i){
    $N=10;
    if ($i==1||$i==5||$i==3){
        return 1/$N;
    }elseif ($i==2){
        return 5/$N;
    }elseif ($i==4){
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
for ($s=1;$s<=5;$s++){
    echo log(bigP($s))+log(1-bigP($s))+H($s)/bigP($s)+(H(5)-H($s))/(1-bigP($s)).'</br>';
}

