import data from './animals.json';
import Dropdown from './Dropdown.js';

function App() {
  return (
    <div className='mt-24'>
      <Dropdown data={data}/>
    </div>
  );
}

export default App;
