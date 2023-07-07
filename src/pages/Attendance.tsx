import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../helper/useLocalStorage';
import { studentsType } from '../helper/types';
import { useRef } from 'react';
import { toJpeg } from 'html-to-image';

export default function Attendance() {
	const navigate = useNavigate();
	const [attendance] = useLocalStorage<studentsType>('attendance', []);
	const printRef = useRef<HTMLInputElement>(null)

	const downloadHandler = async () => {
		toJpeg(printRef.current as HTMLElement, { quality: 0.95 })
  .then(function (dataUrl) {
    const link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
	});
	}

	return (
		<>
			<button className='text-sky-500 px-2 py-2 bg-sky-700 bg-opacity-10 w-full mt-6 mb-3' onClick={downloadHandler}>
				Download as Image
			</button>

			<div ref={printRef} className='printable select-none p-2 scale-75'>

			<div className='w-40 h-40 absolute bg-sky-500 left-10 top-40  blur-[120px] -z-10'></div>
			<div className='w-40 h-40 absolute bg-pink-500 top-20 right-8 blur-[100px] -z-10'></div>
				<div className="header flex items-center justify-between">
					<h3 className='text-xl my-6'>Absent Students</h3>
					<span className='text-xl'><span className='opacity-40'>@ </span>{new Date().toLocaleDateString('en-IN')}</span>
				</div>

				<div className='border rounded border-white/60'>
					<table className='m-auto w-full'>
							<thead className='border-b'>
								<th>R.n.</th>
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


			<button className='text-sky-500 border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full mb-6' onClick={() => navigate('/take-attendance')}>
				Take Attendance
			</button>
		</>
	);
}
