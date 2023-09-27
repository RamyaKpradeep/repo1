import React from 'react'
import './Home.css';
function Home() {
  return (
    <div>
       <div className='background'>
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
            <h2 className='pt-5 text-white' style={{fontWeight:'800', textAlign:'center'}}>ToDoList APP</h2>

            <p className='pt-5 text-white' style={{fontWeight:'600', textAlign:'center', fontSize: 22}}> To-do lists offer a way to increase productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively, use time wisely and improve time management as well as workflow.</p>

                  </div>
            </div>
        </div>         
    </div>
  )
}

export default Home