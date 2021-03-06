
import React from 'react';
import CookieConsent from 'react-cookie-consent';

class CookieAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCookieAlert: true,
    };
  }

  componentDidMount() {
    if (document.cookie.includes('gatsby-gdpr-google-analytics')) {
      this.setState({
        displayCookieAlert: false,
      });
    }
  }

  render() {
    const { displayCookieAlert } = this.state;
    const cookieMarkup = (
      <div className="CookieWrapper">
        <CookieConsent
          location="bottom"
          buttonText="Close"
          cookieName="gatsby-gdpr-google-analytics"
          style={{
            display: 'block',
            background: 'white',
            position: 'static',
            color: '#282828',
            padding: '20px 50px',
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '24px',
            boxShadow: '0px 4px 26.91px rgba(0, 0, 0, 0.15)',
          }}
          buttonStyle={{
            display: 'block',
            textAlign: 'center',
            margin: '0 auto',
            background: '#1C272B',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
            borderRadius: '3px',
            color: '#fff',
            padding: '13px 24px',
            fontWeight: '500',
          }}
          onAccept={() => {
            document.getElementById('CookieDiv').remove();
          }}
        >
          This website uses cookies to ensure you get the best experience on our website.
          {' '}
          <strong><a href="/licenses/privacy/#Automatic" style={{ color: 'black', textDecoration: 'underline' }}>Learn more</a></strong>
        </CookieConsent>
      </div>
    );
    return (
      <>
        { displayCookieAlert ? (
          <div id="CookieDiv">
            {cookieMarkup}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default CookieAlert;
