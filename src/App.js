import './App.css';
import firebase from './Firebase';
import {useState, useEffect} from 'react';
import UltChart from './components/UltChart';
import FireChart from './components/FireChart';
import GasChart from './components/GasChart';

function App() {

  const [ultdata, setultData] = useState([]);
  const [firedata, setfireData] = useState([]);
  const [gasdata, setgasData] = useState([]);

  useEffect(() => {
    const ref = firebase.database().ref('IOT');
    ref.on('value', (snapshot) => {
      const fs = snapshot.val();
      const ultson = [];
      const fire = [];
      const gas = [];
      for (var key of Object.keys(fs["1_Ultrasonic"])){
        ultson.push(fs["1_Ultrasonic"][key]);
      }
      for (var key of Object.keys(fs["2_Smoke"])){
        fire.push(fs["2_Smoke"][key]);
      }
      for (var key of Object.keys(fs["3_Thermistor"])){
        gas.push(fs["3_Thermistor"][key]);
      }
      setultData(ultson);
      setfireData(fire);
      setgasData(gas);
    })
  }, [])


  return (
    <div>
      <UltChart values={ultdata}/>
      <FireChart values={firedata}/>
      <GasChart values={gasdata}/>
    </div>
  );
}

export default App;
