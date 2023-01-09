import './App.css';
import { useState } from 'react';
import icon from './task-icon.png';


function Asset({ spanText1, spanText2, title }) {

  return (
      <>
        <div className='asset-container'>
        <div className='image-div'>
          <div className='image-container'>
            <img className='icon-img' src={icon}  alt= 'Icons' />
          </div>
        </div>

        <div className='headers-container'>
          <div className='header'>
            <span className='span1'>
              {spanText1}
            </span>
          </div>

          <div className='subheader'>
                <span className='span2'>
                  {spanText2}
                </span>
          </div>
        </div>
      </div>
    </>
  )
}



function App() {
  const [showButton, setShowButton] = useState(true);

  function showButtonComponent() {
    setShowButton(true);
    alert('Component was converted to a button. Click again to convert to div');
  };

  function hideButtonComponent() {
    setShowButton(false);
    alert('Component was converted to a div. Click again to convert to button');
  };
  return (
    <>
      {showButton ? <p className='title'>Asset Button</p> : <p className='title'>Asset Div</p>}
      {showButton ? (
        <button className='component-container' type='button'  onClick={hideButtonComponent}>
         <Asset spanText1='Single Asset'spanText2='Fill-out our online form' />
        </button>
      ) : (
        <div className=' component-container' onClick={showButtonComponent}>
          <Asset spanText1='Single Asset'spanText2='Fill-out our online form' />
        </div>
      )}
      
    </>
  );
}

export default App;



