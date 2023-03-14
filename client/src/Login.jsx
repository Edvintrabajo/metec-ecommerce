function Login() {  
    return (
      <div className="bg-center bg-cover p-4 w-full h-screen flex flex-col items-center justify-center">
          <form id="login-form" action="#" method="post" className="bg-white rounded-2xl flex justify-center items-start flex-wrap h-2/5 text-black tablet:text-xl laptop:w-3/5 laptop:h-2/6 desktop:text-2xl desktop:h-2/5 desktop:w-2/5 shadow-low-box-shadow p-3">
            <div className="w-full flex justify-between p-4 tablet:justify-evenly m-3">
              <label htmlFor="Email" className="tablet:w-1/4 tablet:p-2">Email</label>
              <input type="email" name="Email" id="Email" className="border-b-2 border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
            </div>
            <div className="w-full flex justify-between p-4 tablet:justify-evenly m-3">
              <label htmlFor="password" className="tablet:w-1/4 tablet:p-2">Password</label>
              <input type="password" name="password" id="password" className="border-b-2 border-current pl-2	tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
            </div>
            <div className="w-full flex justify-center p-4">
              <button type="submit" className="border-2 border-current rounded-md p-2 hover:bg-white hover:text-lime-400 hover:scale-110 transition-all	shadow-low-box-shadow hover:shadow-high-box-shadow">Login</button>
            </div>
        </form>
      </div>
    )
  }
  
export default Login
  
