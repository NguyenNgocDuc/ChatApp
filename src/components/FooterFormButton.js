import React from 'react';
import '../Assets/App.css'

const FooterButton = (props) => {
  const { submitLabel, otherLabel, goToLink, history } = props;
  return (
    <div className="d-flex justify-content-between">
      <button type="submit" className="btn btn-success">{submitLabel}</button>
      <button type="button" className="btn btn-primary" onClick={() => {
        history.push(goToLink);
      }}>{otherLabel}</button>
    </div>
  );
};

export default FooterButton;
