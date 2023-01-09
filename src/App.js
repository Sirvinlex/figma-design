import './App.css';
import icon from './task-icon.png';


function AssetButton({ spanText1, spanText2 }) {

  return (
    <div className='btn-container'>
      <div className='asset-btn'>
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
    </div>
  )
}

function App() {
  return (
    <AssetButton 
      spanText1='Single Asset'
      spanText2='Fill-out our online form'
    />
  );
}

export default App;



