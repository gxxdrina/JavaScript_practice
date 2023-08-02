//  天気ボタン
// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "baa833ddcf328b938deada18096b0212";
$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    // Ajaxを実装するメソッド
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
      
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
    });
  });
});



$(function() {
  $('#back a').on('click',function(event){
    // #back内のaタグがクリックされたときの処理
    
//  $('セレクタ名').animate({
//  変化対象のプロパティ名:変化値
//  }, アニメーションの動作時間);

    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});


$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});
