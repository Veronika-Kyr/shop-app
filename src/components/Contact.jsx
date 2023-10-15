import React, { useState, useEffect } from 'react';
import '../assets/styles/contact.css'


export default function Contact() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [disabledBtn, setdisabledBtn] = useState(true);
    const [clickedSubBTN, setclickedSubBTN] = useState(false);
    const [newFeedback, setnewFeedback] = useState({
        id: '',
        fullName: '',
        feedback: ''
    });

    useEffect(() => {
        if (!clickedSubBTN) return;
        setdisabledBtn(true);
        fetch('/feedbacks', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
            .then((res) => res.json())
            .then((json) => {
                setFeedbacks([...feedbacks, json.feedb])
            })
        setnewFeedback({
            id: '',
            fullName: '',
            feedback: ''
        });

    }, [clickedSubBTN]);

    useEffect(() => {
        fetch('/feedbacks')
            .then((resp) => resp.json())
            .then((json) => (setFeedbacks(json.feedbacks)))
    }, []);

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
                    <div className="form-items"> <label className='labelFullname' htmlFor="fullName"> Full Name </label>
                        <input className='inputFullname' id="fullName" type="text" onChange={handleFullName} placeholder='Enter your full name' />
                    </div>
                    <div>  <label> <textarea className='inputFeedback' placeholder="Enter your feedback" maxLength={200} name="text1" cols="50" rows="15" onChange={handleFeedback}></textarea> </label></div>
                    <button className="btnFeedback" type="submit" disabled={disabledBtn} onClick={(e) => { e.preventDefault(); setclickedSubBTN(true); }}>Leave the feedback</button>
                </form>
                <div>
                    <p className='headContactLinks'>Contact us:</p>
                    <div className='contactContent'>
                        <a rel="noreferrer" className="contactLinks" href="https://www.facebook.com/veronika.kirilovska/"
                            title="Veronika Kyrylovska on Facebook" target="_blank">Facebook</a>
                        <a rel="noreferrer"
                            className="contactLinks" href="https://www.instagram.com/nikakirsimf/"
                            title="Veronika Kyrylovska on Instagram" target="_blank">
                            Instagram</a>
                        <a className="contactLinks" href="mailto:veronika-kirilovska@ukr.net"
                            title="Send me email">veronika-kirilovska@ukr.net</a>
                        <a className="contactLinks" href="tel:+380662273840"
                            title="Call me">+380662273840</a>

                    </div>
                </div>
            </div>
            <h3 className='contactFeedbackHeader'>🌸 Feedbacks we received from you: 🌸</h3>
            <div className='contactFeedback'>

                {feedbacks && feedbacks.map((feedback, index) => {
                    return (
                        <div key={index} className='feedbackCard'>
                            <p className='userFullName'>{feedback.fullName}</p>
                            <div className='textFeedback'> {feedback.feedback}</div>
                            <hr></hr>
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}