import React, { useState } from 'react';
import "./userProfile.scss";

function UserProfileForm({ displayName: initialDisplayName, firstName: initialFirstName, lastName: initialLastName, email: initialEmail, phoneNumber: initialPhoneNumber, address: initialAddress, bio: initialBio, onSave, onCancel }) {
  const [displayName, setDisplayName] = useState(initialDisplayName || '');
  const [firstName, setFirstName] = useState(initialFirstName || '');
  const [lastName, setLastName] = useState(initialLastName || '');
  const [email, setEmail] = useState(initialEmail || '');
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || '');
  const [address, setAddress] = useState(initialAddress || '');
  const [bio, setBio] = useState(initialBio || '');
  // error checks
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
// the emailRegex and phoneNumberRegex variables 
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{1,4}\)?[\s.-]\d{1,4}[\s.-]\d{1,4}$/;



  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
  
    if (emailValue && !emailRegex.test(emailValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };
  
  const handlePhoneNumberChange = (event) => {
    const phoneNumberValue = event.target.value;
    setPhoneNumber(phoneNumberValue);
  
    if (phoneNumberValue && !phoneNumberRegex.test(phoneNumberValue)) {
      setPhoneNumberError('Invalid phone number format');
    } else {
      setPhoneNumberError('');
    }
  };
  

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(displayName, firstName, lastName, email, phoneNumber, address, bio);
  };

  return (
    <div className="display-name-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="display-name-input">Display Name:</label>
          <input
            type="text"
            id="display-name-input"
            value={displayName}
            onChange={handleDisplayNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="first-name-input">First Name:</label>
          <input
            type="text"
            id="first-name-input"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name-input">Last Name:</label>
          <input
            type="text"
            id="last-name-input"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>

 <div className="form-group">
  <label htmlFor="email-input">Email Address:</label>
  <input
    type="email"
    id="email-input"
    value={email}
    onChange={handleEmailChange}
    required
  />
  {emailError && <div className="error-message">{emailError}</div>}
</div>

<div className="form-group">
  <label htmlFor="phone-number-input">Telephone Number:</label>
  <input
    type="tel"
    id="phone-number-input"
    pattern="^(\+\d{1,2}\s)?\(?\d{1,4}\)?[\s.-]\d{1,4}[\s.-]\d{1,4}$"
    value={phoneNumber}
    onChange={handlePhoneNumberChange}
  />
  {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}
</div>


<div className="form-group">
<label htmlFor="address-input">Address:</label>
<input
         type="text"
         id="address-input"
         value={address}
         onChange={handleAddressChange}
       />
</div>
<div className="form-group">
<label htmlFor="bio-input">Bio:</label>
<textarea
         id="bio-input"
         value={bio}
         onChange={handleBioChange}
         maxLength="500"
       />
<div className="char-counter">
{bio.length} / 500
</div>
</div>
<div className="form-actions">
<button type="submit">Save</button>
<button type="button" onClick={onCancel}>Cancel</button>
</div>
</form>
</div>
);
}

export default UserProfileForm;
