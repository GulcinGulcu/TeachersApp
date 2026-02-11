import TextField from '@mui/material/TextField';
import { Button } from '../../components/Button';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { addActivity } from '../../features/RecentActivities/recentActivitiesSlicer';
import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import { PiLockKeyFill } from 'react-icons/pi';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/User/userSlice';
import { Confirm } from '../../components/Confirm';
import { useState } from 'react';
import { User } from '../../features/User/models';

export const Registration = () => {
  const EMAIL_PATTERN =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dispatch = useDispatch();
  const [confirmMessage, setConfirmMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();

  const onFormSubmit = (data: User) => {
    dispatch(registerUser(data));
    dispatch(
      addActivity({
        id: nanoid(),
        title: 'You registered and logged in.',
        date: new Date().toISOString(),
      }),
    );
    setConfirmMessage(true);
    reset();
  };

  if (confirmMessage) {
    return (
      <Confirm linkName='Home'>
        You have successfully registered the teachers' platform!
      </Confirm>
    );
  }

  return (
    <form className='login-form' onSubmit={handleSubmit(onFormSubmit)}>
      <div className='welcome-section'>
        <h3>Welcome to Teachers' platform!</h3>
        <p>Please, enter your details.</p>
      </div>
      <TextField
        fullWidth
        type='text'
        id='fullName'
        label='Full Name'
        variant='standard'
        {...register('fullName', {
          required: true,
        })}
        error={!!errors.fullName}
        helperText={errors.fullName && 'Please enter your full name'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <MdOutlineDriveFileRenameOutline />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        type='text'
        id='email'
        label='E mail'
        variant='standard'
        {...register('email', {
          required: {
            value: true,
            message: 'Please enter your email',
          },
          pattern: {
            value: EMAIL_PATTERN,
            message: 'Not valid email format!',
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <MdOutlineAlternateEmail />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        type='text'
        id='username'
        label='User Name'
        variant='standard'
        {...register('username', {
          required: true,
        })}
        error={!!errors.username}
        helperText={errors.username && 'Please enter a username'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <FaUser />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        type='password'
        id='password'
        label='Password'
        variant='standard'
        {...register('password', {
          required: true,
        })}
        error={!!errors.password}
        helperText={errors.password && 'Please enter a password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <PiLockKeyFill />
            </InputAdornment>
          ),
        }}
      />
      <Button className='form-btn--submit'>Register</Button>
    </form>
  );
};
