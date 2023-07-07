import { Route, Routes, HashRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Attendance from './pages/Attendance';
import StudentList from './pages/StudentList';
import TakeAttendance from './pages/TakeAttendance';

export default function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Navbar/>}>
						<Route index element={<Attendance/>} />
						<Route path='/students' element={<StudentList/>} />
						<Route path='/take-attendance' element={<TakeAttendance/>} />

					</Route>
				</Routes>
			</HashRouter>
		</>
	);
}
