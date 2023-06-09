import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import CustomerInput from '../components/CustomerInput'
import Container from '../components/Container'

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"ForgotPassword"} />
      <BreadCrumb title="ForgotPassword" />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3 '>Reset Your Password</h3>
                <p className='text-center mt-2 mb-3'>We will send you an email to reset your password</p>
                <form action='' className='d-flex flex-column gap-30'>
                  <CustomerInput type="email" name="email"
                      placeholder='Email' 
                  />
                  <div>
                    <div className='mt-3 d-flex justify-content-center gap-15 flex-column align-items-center'>
                      <button className='button border-0' type="submit">Submit</button>
                      <Link to="/login">Canel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default ForgotPassword