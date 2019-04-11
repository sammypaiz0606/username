
function userName(){
  $('div').empty();

  $.ajax({
    url: '/username.json',
    method: 'GET'
  }).then(function(username){
    for (var usernameIndex in username){
      // console.log(catIndex);
      // console.log(cats[catIndex]);
      // console.log(cats);

      var p = $('<p>'); // <p></p>

      //one way
        // p.text(JSON.stringify(cats[catIndex]))

      //another way
        // p.text("id: " + cats[catIndex].id + ", cat name: " + cats[catIndex].cat_name)

      //another way
        p.text(`id: ${username[usernameIndex].id}, cat name: ${username[usernameIndex].username_name}`)

        var a = $('<a>'); //<a></a>
        a.text('delete'); //<a>delete</a>
        a.attr('href', '/username_delete?username_id=' + username[usernameIndex].id)
        //<a href='/cats-delete?cat_id=3'>delete</a>

        p.append(a);


      $('article').prepend(p);
    }
  })
}
