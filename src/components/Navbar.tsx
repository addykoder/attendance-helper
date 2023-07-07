import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const buttonString = pathname.includes('students') ? 'Attendance' : 'Students';
	const redirectString = pathname.includes('students') ? '/' : '/students';

	return (
		<>
			<div className='w-40 h-40 absolute bg-sky-500 left-8 top-80  blur-[120px]'></div>
			<div className='w-40 h-40 absolute bg-pink-500 top-8 right-8 blur-[100px]'></div>
			<div className='w-full bg-sky bg-opacity-5 backdrop-blur-md py-3 px-4 flex justify-between'>
				<img src='icon512.png' alt='logo' className='w-8 h-8' />
				<button onClick={() => navigate(redirectString)} className='text-sky-500 border-spacing-2 px-2 py1 border rounded border-sky-500 bg-sky-700 bg-opacity-10'>
					{buttonString}
				</button>
			</div>

			<div className="main px-4" >
				<Outlet />
			</div>

			<div className='opacity-70 text-sm bg-sky-900 bg-opacity-60 rounded mx-4 px-2 py-2 m-auto max-w-sm text-center mt-20'>
				<span className='opacity-70'>Developed and Maintained by {' '}</span>
				<a className='text-sky-500 no-underline border-b-2 border-dotted border-sky-500' href='https://adityatripathi.com'>Aditya Tripathi</a>
			</div>
		</>
	);
}
