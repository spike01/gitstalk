$(document).ready(function() {
  $('.gitstalk').on('submit', function(e) {
   e.preventDefault();
    var url = 'https://api.github.com/users/' + $('input.username').val() + '?access_token=4d969c27fa2fc1920581ef5f13015f239a1ccef7';
    var template = $('template').html();
    var info = $.get(url, function(info) {
     $('.container').append(Mustache.render(template, info));
     console.log(Mustache.render(template, info));
     }).fail(function() {
        $('.container').append("User not found")     
     }).always(function() {
     $('input.username').val('');
   });
 });
  });
