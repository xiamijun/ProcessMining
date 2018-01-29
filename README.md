# ProcessMining
过程挖掘硕士论文算法实现

#synthetic  
人造日志，随机产生噪声。噪声比例分别为0.02%，0.05%，0.1%，0.2%。

# real-life-hospital
现实日志：医院ERP系统医院账单日志
`Hospital Billing - Event Log.xes`原始日志   

来源于`http://data.4tu.nl/repository/uuid:76c46b83-c930-4798-a1c9-4be94dfeb741`  

由埃因霍温科技大学提供。  

#real-life-PIM  
现实日志：上海大学流程与智能管理系统日志。由上海大学信息化办公室提供。

# 预处理
依次`file.php`，`file2.php`，`trace.php`，`trace2.php`贵轨迹进行归类，分别输出轨迹及其发生次数。  

产生文件`hospital-newData.txt`，`hospital-newData2.txt`，`hospital-After.txt`，`hospital-After2.txt`。
# 过程挖掘
使用开源有向图布局算法`springy.js`。  

分别计算频次矩阵，频次均值，频次阈值，循环结构，并行结构，选择结构，非自由选择结构，改进的频次矩阵，相关性矩阵，相关性阈值。
# 计算熵
`entropy.php`计算熵
# 模型质量计算
模拟Petri网触发规则，计算拟合度。  

`fitnessOfOwn.js`为本文算法拟合度计算。  

`fitnessOfAlpha.js`为`aplha++`算法拟合度计算。  

`fitness-heuristic.js`为启发式过程挖掘算法拟合度计算。   

`aBOfOwn.html`为本文算法行为合理度计算。   

`aBOfAlpha.js`为`aplha++`算法拟合度计算。  

`aBOfheuristic.js`为启发式过程挖掘算法拟合度计算。


# trace-clustering  
轨迹聚类，基于最小生成树。噪声比例分别为0.02%，0.05%，0.1%，0.2%。  

`distance.html`计算轨迹之间的距离。  

`k.html`使用克鲁斯卡尔算法生成最小生成树。  

`precisionAndRecall2.html`计算准确率和召回率。


