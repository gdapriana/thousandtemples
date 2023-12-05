import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
	return (
		<div className='absolute w-full h-screen bottom-0 flex justify-center items-center bg-white'>
      <div className="flex justify-center items-center flex-wrap gap-16">
        <LoginEmail />
        <LoginCredentials />
      </div>
		</div>
	);
};

const LoginEmail = () => {
	return (
		<form className='flex justify-center items-center flex-col'>
			<label className='form-control my-4 w-full max-w-xs'>
				<span className='label-text mb-2'>Email</span>
				<input
					type='email'
					placeholder='Your Email Here...'
					className='input bg-white input-md text-neutral input-bordered w-full max-w-xs'
				/>
			</label>
			<label className='form-control my-4 w-full max-w-xs'>
				<span className='label-text mb-2'>Password</span>
				<input
					type='password'
					placeholder='Your Password Here...'
					className='input bg-white input-md text-neutral input-bordered w-full max-w-xs'
				/>
			</label>
			<button type='submit' className='btn my-4 text-white btn-primary'>
        <ArrowRightOnRectangleIcon className='w-5' />
				Login
			</button>
		</form>
	);
};

const LoginCredentials = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <p className="text-neutral-500">Or Login With</p>
      <div className="flex justify-center items-center gap-4">
        <button className="btn btn-primary text-white"><FaGoogle />Google</button>
        <button className="btn btn-primary text-white"><FaGithub />Github</button>
      </div>
      <p className="text-neutral-500">Doesn't have an account yet? <Link className="text-primary" href={"register"}>Register</Link></p>
    </div>
  )
}

export default Login;
