import React from "react"
import { useNavigate, useLocation, Form } from "react-router-dom";
import { loginUser } from "../api";


export async function action( { request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  console.log(email, password)
  // Process this info however
}

export default function Login() {
  // const [loginFormData, setLoginFormData] = React.useState(
  //   {
  //     email: "",
  //     password: ""
  //   }
  // )

  const [status, setStatus] = React.useState("idle")
  const [error, setError] = React.useState(null)

  const location = useLocation()
  // console.log(location)

  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/host";


  // function handleSubmit(e) {
  //   e.preventDefault()
  //   setStatus("submitting")
  //   setError(null) 

  //   loginUser(loginFormData)
  //     .then(data => {
  //       localStorage.setItem("loggedin", true)
  //       navigate(from, { replace: true })
  //     })
  //     .catch(err => {
  //       setError(err)
  //     })
  //     .finally(() => {
  //       setStatus("idle")
  //     })
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target
  //   setLoginFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }

  return (
    <div className="login-container">
      {
        location.state?.message &&
        <h3 className="login-error">{location.state.message}</h3>
      }
      <h1>Sign in to your account</h1>
      {
        error &&
        <h3 className="login-error">{error.message}</h3>
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