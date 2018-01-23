/**
 * FM:二维频次矩阵
 * N:默认值0.05
 * m：日志中的轨迹数
 * n：日志中的活动数
 * thresholdOfCorrelation：计算出的相关性阈值
 * thresholdOfFrequency：频次阈值
 *
 */
let FM=[[0,4,0,0,0,11,30367,7,3,4862,0,38,0,0,5,11,0,42287],[0,278,37,2379,0,2,20,212,63878,83,0,1,7,0,126,32,1,1],[0,0,15,12,2003,0,0,0,912,0,0,3,0,0,6,21,0,0],[0,13,0,4,0,3,3291,0,0,1118,0,0,13,1,1,3,0,222],[0,9,1,834,11,2,5,260,806,2,0,4,0,0,24,54,0,0],[0,0,0,0,0,0,27,0,0,10,0,0,0,0,0,0,0,1],[0,28,0,414,0,1,129,70265,0,219,0,0,8,2,5,56,0,0],[0,66278,0,365,0,4,40,70,448,171,1,0,3205,66,56,99,16,0],[3,876,2917,0,0,0,4,0,70,0,0,12,7,0,68,0,0,0],[0,0,0,0,0,0,0,0,0,4,0,6,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,0,29,0,8,3,0,174,0,0,0,0,0,5],[0,455,0,599,0,4,16,8,1245,95,0,3,306,6,7,367,432,0],[0,0,1,44,0,0,1,2,25,0,0,0,0,0,2,0,0,0],[0,57,3,6,0,1,5,83,52,4,0,0,4,0,54,1,0,0],[0,2,0,0,0,3,8,19,0,6,0,0,7,0,0,42,0,0],[0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0],[0,4,0,0,0,7,40802,0,0,1643,0,28,0,0,1,12,0,2721]];
console.log('FM',FM);

let N=0.05,
    m=101289,
    n=18;
let thresholdOfCorrelation=448/449;
let thresholdOfFrequency=1+Math.round(N*m/n);
console.log('thresholdOfFrequency:',thresholdOfFrequency);
//存在循环的数组，需手动填写
let listOfLoop=[`12 and 12`,'17 and 17','1 and 8','8 and 1','2 and 8','8 and 2','3 and 6','6 and 3'];
let listOfParallel=[];
let listOfSelective=[];
//存在非自由选择结构的数组，需手动填写
let listOfNFC=[];
//MeanOfFM：频次均值
let MeanOfFM=sumOfFM(FM)/isNotZero(FM);
console.log('MeanOfFM:'+MeanOfFM);

//pushParallel
//    判断并行，并放入数组
for (let i=0;i<n;i++){
    for (let j=0;j<n;j++){
        if (i!==j&&FM[i][j]>thresholdOfFrequency&&FM[j][i]>thresholdOfFrequency&&FM[i][j]+FM[j][i]>MeanOfFM&&listOfLoop.indexOf(`${i} and ${j}`)===-1){
            listOfParallel.push(`${i} and ${j}`);
        }
    }
}

//improveOfFM
//改进的频次矩阵
let FM2=new Array(n);
for (let i=0;i<n;i++){
    FM2[i]=new Array(n);
    FM2[i].fill(0);
}
for (let i=0;i<n;i++){
    for (let j=0;j<n;j++){
        if(i!==j){
            if(FM[i][j]<=thresholdOfFrequency||listOfParallel.indexOf(`${i} and ${j}`)!==-1||listOfLoop.indexOf(`${i} and ${j}`)!==-1){
                FM2[i][j]=0;
            }else {
                FM2[i][j]=FM[i][j];
            }
        }else{
            if (FM[i][j]<MeanOfFM||listOfLoop.indexOf(`${i} and ${j}`)!==-1){
                FM2[i][j]=0;
            }else {
                FM2[i][j]=FM[i][j];
            }
        }
    }
}
console.log('improveOfFM',FM2);

let CM=getCM(FM2);
console.log('CM',CM);

//pushSelective
//判断选择，并放入数组
for (let k=0;k<n;k++){
    for (let i=0;i<n-1;i++){
        for (let j=i+1;j<n;j++){
            if(FM2[k][i]>thresholdOfFrequency&&CM[k][i]>thresholdOfCorrelation&&FM2[k][j]>thresholdOfFrequency&&CM[k][j]>thresholdOfCorrelation&&listOfParallel.indexOf(`${i} and ${j}`)===-1){
                listOfSelective.push(`${i} and ${j}`);
            }
        }
    }
}


//求频次均值
function sumOfFM(FM) {
    let sum=0;
    for (let i=0;i<FM.length;i++){
        for (let j=0;j<FM[i].length;j++){
            sum+=FM[i][j];
        }
    }
    return sum;
}
//console.log('sumOfFM:'+sumOfFM(FM));

function isNotZero(FM) {
    let count=0;
    for (let i=0;i<FM.length;i++){
        for (let j=0;j<FM[i].length;j++){
            if (FM[i][j]!==0){
                count++;
            }
        }
    }
    return count;
}
//    console.log('isNotZero:'+isNotZero(FM));

//求矩阵CM
function getCM(FM2) {
    let CM=new Array(n);
    for (let i=0;i<n;i++){
        CM[i]=new Array(n);
        CM[i].fill(0);
    }
    for (let i = 0; i < FM2.length; i++) {
        for (let j = 0; j < FM2[i].length; j++) {
            CM[i][j]=(FM2[i][j]-FM2[j][i])/(FM2[i][j]+FM2[j][i]+1);
        }
    }
    return CM;
}


console.log('存在并行关系的活动：'+listOfParallel);
console.log('存在选择关系的活动：'+listOfSelective);

//存在边的放入数组
let links=[];
let edges=[];
for (let i=0;i<n;i++){
    for (let j=0;j<n;j++){
        if (CM[i][j]>=thresholdOfCorrelation||listOfNFC.indexOf(`${i} and ${j}`)!==-1||listOfLoop.indexOf(`${i} and ${j}`)!==-1){
            links.push(`${i} to ${j}`);
            edges.push(new Array(i,j));
        }
    }
}
console.log('存在边：'+links);


var graph = new Springy.Graph();

graph.addNodes('node0','node1','node2','node3','node4','node5','node6','node7','node8','node9','node10','node11','node12','node13','node14','node15','node16','node17');
for (let i=0;i<edges.length;i++){

    graph.addEdges(
        [`node${edges[i][0]}`,`node${edges[i][1]}`,{color: '#000'}]
    );
}



jQuery(function(){
    var springy = jQuery('#springydemo').springy({
        graph: graph
    });
});