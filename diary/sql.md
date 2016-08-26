* sql语言，是结构化查询语言
 * 是一种编程语言用来管理储存在数据库中的数据
 * 通过简单的sql操作，声明语句，这使数据准确，安全，并保证数据的完整性，无论大小

-------
* 查询
```
SELECT * FROM tables_name; //查询整个表的信息
SELECT 需要查询的名字 FROM table_name;
SELECT DISTINCT genre FROM movies； //一个属性值有很多相同，这个是列出相同的一行就表示出来
SELECT * FROM table—name WHERE ly>7；//根据条件查询
SELECT * FROM table_name WHERE name LIKE "se_en";('%a%'),匹配服
SELECT * FROM table_name WHERE name BETWEEN 'A' AND 'C'; //名字是在A和C之间的
SELECT * FROM table_name WHERE year BETWEEN 1990 AND 2000 AND genre="comedy";//双重语句查询，后面加了and
SELECT * FROM table_name WHERE something OR something;//两个条件满足一个即可
SELECT * FROM table_name ORDER BY year DESC;//按照year的降序排列表
SELECT * FROM table_name ORDER BY year ASC LIMIT 3;//按照jyear的升序排列，只排列3行数据
SELECT COUNT(*) FROM table_name;//算出表的总数据
SELECT price, COUNT(*) FROM fake_apps WHERE downloads > 20000 GROUP BY price;
//从表中查询下载量>20000的价格数量及价格列表,按照price来排列顺序
SUM(download)//下载总量
MAX()//最大的下载量
MIN()//最小的下载量
AVG()//平均量
ROUND(download,2)//下载量省道小数点后两位


```
* 创建
```
CREATE TABLE table_name (列表名 数据类型);
```
* 插入数据
```
INSERT INTO table_name (id,name,age) VALUES (1,'ly',20);//增加一个新的行
```
```
UPDATE celebs
SET age=20
WHERE id=1;  //在celebs表中，id=1的地方插入age=20,修改表中的行
```
```
ALTER TABLE table_name ADD COLUMN 列名 数据类型; //在表后面添加一列，并添加数据类型
```
* 删除数据
```
DELETE FROM celebs WHERE twitter_handle IS NULL; //从celebs表中删除twitter—handle是为空的行
```


