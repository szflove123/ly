* sql语言，是结构化查询语言
 * 是一种编程语言用来管理储存在数据库中的数据
 * 通过简单的sql操作，声明语句，这使数据准确，安全，并保证数据的完整性，无论大小

-------
* 查询
```
SELECT * FROM tables_name; //查询整个表的信息
SELECT 需要查询的名字 FROM table_name;
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


