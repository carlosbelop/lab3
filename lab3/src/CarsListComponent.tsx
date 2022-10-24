import React, {useState} from "react";
import {Car, CARS } from './data/Car';
import CarListItemComponent from './CarListItemComponent';

function CarsListComponent(){

    let [cars, setCars] = useState(CARS);
    let [textbox, setText] = useState('');

    return(
        <div>
            <input type="text" value={textbox} onChange={e => setText(e.target.value)} ></input>
            <button>Search</button>

        {
            cars
                .map(car => <CarListItemComponent car={car} />)
        }
        </div>

    )

}
export default CarsListComponent;