import React from 'react';
import { Wrapper } from './CookiesConsent.styles';
import CloseIcon from '@material-ui/icons/Close';

interface CookiesConsentProps {
    handleCloseConsent: () => void;
}

const CookiesConsent: React.FC<CookiesConsentProps> = ({ handleCloseConsent }) => {
    return (
        <Wrapper>
            <p>This site is using cookies just to keep user logged in, by entering you agree to store cookies</p>
            <button onClick={handleCloseConsent}><CloseIcon/></button>
        </Wrapper>
    )
}

export default CookiesConsent
