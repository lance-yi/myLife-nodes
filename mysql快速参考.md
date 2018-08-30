
# MySQL常用 快速参考

| 语句                      | 语法                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| AND / OR                  | SELECT column_name(s) FROM table_name WHERE condition AND/OR condition                                               |
| ALTER TABLE (add column)  | ALTER TABLE table_name ADD column_name datatype                                                                      |
| ALTER TABLE (drop column) | ALTER TABLE table_name DROP COLUMN column_name                                                                       |
| AS (alias for column)     | SELECT column_name AS column_alias FROM table_name                                                                   |
| AS (alias for table)      | SELECT column_name FROM table_name  AS table_alias                                                                   |
| BETWEEN                   | SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2                                    |
| CREATE DATABASE           | CREATE DATABASE database_name                                                                                        |
| CREATE INDEX              | CREATE INDEX index_name ON table_name (column_name)                                                                  |
| CREATE TABLE              | CREATE TABLE table_name ( column_name1 data_type,column_name2 data_type,.......)                                     |
| CREATE UNIQUE INDEX       | CREATE UNIQUE INDEX index_name ON table_name (column_name)                                                           |
| CREATE VIEW               | CREATE VIEW view_name AS SELECT column_name(s) FROM table_name WHERE condition                                       |
| DELETE FROM               | DELETE FROM table_name WHERE condition                                                                               |
| DROP DATABASE             | DROP DATABASE database_name                                                                                          |
| DROP INDEX                | DROP INDEX table_name.index_name                                                                                     |
| DROP TABLE                | DROP TABLE table_name                                                                                                |
| GROUP BY                  | SELECT column_name1,SUM(column_name2) FROM table_name GROUP BY column_name1                                          |
| HAVING                    | SELECT column_name1,SUM(column_name2) FROM table_name GROUP BY column_name1 HAVING SUM(column_name2) condition value |
| IN                        | SELECT column_name(s) FROM table_name WHERE column_name IN (value1,value2,..)                                        |
| INSERT INTO               | INSERT INTO table_name/table_name(column_name1, column_name2,...) VALUES (value1, value2,....)                       |
| LIKE                      | SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern                                                 |
| ORDER BY                  | SELECT column_name(s) FROM table_name ORDER BY column_name [ASC \| DESC]                                             |
| SELECT                    | SELECT column_name(s) FROM table_name                                                                                |
| SELECT *                  | SELECT * FROM table_name                                                                                             |
| UPDATE                    | UPDATE table_name SET column_name=new_value [, column_name=new_value] WHERE column_name=some_value                   |
| WHERE                     | SELECT column_name(s) FROM table_name WHERE condition                                                                |
