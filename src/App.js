import logo from './logo.svg';
import './App.css';
import React  from 'react';



function App() {
 
  return (
   

    
        <div className="base-layout-segment-component base-layout-segment-component-1" style={{ paddingBottom: '88px' }}>
          <div className="hubspot-with-bullets-side-by-side-form-component start from here ">
        <div >
          <h2 className="monday-markup-language-component core-title md">
            <div style={{ fontSize: '28px', fontWeight: 'bold'  }}>Align, collaborate and gain visibility into your work in one connected space</div>
          </h2>
        </div>
        <div className="side-by-side-text-and-asset">
          <div className="left-space" style={{ display:'none'}}></div>
          <div className="side-by-side-content" style={{ flexDirection:'column', gap: '0' }}>
            <div className="full-paragraph-component-wrapper " style={{padding:'0 32px 40px 32px'  }}>
              <div className="hubspot-contact-form-wrapper">
                <div className="layered-base-form">
                  <div className="form-background-layer" style={{ 
        position: 'absolute',
        height: '40%',
        width: '30%',
        background: '#595AD4',
        borderRadius: '12px',zIndex: '-1', marginTop: '12px', marginLeft: '0px', opacity: '0.75' , color:'red'}}></div>
                  <div className="form-background-layer" style={{ 
        position: 'absolute',
        height: '40%',
        width: '30%',
        background: '#595AD4',
        borderRadius: '12px', zIndex: '-2', marginTop: '24px', marginLeft: '-12px', opacity: '0.5' , color : 'blue'}}></div>
                  <div className="base-form" style={{padding:'48px' , boxShadow:'0px 8px 24px 0 rgba(29,140,242,0.16)' , background:'#ffffff' , borderRadius:'12px',margin:'24px 12px' , width:'40%', textAlign:'center'}}>
                    <div className="form-title-wrapper" style={{marginBottom:'32px' , textAlign:'left'}}>
                      <h3 className="monday-markup-language-component core-title xs">Contact our Sales team</h3>
                    </div>
                    <div className="contact-form-row">
                      <div className="form-input-wrapper">
                        <div className="generic-form-input-component">
                          <label htmlFor="first_name" className="input-title contact-form-required-input">First name</label>
                          <div className="form-input-wrapper">
                            <input id="first_name" name="firstname" type="text" aria-required="true" aria-invalid="true" className="hp-input hp-text-input input-required" aria-describedby="error_first_name" />
                            <span id="error_first_name" className="required-error">Required</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-input-wrapper">
                        <div className="generic-form-input-component">
                          <label htmlFor="last_name" className="input-title contact-form-required-input">Last name</label>
                          <div className="form-input-wrapper">
                            <input id="last_name" name="lastname" type="text" aria-required="true" aria-invalid="false" className="hp-input hp-text-input" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-form-row">
                      <div className="form-input-wrapper">
                        <div className="generic-form-input-component">
                          <label htmlFor="email" className="input-title contact-form-required-input">Work email</label>
                          <div className="form-input-wrapper">
                            <input id="email" name="email" type="email" placeholder="name@company.com" aria-required="true" aria-invalid="false" className="hp-input hp-text-input" />
                          </div>
                        </div>
                      </div>
                      <div className="form-input-wrapper">
                        <div className="generic-form-input-component">
                          <label htmlFor="job_title" className="input-title">Job title</label>
                          <div className="form-input-wrapper">
                            <input id="job_title" name="jobtitle" type="text" aria-required="false" aria-invalid="false" className ="hp-input hp-text-input" />
                            </div>
</div>
</div>
</div>
<div className="contact-form-row">
<div className="form-input-wrapper">
<div className="generic-form-input-component">
<label htmlFor="company" className="input-title contact-form-required-input">Company</label>
<div className="form-input-wrapper">
<input id="company" name="company" type="text" aria-required="true" aria-invalid="false" className="hp-input hp-text-input" />
</div>
</div>
</div>
<div className="form-input-wrapper">
<div className="generic-form-input-component">
<label htmlFor="phone" className="input-title contact-form-required-input">Phone</label>
<div className="form-input-wrapper">
<input id="phone" name="phone" type="text" placeholder="e.g. +1-555-555-5555" aria-required="true" aria-invalid="false" className="hp-input hp-text-input" />
</div>
</div>
</div>
</div>
<div className="contact-form-row">
<div className="form-input-wrapper">
<div className="generic-form-input-component">
<label htmlFor="message" className="input-title">Message</label>
<div className="form-input-wrapper">
<textarea id="message" name="message" rows="3" aria-required="false" aria-invalid="false" className="hp-input hp-textarea-input"></textarea>
</div>
</div>
</div>
</div>
<div className="contact-form-row">
<div className="form-input-wrapper">
<div className="cta-button-component contact-form-submit-button">
<button id="submit" type="submit" className="hp-button hp-button-large contact-form-submit">Submit</button>
</div>
</div>
</div>
</div>
<input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
<input type="hidden" id="hs_context" name="hs_context" />
</div>
</div>
</div>
<div className="hbspt-cta-component-blocker"></div>
</div>
<div className="right-space"></div>
</div>
</div>
</div>
            
            
  );
}

export default App;
