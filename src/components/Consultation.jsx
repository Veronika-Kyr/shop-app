import React, { useState, useEffect } from 'react';
import '../assets/styles/consultation.css'


export default function Consultation() {

    return (
        <div className='header-content'>
            <h2 className='header-content-head'> Consultations</h2>
            <p className='header-content-text'>You may book a personal online consultation here. We will do all our best to help your plants be healthy and bloomy!</p>
            <p className='header-content-text'>Please, keep in mind that periods for consultations are from Monday to Friday, from 1pm to 6pm Kyiv time. A consultation lasts for 45 minutes and could be organized on any platform you like: Google Meet, Zoom, Skype etc. It costs 150hrn. Be advised! No matter you need a less long consultation, its cost remains the same.</p>
            <div className='consultationBookContent'>
                <form className='consultationForm'>
                    <div className="form-items"> <label htmlFor="fullname"> Your full name </label>
                        <input id="fullname" /* className={fullnameclassName} type="text" onChange={handleFullName}*/ placeholder='Enter full name' />
                    </div>

                    <div className="form-items"> <label htmlFor="email"> Email</label>
                        <input id="email" type="email" /* className={emailclassName} onChange={handleEmail}*/ placeholder='Email' />
                    </div>
                    <div className="form-items">  <label htmlFor="phone"> Phone number</label>
                        <input id="phone" type="tel" /* className={phoneNumberclassName} onChange={handlephoneNumber}*/ placeholder='0991112233' pattern="[0-9]{10}" />
                    </div>
                    <div className="form-items"> <label htmlFor="subject"> Subject of a consultation</label>
                        <input id="subject" /* className={subjectclassName} type="text" onChange={handleSubject}*/ placeholder='Subject' />
                    </div>
                    <div className="form-items"> <label htmlFor="date">
                        { /*errorStart ? <span className="errorStart"> Start date should be within 15 further days</span> : */} <span> Date of a consultation</span>
                    </label>
                        <input id="date" type="date" /* onChange={handleStartDate}*/ placeholder='Select date' />
                    </div>
                    <div className="choice">
                        <div>Select time of a consultation</div>
                        <div>
                            <label className="time"> <input defaultChecked type="radio" name="group1" value="13.00 - 13.45" /*onChange={(event) => { setStoodge({ stoodge: event.target.value }) }}*/ /> 13.00 - 13.45</label>
                            <label className="time"> <input type="radio" name="group1" value="14.00 - 14.45" /*onChange={(event) => { setStoodge({ stoodge: event.target.value }) }}*/ /> 14.00 - 14.45</label>
                            <label className="time"> <input type="radio" name="group1" value="15.00 - 15.45" /*onChange={(event) => { setStoodge({ stoodge: event.target.value }) }}*/ /> 15.00 - 15.45</label>
                            <label className="time"> <input type="radio" name="group1" value="16.00 - 16.45" /*onChange={(event) => { setStoodge({ stoodge: event.target.value }) }}*/ /> 16.00 - 16.45</label>
                            <label className="time"> <input type="radio" name="group1" value="17.00 - 17.45" /*onChange={(event) => { setStoodge({ stoodge: event.target.value }) }}*/ /> 17.00 - 17.45</label>
                        </div> </div>
                    <button className="btnFeedback" type="submit" disabled  /*onClick={(e) => { e.preventDefault(); setclickedSubBTN(true); }}*/>Book the consultation</button>
                </form>
            </div>

        </div>
    )
}