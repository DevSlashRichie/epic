import './LoginStyles.scss';

export function Login() {

  function handleSubmit(event) {
    event.preventDefault();

    console.log("You are logged in.");

  }

  return (

    <div className="login-box">

            <div className="login-header">
                <div className="title">
                    Login
                </div>
                <span>Use your credentials</span>
            </div>

          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input type="text" placeholder="username"/>
            </div>

            <div className="input-container">
              <input type="password" placeholder="password"/>
            </div>

            <div className="input-container submit-btn">
              <button>Submit</button>
            </div>
          </form>



        </div>

    )

}