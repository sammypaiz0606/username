$('#insert_username').submit(function(e) {
	$('article').empty();
      e.preventDefault();
      var un = $("#insert_username input[name='username_name']").val();

      $.ajax({
          url: '/username_insert',
          method: 'GET',
          data: {username_name : un}
    }).then(function(message) {
      userName();
    });

});