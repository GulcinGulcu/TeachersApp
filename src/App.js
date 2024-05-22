import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Layout } from './Components/Layout/Layout';
import { Lessons } from './Pages/Lessons';
import { Whiteboard } from './Pages/Whiteboard';
import { Classroom } from './Pages/Classroom';
import { AuthRequired } from './Components/AuthRequired';
import { StudentList } from './Pages/Students';
import { StudentDetail } from './Pages/Students/StudentDetails/StudentDetail';
import { Login } from './Pages/Login';
import './App.css';
import { SavedVideos } from './Pages/Lessons/SavedVideos';
import { Videos } from './Pages/Lessons/Videos';
import { GeneralInformation } from './Pages/Students/StudentDetails/GeneralInformation';
import { Grades } from './Pages/Students/StudentDetails/Grades';
import { OtherInfo } from './Pages/Students/StudentDetails/OtherInfo';
import { Registration } from './Pages/Registration';
import { AddStudent } from './Pages/AddStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<AuthRequired />}>
            <Route path='myclassroom' element={<Classroom />} />
            <Route path='lessons' element={<Lessons />}>
              <Route index element={<Videos />} />
              <Route path='savedVideos' element={<SavedVideos />} />
            </Route>
            <Route path='whiteboard' element={<Whiteboard />} />
            <Route path='students' element={<StudentList />} />
            <Route path='students/:id/details' element={<StudentDetail />}>
              <Route index element={<GeneralInformation />} />
              <Route path='grades' element={<Grades />} />
              <Route path='other' element={<OtherInfo />} />
            </Route>
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
          <Route path='addStudent' element={<AddStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
