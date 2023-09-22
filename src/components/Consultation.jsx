import React, { useState, useEffect, createRef } from 'react';
import '../assets/styles/consultation.css'


const consultationTime = ["13.00 - 13.45", "14.00 - 14.45", "15.00 - 15.45", "16.00 - 16.45", "17.00 - 17.45"];

export default function Consultation() {
    const [consultationData, setConsultationData] = useState([]);
    const [chosenDate, setchosenDate] = useState("");
    const [disabledBtn, setdisabledBtn] = useState(true);
    const [errorDate, setErrorDate] = useState(false);
    const [emailclassName, setemailclassName] = useState('consultationItem');
    const [phoneNumberclassName, setphoneNumberclassName] = useState('consultationItem');
    const [clickedSubBTN, setclickedSubBTN] = useState(false);
    const form = createRef();
    const [consultation, setconsultation] = useState({
        id: "",
        subject: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        date: "",
        time: ""
    });



    useEffect(() => {
        if (!clickedSubBTN) return;
        setdisabledBtn(true);
        setchosenDate("");
        fetch('http://localhost:3000/consultations', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consultation)
        })
        setclickedSubBTN(false);
        window.alert('Thank you! Your consultation is booked. We will send you an invoice to your email address');
        form.current.reset();
        setconsultation(
            {
                id: "",
                subject: "",
                fullName: "",
                email: "",
                phoneNumber: "",
                date: "",
                time: ""
            }
        );


    }, [clickedSubBTN]);

    useEffect(() => {
        fetch('http://localhost:3000/consultations')
            .then((resp) => resp.json())
            .then((setConsultationData))
    }, []);


    function changeState(value, field) {
        const clone = { ...consultation };
        clone[field] = value;
        setconsultation(clone);
    }

    function handleFullName(event) {
        changeState(event.target.value, 'fullName');
    }

    function handleSubject(event) {
        changeState(event.target.value, 'subject');
    }

    function handleEmail(event) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.currentTarget.value)) { setemailclassName('redBorder'); }
        else {
            changeState(event.target.value, 'email');
            setemailclassName('consultationItem');
        }
    }


    function handlephoneNumber(event) {
        if (!/^\d+$/.test(event.currentTarget.value)) { setphoneNumberclassName('redBorder'); }
        else {
            changeState(event.currentTarget.value, 'phoneNumber');
            setphoneNumberclassName('consultationItem');
        }
    }
    function handleDate(event) {
        let enterDate = new Date(event.target.value);
        const weekday = enterDate.getDay();
        if ((weekday === 6) || (weekday === 0)) {
            setErrorDate(true);
        }
        else {
            setErrorDate(false);
            setchosenDate(event.target.value);
            changeState(event.target.value, 'date');
        }
    }

    function handleTime(event) {
        changeState(event.target.value, 'time');
    }

    return (
        <div className='header-content'>
            <h2 className='header-content-head'> Consultations</h2>
            <p className='header-content-text'>You may book a personal online consultation here. We will do all our best to help your plants be healthy and bloomy!</p>
            <p className='header-content-text'>Please, keep in mind that periods for consultations are from Monday to Friday, from 1pm to 6pm Kyiv time. A consultation lasts for 45 minutes and could be organized on any platform you like: Google Meet, Zoom, Skype etc. It costs 150hrn. Be advised! No matter you need a less long consultation, its cost remains the same. So, please, fill in the form and we will send you an invoice.</p>
            <div className='consultationBookContent'>
                <form className='consultationForm' onSubmit={(e) => e.preventDefault()} onChange={() => { setdisabledBtn(false) }} ref={form}>
                    <div className="form-items"> <label htmlFor="fullname"> Your full name </label>
                        <input id="fullname" className='consultationItem' type="text" onChange={handleFullName} placeholder='Enter a full name' />
                    </div>

                    <div className="form-items"> <label htmlFor="email"> Email</label>
                        <input id="email" type="email" className={emailclassName} onChange={handleEmail} placeholder='Email' />
                    </div>
                    <div className="form-items">  <label htmlFor="phone"> Phone number</label>
                        <input id="phone" type="tel" className={phoneNumberclassName} onChange={handlephoneNumber} placeholder='0991112233' pattern="[0-9]{10}" />
                    </div>
                    <div className="form-items"> <label htmlFor="subject"> Subject of a consultation</label>
                        <input id="subject" className='consultationItem' type="text" onChange={handleSubject} placeholder='Subject' />
                    </div>
                    <div className="form-items"> <label htmlFor="date">
                        {errorDate ? <span className="errorDate"> Our working days are Mon-Fri</span> : <span> Date of a consultation</span>}
                    </label>
                        <input className='consultationItem' id="date" type="date" onChange={handleDate} placeholder='Select date' />
                    </div>
                    <div className="choice">
                        <div>Select time of a consultation</div>
                        <div>
                            <label className="time"> <input disabled={consultationData.some((consItem) => ((consItem.date === chosenDate) && (consItem.time === consultationTime[0]))) ? true : false} type="radio" name="group1" value={consultationTime[0]} onChange={handleTime} /> 13.00 - 13.45</label>

                            <label className="time"> <input disabled={consultationData.some((consItem) => ((consItem.date === chosenDate) && (consItem.time === consultationTime[1]))) ? true : false} type="radio" name="group1" value={consultationTime[1]} onChange={handleTime} /> 14.00 - 14.45</label>

                            <label className="time"> <input disabled={consultationData.some((consItem) => ((consItem.date === chosenDate) && (consItem.time === consultationTime[2]))) ? true : false} type="radio" name="group1" value={consultationTime[2]} onChange={handleTime} /> 15.00 - 15.45</label>

                            <label className="time"> <input disabled={consultationData.some((consItem) => ((consItem.date === chosenDate) && (consItem.time === consultationTime[3]))) ? true : false} type="radio" name="group1" value={consultationTime[3]} onChange={handleTime} /> 16.00 - 16.45</label>

                            <label className="time"> <input disabled={consultationData.some((consItem) => ((consItem.date === chosenDate) && (consItem.time === consultationTime[4]))) ? true : false} type="radio" name="group1" value={consultationTime[4]} onChange={handleTime} /> 17.00 - 17.45</label>

                        </div> </div>
                    <button className="btnFeedback" disabled={disabledBtn} type="submit" onClick={(e) => { e.preventDefault(); setclickedSubBTN(true); }}>Book the consultation</button>
                </form>
            </div>

        </div>
    )
}