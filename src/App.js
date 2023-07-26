import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';

import { Home } from './pages/home';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { NotFound } from './pages/notfound';
import { Category } from './pages/category';
import { Recipe } from './pages/recipe';

function App() {
    return (
        <>
            <Router basename='/food-project'>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contacts' component={Contact} />
                        <Route path='/category/:name' component={Category} />
                        <Route path='/meal/:id' component={Recipe} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
