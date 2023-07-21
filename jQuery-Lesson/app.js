// HTMLの読み込みが終わってからjQueryが実行されるように記述する

// $( セレクタ ).メソッド ( パラメータ );

$(document).ready(function () {
  // jQueryプログラムの内容
  $('body').html('<h1>Hello jQuery!!</h1>');
});

// 上記の省略形
// $(function(){
//   // jQueryプログラムの内容
// });