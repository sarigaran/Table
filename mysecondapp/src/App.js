import logo from './logo.svg';
import './App.css';
import ComboBox from './component/autocomplete';
import CountrySelect from './component/Autocomplete/country/country';
import SoloCreateOption from './component/Autocomplete/create table/add';
import Multiple from './component/Autocomplete/multipleinput/multiple';
import ButtonTypes from './component/Button/type';
import UploadButtons from './component/Button/icon/icon';
import VariantButtonGroup from './component/Button/contain/button';
import SplitButton from './component/Button/splite/splitebutton';
import Checkboxes from './component/checkbox/checkbox';
import FloatingActionButtons from './component/fab/fab';
import RadioButtonsGroup from './component/radio/radio';
import BasicSelect from './component/rating/rating';
import SelectLabels from './component/select/select';
import BasicSwitches from './component/switch/switch';
import FormPropsTextFields from './component/text/text';
import ImageAvatars from './data display/avatar/avatar';
import Dividerho from './data display/divider/divider';

//import ColorBadge from './data display/badge/badge';
export default function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learn React</h1>
        <ImageAvatars/>
        
        <ComboBox />
        <CountrySelect />
        <SoloCreateOption />
        <Multiple></Multiple>
        <ButtonTypes/>
        <UploadButtons/>
        <VariantButtonGroup/>
        <SplitButton/>
        <Checkboxes/>
        <FloatingActionButtons/>
        <RadioButtonsGroup/>
        <BasicSelect/>
        <SelectLabels/>
        <BasicSwitches/>
        <FormPropsTextFields/>
        <Dividerho/>

        
    </div>
  );
}

