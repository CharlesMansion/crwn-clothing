import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner = WrappedComp => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
        
    ) : (<WrappedComp {...otherProps}/>)
}

export default withSpinner;