import { useEffect } from "react"
import fetchLogin from "../controllers/fetchlogin"
import fetchRegister from "../controllers/fetchregister"
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
function Login() {  
  useEffect(() => {
    fetchLogin()
  }, [])
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <form id="login-form">
          <Card color="white" shadow={false} className="p-10">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography color="gray" className="mt-1 mb-1 font-normal">
              Enter your details to Login.
            </Typography>
              <div className="mb-4 flex flex-col gap-6">
                <Input type="email" name="Email" id="Email" label="Email" />
                <Input type="password" name="password" id="password" size="lg" label="Password" />
              </div>
              
              <Button type="submit" className="mt-6" fullWidth>
                Login
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                You don't have an account?{" "}
                <a
                  href="/register"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign Up
                </a>
              </Typography>
          </Card>
        </form>
      </div>
    )
  }
  
export default Login
  
