import angel from '../images/angel.jpeg'
import email from '../images/envelope-solid.svg'
import Main from './Main'
import Footer from './Footer'




export default function App(){
    return (
        <>
        <div className='main-container'>
            <img src={angel} className="profile-picture" alt='Profile'></img>
            <p className='title'>Angel Lobo</p>
            <p className='title2'>Frontend Developer</p>
            <p id='website'>website.com</p>
            <button className='btn'>
            <img src={email} className="email-svg"></img> Email</button>
           

            <Main />

            <Footer/>
            </div>
            
            
        
        </>
    )
}