/*-----object In Javascript */
//Sữ dụng Object trong TH lưu trữ thông tin của 1 đối tượng cụ thể
/* cú pháp :  var name_object = {
                   key1: 'value1',
                   key2: 'value2',
                   ...
                   name_function:  function() {
                        return : this.key1 + " " + this.key2 + " " + ... this.keyn
                   }
                delete name_object.key // xóa key: 'value'
     Cách 1:    name_object.keyNew = 'valueNew'; // thêm 1 key: 'value' mới
     Cách 2:    name_object['keyNew'] = 'valueNew'
              }
              console.log(name_object) // xuất 1 object
              console.log(name_object.key) // lấy 1 value ra
              console.log(name_object.name_function()) // lấy giá trị trả về return

              // tạo phương thức name_function
              // tạo thuộc tính key: 'value'
*/
/*
var myInfo = {    // đối tượng là myInfo      
    // key: 'value',    
    name: 'Le Phu',
    age: 21,
    address: 'Thanh Hóa'
}
 myInfo.school = 'Academy Of Finace' // cách 1 
// myInfo['school'] = 'AOF';         // cách 2
console.log(myInfo) // xuất 3 cặp value
*/

/* lấy value ra ngoài*/
/*var fullName = {
    firstName: 'Phu',
    lastName: 'Le',
    age: 21,
    hobby: 'football',
    myFun: function() {
        return this.firstName + " " + this.hobby + " " + this.age
    } 
} 
    // console.log(fullName.firstName) // lấy value: Phu ra
    console.log(fullName['school']); // kiểm tra key có thuộc object không --> xuất undefind
    console.log(fullName['firstName']); // trả ra value: Phu
*/


 /*   var cars = {
        name: 'Vinfast',
        length: '200cm',
        origin: 'VinGroup - Vietnam',
        color: 'black',
        myFunction: function() {
            return this.name + " " + this.length + " " + this.origin
        }
        // var motors = 'color';
    }
        console.log(cars.length)
// hoặc console.log(cars['color'])
*/

/*TH đặt biến khác lấy ra 1 value trên object  */
    var myUser = {
        user: 'dinhphu1806',
        password: 'abcde',
        phone: '0346897485',
        email: 'dinhphu.le1806it@gmail.com',
        // myFunction: function() {
        //     return this.user + " " + this.email + " " + this.password
        // }
    }
    var myKey = 'email';
    console.log(myUser[myKey]);

/*TH thêm key: 'value' lên trên*/
var myPic = 'address';
var myUser = {
    user: 'dinhphu1806',
    password: 'abcde',
    phone: '0346897485',
    email: 'dinhphu.le1806it@gmail.com',
    // myFunction: function() {
    //     return this.user + " " + this.email + " " + this.password
    // }
    address: 'Xuan Loc - Trieu Son - Thanh Hoa',
}

console.log(myUser);

/* Xóa đi 1 ke: 'value' */
var myPic = 'address';
var myUser = {
    user: 'dinhphu1806',
    password: 'abcde',
    phone: '0346897485',
    email: 'dinhphu.le1806it@gmail.com',
    // myFunction: function() {
    //     return this.user + " " + this.email + " " + this.password
    // }
    address: 'Xuan Loc - Trieu Son - Thanh Hoa',
};
delete myUser.email; // xóa 1 key: 'value'

console.log(myUser)

/* Lưu trữ value vào 1 function */
var sports = {
    football: 'chân',
    badminton: 'vợt',
    volleyball: 'tay - chân',
    basketball: 'tay',
    myFunction: function() {
        return this.badminton + " " + this.volleyball
    },
    // đặt ra 1 phương thức getSport
    getSport: function() {

    },
    // tạo ra 1 thuộc tính address
    address: 'Ha noi'
}
    console.log(sports.myFunction())

    // Function  --> Phương thức / method
    // Others --> Thuộc tính / Property