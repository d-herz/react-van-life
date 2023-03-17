import React from "react"
import { useNavigate, useLocation, Form, useActionData } from "react-router-dom";
import { loginUser } from "../api";


export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  
  try { 
    const data = await loginUser({ email, password })
    console.log(data)
    return data
  } catch(err) {
    return {
      error: err.message
    }
  }
} 

export default function Login() {
 

  const [status, setStatus] = React.useState("idle")
  // const [error, setError] = React.useState(null)

  const data = useActionData()
  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate();


  let from = location.state?.from?.pathname || "/host";


  function handleSubmit() {
    // e.preventDefault()
    // setStatus("submitting")
    // setError(null)

    // navigate(from, { replace: true })


    // loginUser(loginFormData)
    //   .then(data => {
    //     localStorage.setItem("loggedin", true)
        // navigate(from, { replace: true })
    //   })
    //   .catch(err => {
    //     setError(err)
    //   })
    //   .finally(() => {
    //     setStatus("idle")
    //   })
  }

  if (data?.token) {
    navigate(from, { replace: true })
  }


  return (
    <div className="login-container">
      {
        location.state?.message &&
        <h3 className="login-error">{location.state.message}</h3>
      }
      <h1>Sign in to your account</h1>
      {
        data?.error &&
        <h3 className="login-error">{data.error}</h3>
      }
      <Form className="login-form" action="/login" method="post">
        <input
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
      
        <button
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Logging in..."
            : "Log in"
          }
        </button>
      </Form>
    </div>
  )

}