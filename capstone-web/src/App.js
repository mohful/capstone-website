import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutUsPage';
import { ContactsPage } from './Pages/ContactsPage';
import { DocumentsPage } from './Pages/DocumentsPage';
import { ProjectDescriptionPage } from './Pages/ProjectDescriptionPage';
import { TimelinePage } from './Pages/TimelinePage';

function App() {
  return (
    <div>
      <BrowserRouter>
            <NavBar>
              <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contactus' element={<ContactsPage />} />
                <Route path='/documents' element={<DocumentsPage />} />
                <Route path='/project-description' element={<ProjectDescriptionPage />} />
                <Route exact path='/timeline' element={<TimelinePage />} />
              </Routes>
            </NavBar>
          </BrowserRouter>
    </div>
  );
}

export default App;
