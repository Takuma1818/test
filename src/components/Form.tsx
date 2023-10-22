import {useState} from 'react';

type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>
    getWeather: (e: any) => void
}

const Form = (props: FormPropsType) => {
    const [city, setCity] = useState<string>("");
    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("https://api.weatherapi.com/v1/current.json?key=71adf875a5954632ba4120317231810&q=London&aqi=no")
        .then(res => res.json())
        .then(data => console.log(data))
    }    
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
        </form>
    );
};

export default Form;