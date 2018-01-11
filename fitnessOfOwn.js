let arr=[0,6,7,1,3,6,3,6,7,1,8];
let numOfTrace=4;
let placeStart=1,
    placeA=0,
    placeB=0,
    placeC=0,
    placeD=0,
    placeE=0,
    placeF=0,
    placeG=0,
    placeH=0,
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
        case 17:
            return placeA?true:false;
            break;
        case 6:
            return placeA?true:false;
            break;
        case 9:
            return placeA?true:false;
            break;
        case 7:
            return placeC?true:false;
            break;
        case 1:
            return placeD?true:false;
            break;
        case 12:
            return placeD&&placeE?true:false;
            break;
        case 8:
            return placeF&&placeE?true:false;
            break;
        case 2:
            return placeG?true:false;
            break;
        case 4:
            return placeH?true:false;
            break;
        case 3:
            return placeB&&placeF?true:false;
            break;
    }
}

function enable(num) {
    switch (num){
        case 0:
            placeStart--;
            placeA++;
            c++;
            p++;
            break;
        case 17:
            c++;
            p++;
            break;
        case 6:
            placeA--;
            placeB++;
            placeC++;
            c++;
            p+=2;
            break;
        case 3:
            placeB--;
            placeF--;
            placeA++;
            c+=2;
            p++;
            break;
        case 9:
            placeA--;
            placeEnd++;
            c++;
            p++;
            break;
        case 7:
            placeC--;
            placeD++;
            placeE++;
            c++;
            p+=2;
            break;
        case 1:
            placeD--;
            placeF++;
            c++;
            p++;
            break;
        case 12:
            placeD--;
            placeE--;
            placeF++;
            c+=2;
            p++;
            break;
        case 8:
            placeE--;
            placeF--;
            placeEnd++;
            placeG++;
            c+=2;
            p+=2;
            break;
        case 2:
            placeG--;
            placeF++;
            placeH++;
            c++;
            p+=2;
            break;
        case 4:
            placeH--;
            placeF++;
            c++;
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
        case 17:
            placeA++;
            m++;
            break;
        case 6:
            placeA++;
            m++;
            break;
        case 3:
            if(!placeB){
                placeB++;
                m++;
            }
            if(!placeF){
                placeF++;
                m++;
            }
            break;
        case 9:
            placeA++;
            m++;
            break;
        case 7:
            placeC++;
            m++;
            break;
        case 1:
            placeD++;
            m++;
            break;
        case 12:
            if(!placeD){
                placeD++;
                m++;
            }
            if(!placeE){
                placeE++;
                m++;
            }
            break;
        case 8:
            if(!placeE){
                placeE++;
                m++;
            }
            if(!placeF){
                placeF++;
                m++;
            }
            break;
        case 2:
            placeG++;
            m++;
            break;
        case 4:
            placeH++;
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
r=placeStart+placeA+placeB+placeC+placeD+placeE+placeF+placeG+placeH+placeEnd;
console.log('m:'+m);
console.log('c:'+c);
console.log('r:'+r);
console.log('p:'+p);
console.log(numOfTrace*m,numOfTrace*c,numOfTrace*r,numOfTrace*p);