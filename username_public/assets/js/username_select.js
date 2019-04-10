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

        var a = $('<a>'); //<a></a>
        a.text('delete'); //<a>delete</a>
        a.attr('href', '/username_delete?username_id=' + username[usernameIndex].id);
        //<a href='/username_delete?usernam_id3'>delete</a>

        p.append(a);
        $('div').prepend(p);

      };
    }); 
 };
