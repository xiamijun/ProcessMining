<?php


function p($i){
    $N=17;
    if ($i==2||$i==4||$i==6||$i==8){
        return 1/$N;
    }elseif ($i==5){
        return 2/$N;
    }elseif ($i==3||$i==7){
        return 3/$N;
    }elseif ($i==1){
        return 5/$N;
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
for ($s=1;$s<=8;$s++){
    echo log(bigP($s))+log(1-bigP($s))+H($s)/bigP($s)+(H(8)-H($s))/(1-bigP($s)).'</br>';
}

