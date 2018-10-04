/*
* @Author: hp
* @Date:   2018-08-24 15:06:14
* @Last Modified by:   hp
* @Last Modified time: 2018-08-24 15:46:49
*/

$('.mytop li').click(function(event) {
	$(this).addClass('current').siblings('').removeClass('current')
  var index=$(this).index();
  $('.login1').eq(index).addClass('current').siblings('').removeClass('current')

});

$('.my').click(function(event) {
	$('.mylogin').show();
});