function Register() {  
    return (
      <div id="form" className="bg-bg-img bg-center bg-cover p-4 w-full h-screen flex flex-col items-center justify-center">
        <form action="#" method="post" className="bg-transparent backdrop-blur-lg border-2 rounded-md flex justify-center items-start flex-wrap h-2/4 text-white tablet:text-xl laptop:w-3/5 laptop:h-3/5 desktop:text-2xl">
            <div className="w-full flex justify-between tablet:justify-evenly mt-4 p-4">
              <label htmlFor="Fullname" className="tablet:w-1/4 tablet:p-2">Fullname</label>
              <input type="text" name="Fullname" id="Fullname" className="border-b-2  pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
            </div>
            <div className="w-full flex justify-between p-4 tablet:justify-evenly">
              <label htmlFor="Email" className="tablet:w-1/4 tablet:p-2">Email</label>
              <input type="email" name="Email" id="Email" className="border-b-2 border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
            </div>
            <div className="w-full flex justify-between p-4 tablet:justify-evenly">
              <label htmlFor="password" className="tablet:w-1/4 tablet:p-2">Password</label>
              <input type="password" name="password" id="password" className="border-b-2 border-current pl-2	tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
            </div>
            <div className="w-full flex justify-between p-4 tablet:justify-evenly">
              <label htmlFor="confirmPassword" className="tablet:w-1/4 tablet:p-2">Confirm Pass</label>
              <input type="password" name="confirmPassword" id="confirmPassword" className="border-b-2 border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
            </div>
            <div className="w-full flex justify-center p-4">
              <button type="submit" className="border-2 border-current rounded-md p-2 hover:bg-white hover:text-violet-600 hover:scale-110 transition-all	shadow-low-box-shadow hover:shadow-high-box-shadow">Register</button>
            </div>
        </form>
      </div>
    )
  }
  
export default Register
  