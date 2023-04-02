import { useEffect } from "react"
import fetchRegister from "../controllers/fetchregister"
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

function Register() {  
  useEffect(() => { 
    fetchRegister()
  }, [])

  return (
      <div className="w-full h-screen flex items-center justify-center">
        <form id="register-form">
          <Card color="white" shadow={false} className="p-10">
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to register.
            </Typography>
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" name="Fullname" id="Fullname" label="Fullname" />
                <Input size="lg" name="Email" id="Email" label="Email" />
                <Input type="password" name="password" id="password" size="lg" label="Password" />
                <Input type="password" name="confirmPassword" id="confirmPassword" size="lg" label="Confirm Password" />
              </div>
              
              <Button type="submit" className="mt-6" fullWidth>
                Register
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign In
                </a>
              </Typography>
          </Card>
        </form>
      </div>
    )
  }

export default Register