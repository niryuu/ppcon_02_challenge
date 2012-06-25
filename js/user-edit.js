$(function() {

  $("#get_name").click(function(){
    $("#subject01_result").html($("#yamada_name").html());

  });

  $("#add_sakurako").click(function(){
    $('#member_list').prepend('<li>櫻子</li>');
  });

  $("#add_himawari").click(function(){
    $('#member_list').prepend('<li>向日葵</li>');
  });

  $("#subject3 #remove_akari").click(function(){
    $('#member_list_remove #akari').remove();
  });

  $("#subject4 #change_visible_momo").click(function(){
    if($('#stealth_momo').css('display') == 'none'){
      $('#stealth_momo').css('display', '');
    }else{
      $('#stealth_momo').css('display', 'none');
    }
  });

  $("#subject5 #change_header_html").click(function(){
    $('h2').each(function(){
      var section = '【' + $(this).html() + '】';
      $(this).html(section);
    });
  });

});;
