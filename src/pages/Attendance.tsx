import { useNavigate } from "react-router-dom";


export default function Attendance() {
	const navigate = useNavigate()
	return (
		<>
			<h1 className='text-2xl mt-4'>Attendance</h1>

			<button className='text-sky-500 border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full my-6' onClick={()=>navigate('/take-attendance')}>
				Take Attendance
			</button>
		</>
	);
}
