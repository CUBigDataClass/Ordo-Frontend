import React from 'react'

const Footer = () => {
    return (
        <div style={{height:'20px',position:'relative',textAlign:"center",color:'white'}}>
            <footer style={{ backgroundColor:'#f3f3f3' }} className="d-flex justify-content-center">
                <div className='row' style={{ position: 'absolute', top: '50%', marginTop:'15px' }}>
                    <div className='col' style={{ margin: '15px', whiteSpace: 'nowrap' }}>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{textDecoration:'none'}}>Team Ordo</a>
                    </div>
                    <div className='col' style={{ margin: '15px', whiteSpace: 'nowrap' }}>COPYRIGHT &copy; {new Date().getFullYear()} All Rights Reserved.</div>
                    <div className='col' style={{ margin: '15px', whiteSpace: 'nowrap' }}>
                        <a href="#" style={{textDecoration:'none'}}>Privacy policy</a>
                    </div>
                    <div className='col' style={{ margin: '15px', whiteSpace: 'nowrap' }}>
                        <a href="#" style={{textDecoration:'none'}}>Terms of use</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
