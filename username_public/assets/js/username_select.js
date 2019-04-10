function userName() {
  $('div').empty();
 $.ajax({
      url: '/username.json',
      method: 'GET'
    }).then(function(username) {
      for(var usernameIndex in username) {
        // console.log(usernameIndex);
        // console.log(username[usernameIndex]);
        // console.log(username);
        var p = $('<p>');
        // p.text(JSON.stringify(username[usernameIndex]))

        p.text(`id: ${username[usernameIndex].id}, name: ${username[usernameIndex].username_name}`)

        $('div').append(p);

      };
    }); 
 };
