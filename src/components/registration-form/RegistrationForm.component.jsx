import React from 'react'

const RegistrationForm = () => {
  return (
    <form>
        <div className='mb-5'>
            <h3>REGISTER</h3>
        </div>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="Password"/>
        </div>
        <button type="submit" class="btn btn-success mt-4 w-100">Register</button>
    </form>
  )
}

export default RegistrationForm