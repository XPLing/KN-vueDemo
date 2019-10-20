/**
 * Created by XPL on 2019/10/13.
 */

;(function () {
  var app = new Vue({
    el: '#vueApp',
    data: {
      message: 'Vue Form!',
      habit: [],
      age: 20,
      name: 'Tony'
    }
  });
  $('#jqueryApp').on('input', 'input', function (e) {
    var target = $(this),
      name = target.attr('name'),
      val = target.val();
    if (name === 'habit') {
      val = $('[type="checkbox"][name="habit"]:checked');
      val = Array.from(val);
      val = val.map(val => $(val).val()).join(',');
    }
    $('#' + name + 'Val').html(val);
  });
}());

