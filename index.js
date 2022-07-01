// bai tap 1
 /* input:lương 1 ngày, số ngày làm
    process:
    1.lấy input
    2.tính lương= số ngày *lương 1 ngày
    3.log ra màn hình

    output:tiền lương
  */
 var day = 21;
 var salaryPerDay = 200000;

 var salary= day * salaryPerDay;
 console.log("tiền lương:",salary)

//  bai tap 2
/* input: 5 số thực
    process
    1.lấy 5 số thực
    2.tính trung bình 5 số
    3,log ra màn hình 

    ouput: trung bình 5 số
*/
var num1 = 10
var num2 = 20
var num3 = 33
var num4 = 22
var num5 = 55
var ave = (num1 + num2 + num3 +num4 + num5)/5

console.log("trung bình cộng 5 số:",ave)

// bai tap 3
/* 
input:giá usd, tiền usd
process:
    1.lấy input số tiền đô
    2.lấy tiền đô*tiền việt
    3.log ra số tiền việt
output:đổi ra tiền việt

*/
var USD = 23500
var money = 10
var VND = USD * money

console.log("Số tiền Việt bạn có là:",VND,"VND")

// bài tập 4
/* 
input:chiều dài, chiều rộng HCN
process:
    1. láy input chiều dài, chiều rộng Hcn
    2.tính chu vi hcn:(dài+rộng)/2
    3. tính diện tích hcn:dài*rộng
    4. log ra màn hình chu vi và diện tích
output:diện tích, chu vi
*/

var width= 10
var height = 30
var circum = (width + height)/2
var area = width * height

console.log("chu vi HCN là ",circum)
console.log("diện tích HCN là",area)

// bài tập 5
/* 
input:nhập số 2 chữ số
procese:
    1.lấy input chữ số có 2 số
    2.lấy số hàng chục:so /1 0
    3.lấy số hàng đơn vị: so % 10
    4.tính tổng 2 số 
output:tổng 2 ký số 
*/

var input = 28;
var num1 = input%10;
var num2 = Math.floor(input/10);
var total = num1 + num2;
console.log("Tổng 2 ký số là ",total)