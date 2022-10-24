import React, {useState} from 'react'
import {Car} from './data/Car'

function CarListItemComponent({car}: {car: Car}) {
    return (
        <div>
            {car.name + car.id}
        </div>
    );
}

export default CarListItemComponent;