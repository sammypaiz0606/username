$('#update_username').submit(function(e) {

      e.preventDefault();

      var ui = $("#update_username input[name='username_id']").val();

      var un = $("#update_username input[name='username_name']").val();

      $.ajax({
          url: '/username_update/' + ui,
          method: 'GET',
          data: {username_name : un}
    }).then(function(message) {
      userName();
    });

});