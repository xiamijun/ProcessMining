#ProcessMining
过程挖掘硕士论文算法实现
#数据集
`Hospital Billing - Event Log.xes`。
来源于`http://data.4tu.nl/repository/uuid:76c46b83-c930-4798-a1c9-4be94dfeb741`
#预处理
依次`file.php`，`file2.php`，`trace.php`，`trace2.php`。
产生文件`hospital-newData.txt`，`hospital-newData2.txt`，`hospital-After.txt`，`hospital-After2.txt`。
#hospital.html
使用开源有向图布局算法`springy.js`。
分别计算频次矩阵，频次均值，频次阈值，循环结构，并行结构，选择结构，非自由选择结构，改进的频次矩阵，相关性矩阵，相关性阈值。
#计算熵
`entropy.php`
#拟合度计算
`fitnessOfOwn.js`为本文算法拟合度计算。
`fitnessOfOwn.js`为`aplha++`算法拟合度计算。
arr为每种轨迹。
`numOfTrace`为该种轨迹发生次数。
`place+`为Petri网中库所标记。
`m,c,r,p`分别对应拟合度计算公式中的4个变量。
`judgeIsEnable()`判断库所是否使能。
`enable()`激活变迁。
`add()`添加使变迁使能的对应库所。


