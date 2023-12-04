const Login = () => {
	return (
		<div className='absolute w-full h-screen bottom-0 flex justify-center items-center bg-white'>
			<LoginEmail />
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
				Login
			</button>
		</form>
	);
};

export default Login;
