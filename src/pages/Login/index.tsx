import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addActivity } from '../../features/RecentActivities/recentActivitiesSlicer';
import { login } from '../../features/User/userSlice';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import { PiLockKeyFill } from 'react-icons/pi';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { selectorUser } from '../../features/User/userSlice';
import './styles.css';

interface FormValues {
  username: string;
  password: string;
}

export const Login = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectorUser);
  const [failLogin, setFailLogin] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const path = location.state?.path || '/';
  const message = location.state?.message;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onFormSubmit = (data: FormValues) => {
    if (
      data.password === userData.password &&
      data.username === userData.username
    ) {
      dispatch(login());
      dispatch(
        addActivity({
          id: nanoid(),
          title: 'You logged in.',
          date: new Date().toISOString(),
        }),
      );
      navigate(path, { replace: true });
      reset();
      setFailLogin(false);
    } else {
      setFailLogin(true);
    }
  };

  return (
    <form className='login-form' onSubmit={handleSubmit(onFormSubmit)}>
      {message}
      <div className='form-welcome-section'>
        <h3>Welcome back!</h3>
        <p>Please, enter your details.</p>
      </div>
      <TextField
        fullWidth
        type='text'
        id='username'
        label='Username'
        variant='standard'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <FaUser />
            </InputAdornment>
          ),
        }}
        {...register('username', { required: 'Please, enter your username' })}
      />
      {errors.username && (
        <span className='error-message'>{errors.username.message}</span>
      )}
      <TextField
        fullWidth
        type='password'
        id='password'
        label='Password'
        variant='standard'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <PiLockKeyFill />
            </InputAdornment>
          ),
        }}
        {...register('password', { required: 'Please, enter your password' })}
      />
      {errors.password && (
        <span className='error-message'>{errors.password.message}</span>
      )}
      {failLogin && (
        <span className='fail-login-msg'>Incorrect username or password!</span>
      )}
      <Button className='form-btn--submit'>Log In</Button>
      <p>
        Don't have an account?{' '}
        <Link to='/registration' className='login__sign-up-link'>
          Sign up
        </Link>
      </p>
    </form>
  );
};
