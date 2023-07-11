// let hello = "Hi there I'm Rina";
// alert(hello);

// varによる再宣言はOK
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

// varとletは再代入OK
let name = "taro"
console.log(name)
name = "jiro"
console.log(name)

// 0~9までをループによってコンソールに出力
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//新たに値を代入する必要のないものに関してはconstで宣言


//
var str = "webcamp"

function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()

