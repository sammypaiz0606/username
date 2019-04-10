$('form').submit(function(e) {

      e.preventDefault();
      
      var un = $("input[name='username_name']").val();

      $.ajax({
          url: '/username_insert',
          method: 'GET',
          data: {username_name : un}
    }).then(function(message) {
      userName();
    });

});