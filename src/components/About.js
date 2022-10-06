import React from 'react'

const About = () => {
    return (
        <div>
            <div className=" container jumbotron">
                <h1 className="display-4" style={{color:"purple"}}>Hello, iNoteBook!</h1>
                <h4 className="lead">This is a simple website, where you can keep your notes on cloud and read your messages at any time.</h4>
                <hr className="my-4"/>
                    <p>Ask not what your country can do for you; ask what you can do for your country.</p>
                    <p className="lead">
                        <a className="btn btn-dark mt-3 btn-lg" href="/" role="button">Start using iNoteBook</a>
                    </p>
            </div>
        </div>
    )
}

export default About
