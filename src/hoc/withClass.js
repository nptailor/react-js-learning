import React from 'react';

const withClasses = (WrapperComponent,className) =>{
    return props =>(
        <div className={className}>
            <WrapperComponent {...props}/>
        </div>
    );
};

export default withClasses;