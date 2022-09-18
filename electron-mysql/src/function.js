const mysql = require('mysql');

function setInnerHTML(text){
  const element = document.getElementById('users')
  element.innerHTML += '<div>' + text + '</div>'
}

document.getElementById('btn').addEventListener('click', ()=>{
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'test'
  })

  connection.connect()

  connection.query('SELECT * FROM user', function(error, results, fields){
    if(error) throw error;
    console.log('users: ', results);
    results.forEach(user=>{
      setInnerHTML(user.username)
    })
  })

  connection.end()
})


