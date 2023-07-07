import { studentsType } from "../helper/types"
import useLocalStorage from "../helper/useLocalStorage"

export default function StudentList() {

	const [students, setStudents] = useLocalStorage<studentsType>('students', [])
	console.log(students);
	

	return <>
	<h1 className="text-2xl font-light my-4">Students</h1>

		<table>
			{students.map(s => <tr> <td>{s.name}</td> <td>{s.roll}</td></tr>)}
		</table>

	</>
}