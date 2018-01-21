# ProcessMining
过程挖掘硕士论文算法实现

# 数据集
`Hospital Billing - Event Log.xes`   

来源于`http://data.4tu.nl/repository/uuid:76c46b83-c930-4798-a1c9-4be94dfeb741`  

埃因霍温科技大学提供的医院ERP系统医院账单日志。  

# 预处理
依次`file.php`，`file2.php`，`trace.php`，`trace2.php`贵轨迹进行归类，分别输出轨迹及其发生次数。  

产生文件`hospital-newData.txt`，`hospital-newData2.txt`，`hospital-After.txt`，`hospital-After2.txt`。
# hospital.html
使用开源有向图布局算法`springy.js`。  

分别计算频次矩阵，频次均值，频次阈值，循环结构，并行结构，选择结构，非自由选择结构，改进的频次矩阵，相关性矩阵，相关性阈值。
# 计算熵
`entropy.php`
# 拟合度计算
模拟Petri网触发规则，计算拟合度。  

`fitnessOfOwn.js`为本文算法拟合度计算。  

`fitnessOfOwn.js`为`aplha++`算法拟合度计算。  

`fitness-heuristic.js`为启发式过程挖掘算法拟合度计算。  

arr为每种轨迹。  

`numOfTrace`为该种轨迹发生次数。  

`place+`为Petri网中库所标记。  

`m,c,r,p`分别对应拟合度计算公式中的4个变量。  

`judgeIsEnable()`判断库所是否使能。  

`enable()`激活变迁。  

`add()`添加使变迁使能的对应库所。  

最终拟合度：  

本文算法：
`0.8769815952239328`  

启发式算法：
`0.8225415046044828`  

a++算法：
`0.6257736357738879`


