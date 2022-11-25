import image from './image-qr-code.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='center'>
        <div className='ha'>
        <img src={image} alt=""  />
        <p>
        Improve your front-end <br />
        skills by building projects 
        </p>
         <div id='down'> Scan the QR code to visit Frontend <br /> Mentor and take your coding skills <br />
         to the next level  </div>   
         </div>
      </div>
    </div>
  );
}

export default App;
