/*---------- PARAM IN FUNCTION-------------
1. Tham số
  - Định nghĩa: + Tham số là 1 giá trị mà cta có thể truyền vào khi gọi 1 function, 
                + Tham số để làm công việc gì đó trong function, có thể tính toán or xử lý dữ liệu gì đó
  - Kiểu dữ liệu ?  + kiểm tra kiểu console.log(typeof + tên tham số)   string, number... không giới hạn
  - Tính private ? riêng tư đưa console.log ra ngoài {} báo lỗi
  - 1 tham số
  - Nhiều tham số
2. Truyền tham số
  - 1 tham số
  - Nhiều tham số
3. Arguments ?
  - Đối tượng argument 
  - Giới thiệu vòng for
*/
//------Diễn giải:
//1---
// Tham số
/*function showBook(message, wechat) {
   
    if(message) {
        console.log(message)
    }
    if(wechat) {
        console.log(wechat)
    }
}
Kiểu dữ liệu
showBook('1','2'); *//*gọi hàm rồi truyền tham sô vào*/  /*gọi là đối số*/ 
 /*  function showBook(message) {
       console.log(typeof message) // kiểu string
   }
   showBook('thông báo !') //  
*/

// 2. Truyền tham số
// - 1 tham số
/*function hideBook(message) {
    console.log(message)
}
hideBook('Thống báo !') */

// - Nhiều tham số
/*function hideBook(bien1, bien2) {
    // console.log(bien1);
    // console.log(bien2);
    console.log(typeof bien1, typeof bien2);
}
hideBook('1000', 3000)*/

// 3. Arguments
/*
function hideBook() {
    var myString = '';
    for(var param of arguments) { 
        myString += `${param} - ` // tạo dấu gạch ngang
        // console.log(param)
    }
    console.log(myString)
    // vòng lặp for tạo biến param chạy vòng thứ nhất lấy index = 0 từ arr arguments
    // vòng for thứ nhất chạy lấy element[JS] đầu tiền của arr arguments gán cho biến param chạy đến dấu ngoặc } sẽ dừng lại
    // chạy tiếp vòng thứ 2 tiếp tục gán element thứ 2
    // in lần lượt
}   
hideBook('JS', 'JAVA', 'PHP') // xuất JS - JAVA - PHP-
*/

// function showBook() {
//     for(var btn of arguments) {
//         console.log(btn)
//     }
// }
// showBook('JS','PHP', 'C#', 'GoLang')

/*function showBook() {
    for(var btn of arguments) {
        console.log( btn)
    }  
}
showBook(100, 2000, 56)
*/
// var hideBook = function() { // cách đặt tên hàm khác

// }


//-------------- return in function - Javascript basic -------------

// var isConfirm = confirm('Message !');

// console.log(isConfirm)

/* 
function sum(a, b) {
    return (a+b) // dưới row return không action
    // return a.toString() + b.toString() // nối chuỗi thành 23
    // return [a, b] // trả về giá trị màng [0] [1] [2]
}
var result = sum (2, 3);

console.log('Tổng là: ', result)
*/

/* -------------    1 SỐ ĐIỀU CẦN BIẾT VỀ FUNCTION -----------------
1/ Khi function đặt trùng tên
2/ Khai báo biến trong hàm
3/ Định nghĩa hàm trong hàm
*/  
//-- Diễn giải -----
/* 1/ Khi function đặt trùng tên : function sau sẽ ghi đè function trước
                                  -> function sau được định nghĩa và thực thi
*/
 /*   function showMesage() {
        console.log('message1');
    }
     function showMesage() {
         console.log('message2');
     }
     function showMesage() {
        console.log('message3');
    }
     showMesage(); // xuất message3
*/
// 2/ Khai báo biến trong hàm : được    
 /*  function showMesage() {
        var fullName = 'Le Phu';
        console.log(fullName);
       
    }
    showMesage();
*/
    // console.log(fullName); //có tính private nên không đưa ra ngoài được

 //3/ Định nghĩa hàm trong hàm : Được
/*    function showMesage() {
        function showMesage2() {
            console.log('Message2');
        }
        showMesage2(); // xuất message2
    }
    showMesage();
 */   //showMesage2(); // báo lỗi undefind



/* -------------    CÁC LOẠI FUNCTION -----------------    
1/ Declaration function // gọi lại hàm ở đâu cũng được thực thi
2/ Expression function    gọi lại hàm phía trên thì không được thực thi
3/ Arrow Function
*/
//-- Diễn giải:-----
//1/ Declaration function: 
 /*Cách 1*/ 
 /*showMesage1();
     function showMesage() {
        console.log('Declaration function')
     }

     var showMesage2 = function() { // định nghĩa ra 1 biến
        console.log('Expression function')
     }
*/
    

 /*    setTimeout(function autoLogin() {  // callback

     });

    var myOject = {
        Name: 'Le Phu',
        Age: 21,
        Adress: 'Thanh Hoa',
        myFunction: function() {
            return this.Name + " " + this.Age + " " + this.Adress 
        }
            
    }
    console.log(myOject.myFunction())
*/
