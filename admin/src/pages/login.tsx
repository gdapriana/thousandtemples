import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token !== null) navigate('/');
  })

  const loginHandle = async (e: any) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value as string,
      password: e.target.password.value as string
    }

    await axios.post(`${import.meta.env.VITE_SERVER_LINK}/admin/login`, data)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token);
        navigate('/')
      }).catch((err) => {
        alert(err.response.data.errors)
      });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form onSubmit={loginHandle} className="flex gap-4 flex-col w-full max-w-sm items-stretch justify-start">
        <h1 className="text-xl text-center font-bold">thousandtemples admin</h1>
        <label htmlFor="username-input">
          <span className="text-muted-foreground">username</span>
          <Input type="text" name="username" id="username-input"/>
        </label>
        <label htmlFor="password-input">
          <span className="text-muted-foreground">password</span>
          <Input type="password" name="password" id="password-input"/>
        </label>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}