import Info from './components/Info';
import Calculate from './components/Calculate';
import Result from './components/Result';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './components/styles.module.css'

function App() {
  return (
    <div className={styles.App}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">BMI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/info" className='nav-link'>Info</Link>
                        <Link to="/" className='nav-link'>Calculate</Link>
                        <Link to="/result" className='nav-link'>Result</Link>
                    </ul>
                </div>
            </div>
        </nav>

        <Routes>
          <Route path='/' element={<Calculate />}/>
          <Route path='/info' element={<Info />}/>
          <Route path='/result' element={<Result />}/>
        </Routes>
    </div>
  );
}

export default App;
