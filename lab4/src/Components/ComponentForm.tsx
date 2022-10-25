import React from "react";
import { useEffect, useState } from "react";
import NameStep from "./NameStep";
const ComponentForm = () => {


    // export this to another file .ts and import it
class Address{
    street: string;
    zipcode: string;
    city: string;

    constructor(st: string,zp: string,ci: string){
        this.street=st;
        this.zipcode=zp;
        this.city=ci;
    }
}

const[step,setStep]= useState(0);
const[personalData,setPersonalData]= useState({
    firstname: "",
    lastname:"",
    email:""
})
const[address, setAddress]=useState({deliveryAddress:new Address("","",""), invoiceAddress:new Address("","","")})

const renderStep = () =>{

    switch (step){
        case 0:
            return <NameStep personalData={personalData} onSubmit={() => setStep(1)}/>
        case 1:
            return <AddressStep address={address} onSubmit={() => setStep(2)}/>
        case 2:
            return <SummaryStep personalData={personalData} address={address} setStep={setStep}/>
    }

}


}