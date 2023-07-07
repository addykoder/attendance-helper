import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../helper/useLocalStorage';
import { studentsType } from '../helper/types';

export default function Attendance() {
	const navigate = useNavigate();

	const [attendance] = useLocalStorage<studentsType>('attendance', []);

	return (
		<>
			<div className='printable select-none'>
				<div className="header flex items-center justify-between">
					<h3 className='text-xl my-6'>Absent Students</h3>
					<span className='text-xl'><span className='opacity-40'>@ </span>{new Date().toLocaleDateString('en-IN')}</span>
				</div>

				<div className='border rounded border-white/60'>
					<table className='m-auto w-full'>
							<thead className='border-b'>
								<th>Roll No.</th>
								<th className='text-left pl-4 py-2'>Name</th>
							</thead>
						<tbody>
							{attendance
								.sort((s1, s2) => s1.roll - s2.roll)
								.map(s => (
									<tr key={s.key} className='border-b border-white/60 last:border-none hover:bg-sky-700 hover:bg-opacity-20'>
										<td className='px-2 py-2 font-light text-center'>{s.roll}</td>
										<td className='px-4 py-2'>{s.name}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>

			<div className="flex justify-center mb-6">
			<div className='opacity-70 text-sm bg-sky-900 bg-opacity-60 rounded px-4 py-2 m-auto max-w-sm text-center mt-6'>
				<span className='opacity-70'>Developed and Maintained by {' '}</span>
				<a className='text-sky-500 no-underline border-b-2 border-dotted border-sky-500' href='https://adityatripathi.com'>Aditya Tripathi</a>
			</div></div>

			</div>

			<button className='text-sky-500 border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full my-6' onClick={() => navigate('/take-attendance')}>
				Take Attendance
			</button>
		</>
	);
}
