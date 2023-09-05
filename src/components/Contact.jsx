import React, { useState, useEffect } from 'react';
import '../assets/styles/contact.css'


export default function Contact() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [disabledBtn, setdisabledBtn] = useState(true);
    const [clickedSubBTN, setclickedSubBTN] = useState(false);
    const [newFeedback, setnewFeedback] = useState({
        id: '',
        fullName: '',
        feedback: '',
    });

    useEffect(() => {
        if (!clickedSubBTN) return;
        setdisabledBtn(true);
        fetch('http://localhost:3000/feedbacks', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
    }, [clickedSubBTN]);

    useEffect(() => {
        fetch('http://localhost:3000/feedbacks')
            .then((resp) => resp.json())
            .then((setFeedbacks))
    }, [feedbacks]);

    function changeState(value, field) {
        const clone = { ...newFeedback };
        clone[field] = value;
        setnewFeedback(clone);
    }

    function handleFullName(event) {
        changeState(event.target.value, 'fullName');
    }
    function handleFeedback(event) {
        changeState(event.target.value, 'feedback');
    }



    return (
        <div className='header-content'>
            <h2 className='header-content-head'> Contacts and Feedbacks</h2>
            <p className='contactText'>We are always happy to receive your feedbacks about our plants and service. We publish every feedback and answer any question you ask. Please, leave a feedback in a form below or contact us in any convenient way. </p>
            <div className='contactFormBlock'>
                <form onChange={() => { setdisabledBtn(false) }}>
                    <div className="form-items"> <label htmlFor="fullName"> Full Name </label>
                        <input id="fullName" type="text" onChange={handleFullName} placeholder='Enter your full name' />
                    </div>
                    <div>  <label> <textarea placeholder="Notes" maxLength={200} name="text1" cols="30" rows="10" onChange={handleFeedback}></textarea> </label></div>
                    <button className="btnS" type="submit" disabled={disabledBtn} onClick={(e) => { e.preventDefault(); setclickedSubBTN(true); }}>Leave the feedback</button>
                </form>
                <div>
                    <p>Contact us</p>
                </div>
            </div><h3 className='contactFeedbackHeader'> Feedbacks we received from you</h3>
            <div className='contactFeedback'>

                {feedbacks && feedbacks.map((feedback, index) => {
                    return (
                        <div key={index} className='feedbackCard'>

                            <p className='userFullName'>{feedback.fullName}</p>
                            <div> {feedback.feedback}</div>
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}