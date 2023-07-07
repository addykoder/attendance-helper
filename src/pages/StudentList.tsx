import { useState } from 'react';
import { studentsType } from '../helper/types';
import useLocalStorage from '../helper/useLocalStorage';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './customModal.css';

export default function StudentList() {
	const [students, setStudents] = useLocalStorage<studentsType>('students', []);
	const [exposed, setExposed] = useState(false);
	const [modalActive, setModalActive] = useState(false);
	const [activeStudent, setActiveStudent] = useState(0);
	const [activeModalName, setActiveModalName] = useState('')
	const [activeModalRoll, setActiveModalRoll] = useState(0)

	const [addStudentName, setAddStudentName] = useState('')
	const [addStudentRoll, setAddStudentRoll] = useState<number>(0)

	const onSaveModalEdit = ()=>{
		setStudents(students.map(s => s.key === activeStudent? {...s, name:activeModalName, roll:activeModalRoll }:s ))
		setActiveStudent(0)
		setModalActive(false)
	}

	const onDeleteSelectedStudent = () => {
		if (!window.confirm('Confirm Delete')) return
		setStudents(students.filter(s => s.key !==activeStudent))
		setActiveStudent(0)
		setModalActive(false)
	}

	const addStudentHandler = () => {
		if (!addStudentName || !addStudentRoll) return
		setStudents([...students, {name:addStudentName, roll:addStudentRoll, key:Math.random()}] as studentsType)
		setAddStudentName('')
		setAddStudentRoll(0)

	}

	// const studentss = [
	// 	{ name: 'Aditya tripathi', key:1, roll: 1 },
	// 	{ name: 'Aditya tripathi', key:2, roll: 2 },
	// 	{ name: 'Aditya tripathi', key:3, roll: 3 },
	// 	{ name: 'Aditya tripathi', key:4, roll: 4 },
	// 	{ name: 'Aditya tripathi', key:5, roll: 5 },
	// 	{ name: 'Aditya tripathi', key:6, roll: 6 },
	// 	{ name: 'Aditya tripathi', key:7, roll: 7 },
	// 	{ name: 'Aditya tripathi', key:8, roll: 8 },
	// 	{ name: 'Aditya tripathi', key:9, roll: 9 },
	// 	{ name: 'Aditya tripathi', key:10, roll: 10 },
	// 	{ name: 'Aditya tripathi', key:11, roll: 11 },
	// 	{ name: 'Aditya tripathi', key:12, roll: 12 },
	// 	{ name: 'Aditya tripathi', key:13, roll: 13 },
	// 	{ name: 'Aditya tripathi', key:14, roll: 14 },
	// 	{ name: 'Aditya tripathi', key:15, roll: 15 },
	// 	{ name: 'Aditya tripathi', key:16, roll: 16 },
	// ];

	return (
		<>
			<h1 className='text-2xl mt-4'>Students</h1>
			{/* Adding student button */}
			{!exposed ? (
				<button className='text-sky-500 border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full my-6' onClick={() => setExposed(true)}>
					Add Student
				</button>
			) : (
				<div className='my-8'>
					<input value={addStudentName} className='focus:outline-none border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full' type='text' placeholder='Name' onChange={e=>setAddStudentName(e.target.value)}/>
					<input
						value={addStudentRoll}
						className='focus:outline-none border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full mt-2'
						type='number'
						placeholder='Roll Number'
						onChange={e=>setAddStudentRoll(Number(e.target.value))}
					/>
					<button className='w-full py-2 bg-sky-600 rounded mt-3' onClick={addStudentHandler}>Add Student</button>
				</div>
			)}

			{/* students list table */}
			<div className='border rounded border-white/60'>
				<table className='m-auto w-full'>
					<tbody>
						{students.map(s => (
							<tr key={s.key} className='border-b border-white/60 last:border-none hover:bg-sky-700 hover:bg-opacity-20' onClick={() => {
								// setting up the variables for modal
								setActiveModalName(students.filter(x => x.key === s.key)[0].name)
								setActiveModalRoll(students.filter(x => x.key === s.key)[0].roll)
								setActiveStudent(s.key);
								setModalActive(true);
							}}>
								<td className='px-2 py-2 font-light text-center'>{s.roll}</td>
								<td className='px-4 py-2'>{s.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Modal open={modalActive} onClose={() => null} center>
				<div className='w-40 h-40 absolute bg-sky-500 left-0 top-20  blur-[80px] -z-10'></div>
				<div className='w-40 h-40 absolute bg-pink-500 right-0 top-0  blur-[80px] -z-10'></div>

				<button className='w-full py-1 bg-red-600 rounded mb-3' onClick={onDeleteSelectedStudent}>Delete</button>

				<input value={activeModalName} className='focus:outline-none border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full' type='text' placeholder='Name' onChange={e=> setActiveModalName(e.target.value)} />
				<input value={activeModalRoll} className='focus:outline-none border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full mt-2' type='number' placeholder='Roll Number' onChange={e => setActiveModalRoll(Number(e.target.value))} />
				<button className='w-full py-2 bg-sky-600 rounded mt-3' onClick={onSaveModalEdit}>Save</button>
			</Modal>
		</>
	);
}

// function ListItem({ s }: { s: studentsObject }) {
// 	return (
// 		<tr className='border-b border-white/60 last:border-none hover:bg-sky-700 hover:bg-opacity-20' onClick={setActiveStudent()}>
// 			<td className='px-2 py-2 font-light text-center'>{s.roll}</td>
// 			<td className='px-4 py-2'>{s.name}</td>
// 		</tr>
// 	);
// }
