import React, { createRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logoNP from "../assets/images/logoNP.png";
import '../assets/styles/registration.css'



export default function Registration(props) {
    const [clickedSubBTN, setclickedSubBTN] = useState(false);
    const [disabledBtn, setdisabledBtn] = useState(true);

    const [formState, setFormState] = useState({
        id: '',
        firstName: '',
        lastName: '',
        city: '',
        department: '',
        email: '',
        phoneNumber: '',
        order: [...props.basket]
        //  id: '',
        //  plantName: '',
        //  sorttName: '',
        //   price: ''

    });

    //  const [cityclassName, setcityclassName] = useState('inputEqualWidth');
    const [firstnameclassName, setfirstnameclassName] = useState('inputEqualWidth');
    const [lastnameclassName, setlastnameclassName] = useState('inputEqualWidth');
    const [emailclassName, setemailclassName] = useState('inputEqualWidth');
    const [phoneNumberclassName, setphoneNumberclassName] = useState('inputEqualWidth');

    useEffect(() => {
        if (!clickedSubBTN) return;
        setdisabledBtn(true);
        fetch('http://localhost:3000/orders', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })

        window.alert('Your order has registrated. You will receive a confirmation email soon!');
        props.setRegistrationVisibility(false);
        props.setBasketModalVisibilityProp(false);
        props.setNumberOFgoodsProp(0);
        console.log(formState);

    }, [clickedSubBTN]);




    {/*  function submitData(event) {
        event.preventDefault();
        // dispatch(fetchPostUsers(formState));
        //     setageclassName('inputEqualWidth');
        setfirstnameclassName('inputEqualWidth');
        setlastnameclassName('inputEqualWidth');
        setemailclassName('inputEqualWidth');
        setphoneNumberclassName('inputEqualWidth');
        //  form.current?.reset();
        setdisabledBtn(true);
    }*/}

    function changeState(value, field) {
        const clone = { ...formState };
        clone[field] = value;
        setFormState(clone);
    }

    function handleFirstName(event) {
        if (!/^[a-zA-Z\s]+$/.test(event.target.value)) { setfirstnameclassName('redBorder'); }
        else {
            changeState(event.target.value, 'firstName')
            setfirstnameclassName('inputEqualWidth');
        }
    }

    function handleLastName(event) {
        if (!/^[a-zA-Z\s]+$/.test(event.currentTarget.value)) { setlastnameclassName('redBorder'); }
        else {
            changeState(event.target.value, 'lastName');
            setlastnameclassName('inputEqualWidth');
        }
    }

    function handleCity(event) {

        changeState(event.target.value, 'city');
        //  setageclassName('inputEqualWidth');

    }
    function handleDepartment(event) {

        changeState(event.target.value, 'department');
        //     setageclassName('inputEqualWidth');

    }


    function handleEmail(event) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.currentTarget.value)) { setemailclassName('redBorder'); }
        else {
            changeState(event.target.value, 'email');
            setemailclassName('inputEqualWidth');
        }
    }

    function handlephoneNumber(event) {
        if (!/^\d+$/.test(event.currentTarget.value)) { setphoneNumberclassName('redBorder'); }
        else {
            changeState(event.currentTarget.value, 'phoneNumber');
            setphoneNumberclassName('inputEqualWidth');
        }
    }



    return (
        <div className='header-content'>
            <div><Link to='/'>🏠</Link></div>
            <h2 className='header-content-head'> Registrate and confirm your order</h2>
            <div className='registrationForm'>
                {/* onSubmit={submitData}ref={form}*/}
                <form onChange={() => { setdisabledBtn(false) }} >

                    <div className="form-items"> <label htmlFor="name"> First Name </label>
                        <input id="name" className={firstnameclassName} type="text" onChange={handleFirstName} placeholder='First Name' />
                    </div>
                    <div className="form-items"> <label htmlFor="surname"> Last Name</label>
                        <input id="surname" className={lastnameclassName} type="text" onChange={handleLastName} placeholder='Last Name' />
                    </div>
                    <div className="form-items"> <label htmlFor="email"> Email</label>
                        <input id="email" type="email" className={emailclassName} onChange={handleEmail} placeholder='Email' />
                    </div>

                    <div className="form-items">  <label htmlFor="phone"> Phone number</label>
                        <input id="phone" type="tel" className={phoneNumberclassName} onChange={handlephoneNumber} placeholder='0991112233' pattern="[0-9]{10}" />
                    </div>
                    <div className="form-items">  <label htmlFor="city"> City</label>
                        <input id="city" type="text" className='inputEqualWidth' onChange={handleCity} placeholder='City' />
                    </div>
                    <div className="form-items">  <label htmlFor="department"> Department*</label>
                        <input id="department" type="text" className='inputEqualWidth' onChange={handleDepartment} placeholder='Nova Poshta Department' />
                        <p>* Delivery upon Nova Poshta's tariffs <a href='https://novaposhta.ua/delivery' rel="noreferrer" target="_blank" title='Go to Nova Poshta'><img src={logoNP} alt='logo of Nova Poshta' /></a>  </p>
                    </div>

                    <div className="form-items">
                        <button className="btnSubmit" type="submit" disabled={disabledBtn} onClick={(e) => { e.preventDefault(); setclickedSubBTN(true); }} >Confirm</button>
                    </div>

                </form >

            </div>

            {/*  <button><Link to='plant'>Confirm</Link></button>*/}
        </div>
    )
}