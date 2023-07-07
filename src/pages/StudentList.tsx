import { useState } from "react"
import { studentsObject, studentsType } from "../helper/types"
import useLocalStorage from "../helper/useLocalStorage"

export default function StudentList() {

	const [students, setStudents] = useLocalStorage<studentsType>('students', [])
	const [exposed, setExposed] = useState(false)
	
	const studentss = [
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1},
		{name:'Aditya tripathi', roll:1}
	]

	return <>
		<h1 className="text-2xl mt-4">Students</h1>
		{!exposed ?	
		<button className='text-sky-500 border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full my-6' onClick={()=>setExposed(true)}>Add Student</button>
			:
			<div className="my-8">
		<input className="focus:outline-none border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full" type="text" placeholder="Name"/>
		<input className="focus:outline-none border-spacing-2 px-2 py-2 border rounded border-sky-500 bg-sky-700 bg-opacity-10 w-full mt-2" type="number" placeholder="Roll Number"/>
		<button className="w-full py-2 bg-sky-600 rounded mt-3">
			Add Student
		</button>
		</div>
		}

		<div className="border rounded border-white/60">
		<table className="m-auto w-full">
			{studentss.map(s => <ListItem s={s} />)}
		</table></div>

	</>
}

function ListItem({ s }:{s:studentsObject}) {
	return <tr className="border-b border-white/60 last:border-none hover:bg-sky-700 hover:bg-opacity-20">
		<td className="px-2 py-2 font-light text-center">{s.roll}</td>
		<td className="px-4 py-2">{s.name}</td>
	</tr>
}