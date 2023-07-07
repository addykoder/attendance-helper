import { useState } from 'react';
import { studentsType } from '../helper/types';
import useLocalStorage from '../helper/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function TakeAttendance() {
	const [students] = useLocalStorage<studentsType>('students', []);
	const [attendance, setAttendance] = useState<studentsType>([])
	const [, saveAttendance] = useLocalStorage<studentsType>('attendance', []);
	const navigate = useNavigate()

	const submitHandler = () => {
		saveAttendance(attendance)
		navigate('/')
	}

	return (
		<>
			<h1 className='text-2xl my-4'>Select Absent Students</h1>

			<div className='border rounded border-white/60'>
				<table className='m-auto w-full'>
					<tbody>
						{students.sort((s1, s2) => s1.roll - s2.roll).map(s => (
							<tr
								key={s.key}
								className={ `border-b border-white/60 last:border-none ${attendance.map(s => s.key).includes(s.key)?'bg-sky-500/60':''}` }
								onClick={() => {
									if (attendance.filter(x => x.key === s.key).length === 0) {
										setAttendance([...attendance, s])
									}
									else {
										setAttendance(attendance.filter(x=> x.key!== s.key))
									}
								}}
							>
								<td className='px-2 py-2 font-light text-center'>{s.roll}</td>
								<td className='px-4 py-2'>{s.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

				<button className='w-full py-1 bg-sky-600 rounded my-3' onClick={submitHandler} >Submit</button>
		</>
	);
}
