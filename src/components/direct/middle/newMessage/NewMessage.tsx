import React from 'react';

const NewMessage = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                position: 'fixed',
                bottom: '0px',
                width: '90%'
            }}
        >
            <input style={{  width: '100%',
                       height: '15px',
                       padding: '12px 20px',
                       boxSizing: 'border-box',
                       border: '2px solid #ccc',
                       borderRadius: '4px',
                       backgroundColor: '#f8f8f8',
                       resize: 'none'}} type="text" placeholder={'Please'}/>
            <button >Send Message</button>

        </div>

    );
};

export default NewMessage;