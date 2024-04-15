import React from 'react'
import logoverde from '../img/logo (2).svg'
import logoverde2 from '../img/Frame button 2.svg'

const Footer = () => {
  return (
    <footer >
        <div className='first-footer'>
        <div>
            <svg id='footer-svg' width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="33.1992" width="54.9616" height="54.9616" rx="27.4808" transform="rotate(37.1599 33.1992 0)" fill="black"/>
            <path d="M54.7059 35.1808C55.117 34.4616 54.8671 33.5453 54.1479 33.1342L42.4269 26.4358C41.7076 26.0247 40.7913 26.2746 40.3803 26.9938C39.9692 27.7131 40.2191 28.6294 40.9383 29.0404L51.357 34.9946L45.4028 45.4132C44.9918 46.1325 45.2416 47.0488 45.9609 47.4598C46.6801 47.8709 47.5964 47.621 48.0075 46.9018L54.7059 35.1808ZM23.9903 44.0116L53.7982 35.8837L53.009 32.9894L23.2011 41.1173L23.9903 44.0116Z" fill="#F0F8E9"/>
            </svg>
        </div>
            <h2>Get a quote</h2>
        </div>
        <div className='second-footer'>
            <div className='second-footer-div1'>
                <img src={logoverde} alt="logoverde" />
                <p><strong>© 2024 </strong>LIFTEX Roof Lifting.</p>
            </div>
            <div className='second-footer-div2'>
                <div>
                    <ul>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#14B240"/>
                        </svg>
                            +1 (973) 366 - 3939
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#14B240"/>
                        </svg>
                            Support@liftexusa.com
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#14B240"/>
                        </svg>
                            Instagram
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#14B240"/>
                        </svg>
                            LinkedIn
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#14B240"/>
                        </svg>
                            Twitter
                        </li>
                    </ul>
                </div>
                <div className='last-footer-div'>
                    <img src={logoverde2} alt="logoverde2" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer