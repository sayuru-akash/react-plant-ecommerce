import React from 'react'

const LoginForm = () => {
  return (
    <form className='mb-5'>
        <div className='mb-5'>
            <h3>LOG IN</h3>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username or email address</label>
            <input type="email" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn btn-success mt-4 w-100">Sign In</button>
    </form>
  )
}

export default LoginForm