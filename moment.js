mutable 可变的
mutability 可变
var a = moment('2016-1-1');
var b = a.add(1,'week');
a.format();   //"2016-01-08T00:00:00-06:00"

var a = moment('2016-1-1');
var b = a.clone().add(1,'week');
a.format();   //"2016-01-01T00:00:00-06:00"

http://momentjs.cn/docs
