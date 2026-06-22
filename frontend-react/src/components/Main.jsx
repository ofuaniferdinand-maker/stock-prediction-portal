import React from 'react'
import Buttons from './Button'

const Main = () => {
  return (
    <>
        <div className='container' >
            <div className ='p-5 text-center bg-light-dark rounded' >
                
                <h1 className='text-light' > Stock Prediction Portal </h1>
                <p className='text-light lead' >This stock prediction application utilizes learning techniques, specifically employing Keras, TensorFlow and LSTM Models, integrated within the Django framework. It forecast future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used bu stock analysts to inform trading and investment decisions.</p>
                {/* <a className='btn btn-outline-info' href="">Login</a> */}
                <Buttons text='Login' class='btn-outline-info'/>
            </div>
      </div>
    </>
  )
}

export default Main