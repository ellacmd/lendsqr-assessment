import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Login from '@/pages/login/Login';
import Dashboard from '@/pages/dashboard/Dashboard';
import UserDetails from '@/pages/user-details/UserDetails';
import MainLayout from '@/layouts/main-layout/MainLayout';

function App() {
    return (

            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />

                    <Route element={<MainLayout />}>
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route
                            path='/users'
                            element={<Navigate to='/dashboard' replace />}
                        />
                        <Route path='/users/:id' element={<UserDetails />} />
                    </Route>

                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </Router>
        
    );
}

export default App;
