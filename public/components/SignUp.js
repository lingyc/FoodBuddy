var SignUp = (props) => (

  < div >
  <p id='loginFields'>Name</p>  < input type = 'text'
  id = 'SignUpName'
  name = 'SignUpName' / > < br / >
  <p id='loginFields'>Password</p> < input type = 'text'
  id = 'SignUpPassword'
  name = 'SignUpPassword' / > < br / > 

<p id='loginFields'>Email Address</p>< input type = 'text'
  id = 'SignUpEmail'
  name = 'SignUpEmail' / > < br / >
<p id='loginFields'>Upload Picture</p>< input type = 'text'
  id = 'SignUpPicture'
  name = 'SignUpPicture' / > < br / >

  <div id='buttons2'>< button onClick = {
    function() {
      props.enterUser(document.getElementById('SignUpName').value, document.getElementById('SignUpPassword').value)
    }
  } > Sign Up! < /button><button onClick={() => (props.onClick("Login"))}> Log In Instead< /button> </div> < /div >

)
