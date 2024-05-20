
// import './App.css';
import ironhackLogo from './assets/ironhack-logo.png'
import navbar from './assets/navbar-dropdown.png'
import adjustable from './assets/adjustable.png'
import laptop from './assets/laptop.png'
import cog from './assets/cog.png'
import icon1 from './assets/tags.png'

function App() {
  return (
    <div className='App'>
        <nav>
            <div id='nav-interface'>
                <img src={ironhackLogo} id='ironhack-logo' />
                <img src= {navbar} id='navbar' />
            </div>
        </nav>
        <main>
            <section id='dark-blue'>
                <div id='hello-react'></div>
                <h1>Say hello to ReactJS</h1>
                <p>
                    You will learn how to use the popular
                    frontend library, and become a super Ninja
                    developer.
                </p>
                <button>Awesome!</button>
            </section>
            <section id='white-background'>
                <ul id='items'>
                    <li className='container-item'>
                        <img src= {adjustable} className='container-img' />
                        <h2>Declarative</h2>
                            <p>
                                React makes it painless to create interactive UIs
                            </p>
                    </li>
                    <li className='container-item'>
                        <img src= {laptop} className='container-img' />
                        <h2>Components</h2>
                            <p>
                               Build encapsulated components
                               that manage their state
                            </p>
                    </li>
                    <li className='container-item'>
                        <img src= {cog} className='container-img' />
                        <h2>Single-Way</h2>
                            <p>
                                A set of immutable values
                                are passed to the components
                            </p>
                    </li>
                    <li className='container-item'>
                        <img src={icon1} className='container-img' />
                        <h2>JSX</h2>
                            <p>
                                Statically-typed, designed
                                to run on modern browsers
                            </p>                       
                    </li>
                </ul>
            </section>
        </main>
    </div>
  );
}

export default App;