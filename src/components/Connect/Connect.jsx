import React, { useEffect, useState } from 'react'

import "./Connect.scss"
import Contact from '../Contact/Contact'

export default function Connect() {

    const [displayContactPage, setDisplayContactPage] = useState(false);

    const handleOnclick = () => {
        setDisplayContactPage(true);
    }

    return (
        <div className='connect-section'>

            <div className="connect-container">
                <div className="connect-container-text">
                    <h1>
                        <span>
                            Not Sure Where</span>
                        <span>To <span>Start?</span> </span>
                    </h1>
                    <p>Feel free to reach out to me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                </div>
                <div className="connect-container-button">
                    <button onClick={handleOnclick}>Let's Get started &rarr;
                    </button>
                </div>

            </div>
            {displayContactPage && <Contact setDisplayContactPage={setDisplayContactPage} />}
        </div>
    )
}
