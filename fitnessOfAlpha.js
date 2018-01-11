let arr=[
    0,6,7,1,3,6,3,6,7,1,8
];
let numOfTrace=4;
let placeStart=1,
    placeA=0,
    placeB=0,
    placeC=0,
    placeD=0,
    placeE=0,
    placeF=0,
    placeG=0,
    placeEnd=0;

let m=0,
    c=0,
    r=0,
    p=1;

function judgeIsEnable(num) {
    switch (num){
        case 0:
            return placeStart?true:false;
            break;
        case 7:
            return placeA?true:false;
            break;
        case 10:
            return placeA?true:false;
            break;
        case 16:
            return placeA&&placeB?true:false;
            break;
        case 1:
            return placeB?true:false;
            break;
        case 5:
            return placeA&&placeB&&placeC&&placeD&&placeF&&placeG?true:false;
            break;
        case 17:
            return placeD&&placeC?true:false;
            break;
        case 15:
            return placeC?true:false;
            break;
        case 13:
            return placeE&&placeF?true:false;
            break;
        case 3:
            return placeF?true:false;
            break;
        case 6:
            return placeE?true:false;
            break;
        case 14:
            return placeG?true:false;
            break;
        case 8:
            return false;
            break;
        case 12:
            return false;
            break;
        case 9:
            return false;
            break;
        case 2:
            return false;
            break;
        case 4:
            return false;
            break;
        case 11:
            return false;
            break;
    }
}

function enable(num) {
    switch (num){
        case 0:
            placeStart--;
            placeA++;
            placeG++;
            placeEnd++;
            placeB++;
            placeC++;
            placeE++;
            c++;
            p+=6;
            break;
        case 7:
            placeEnd++;
            c++;
            p+=2;
            break;
        case 10:
            placeA--;
            c++;
            break;
        case 16:
            placeB--;
            placeA--;
            placeEnd++;
            c+=2;
            p++;
            break;
        case 1:
            placeEnd++;
            c++;
            p+=2;
            break;
        case 5:
            placeB--;
            placeC--;
            placeA--;
            placeF--;
            placeG--;
            c+=6;
            p++;
            break;
        case 17:
            placeEnd++;
            c+=2;
            p+=3;
            break;
        case 15:
            placeEnd++;
            c++;
            p+=2;
            break;
        case 13:
            placeB++;
            placeG++;
            c+=2;
            p+=4;
            break;
        case 3:
            c++;
            p++;
            break;
        case 6:
            placeEnd++;
            c++;
            p+=2;
            break;
        case 8:
            placeEnd++;
            p++;
            break;
        case 12:
            placeEnd++;
            p++;
            break;
        case 9:
            placeEnd++;
            p++;
            break;
        case 2:
            placeEnd++;
            p++;
            break;
        case 4:
            placeEnd++;
            p++;
            break;
        case 11:
            placeEnd++;
            p++;
            break;
    }
}

function add(num) {
    switch (num){
        case 0:
            placeStart++;
            m++;
            break;
        case 7:
            placeA++;
            m++;
            break;
        case 10:
            placeA++;
            m++;
            break;
        case 16:
            if(!placeA){
                placeA++;
                m++;
            }
            if(!placeB){
                placeB++;
                m++;
            }
            break;
        case 1:
            placeB++;
            m++;
            break;
        case 5:
            if(!placeC){
                placeC++;
                m++;
            }
            if(!placeB){
                placeB++;
                m++;
            }
            if(!placeA){
                placeA++;
                m++;
            }
            if(!placeD){
                placeD++;
                m++;
            }
            if(!placeF){
                placeF++;
                m++;
            }
            if(!placeG){
                placeG++;
                m++;
            }
            break;
        case 17:
            if(!placeC){
                placeC++;
                m++;
            }
            if(!placeD){
                placeD++;
                m++;
            }
            break;
        case 15:
            placeC++;
            m++;
            break;
        case 13:
            if(!placeE){
                placeE++;
                m++;
            }
            if(!placeF){
                placeF++;
                m++;
            }
            break;
        case 3:
            placeF++;
            m++;
            break;
        case 6:
            placeE++;
            m++;
            break;
        case 14:
            placeG++;
            m++;
            break;
    }
}

for (let i=0;i<arr.length;i++){
    if (judgeIsEnable(arr[i])){
        enable(arr[i]);
    }else {
        add(arr[i]);
        enable(arr[i]);
    }
}
if (placeEnd){
    placeEnd--;
    c++;
}
r=placeStart+placeA+placeB+placeC+placeD+placeE+placeF+placeG+placeEnd;
console.log('m:'+m);
console.log('c:'+c);
console.log('r:'+r);
console.log('p:'+p);
console.log(numOfTrace*m,numOfTrace*c,numOfTrace*r,numOfTrace*p);