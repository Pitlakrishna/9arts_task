import React from 'react'
import "./index.css"

const Footer = () => {
    return (
        <>
            <div style={{ padding: "8px 0px" }} className='d-flex flex-row justify-content-center' >
                <article className='col-md-6 text-start d-flex flex-column justify-content-center align-self-center' style={{ paddingLeft: '100px', height: '100%' }}>
                    <h1 className='header' >Join <span style={{ color: '#F17760' }} >9Artsmedia</span> Academy</h1>
                    <p className='' >9Artsmedia is your platform to explore, learn, and innovate. Join us, and let’s design the future, today</p>
                </article>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-end ' style={{ gap: '15px', paddingRight: '100px' }} >
                    <button className="button-search" type="button" >Free Demo</button>
                    <button className="button-in-touch" type="button" >Get in Touch</button>
                </div>
            </div>
            <div className='fw-medium d-flex justify-content-center align-items-center pt-3' style={{ backgroundColor: 'rgba(187,187,187 , 0.3)', fontSize: '16px' }} >
                <p >Copyright    2004 - 2018 All Rights Reserved By 9ARTS MEDIA</p>
            </div>
        </>
    )
}

export default Footer


// const Footer = () => {
//     return (
//         <footer className='' style={{ border: '1px solid red' }} >
// <div className='row '>
//     {/* <article className='col-md-6 text-start d-flex flex-column justify-content-center align-self-center' style={{ paddingLeft: '100px', height: '100%' }} > */}
// <article>

//     <h1 className='header' >Join <span style={{ color: '#F17760' }} >9Artsmedia</span> Academy</h1>
//     <p className='' >9Artsmedia is your platform to explore, learn, and innovate. Join us, and let’s design the future, today</p>
// </article>
//     {/* <div className='col-md-6 d-flex flex-column justify-content-center align-items-end ' style={{ gap: '15px', paddingRight: '100px' }}  > */}
// <div>
//     <button className="button-search" type="button" >Free Demo</button>
//     <button className="button-in-touch" type="button" >Get in Touch</button>
// </div>
// </div>
// {/* <div className='fw-medium text-center p-2' style={{ backgroundColor: 'rgba(187,187,187 , 0.3)', fontSize: '16px' }} > */}
{/* <div>
    <p >Copyright    2004 - 2018 All Rights Reserved By 9ARTS MEDIA</p>
</div> */}
//         </footer>
//     )
// }

// export default Footer