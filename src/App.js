import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './components/Layout/Layout';
import { Lessons } from './pages/Lessons';
import { Whiteboard } from './pages/Whiteboard';
import { Classroom } from './pages/Classroom';
import { AuthRequired } from './components/AuthRequired';
import { StudentList } from './pages/Students';
import { StudentDetail } from './pages/Students/StudentDetails/StudentDetail';
import { Login } from './pages/Login';
import { SavedVideos } from './pages/Lessons/SavedVideos';
import { Videos } from './pages/Lessons/Videos';
import { GeneralInformation } from './pages/Students/StudentDetails/GeneralInformation';
import { Grades } from './pages/Students/StudentDetails/Grades';
import { OtherInfo } from './pages/Students/StudentDetails/OtherInfo';
import { Registration } from './pages/Registration';
import { AddStudent } from './pages/AddStudent';

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
            <Route path='students/:id' element={<StudentDetail />}>
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
