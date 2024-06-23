import TextField from '@mui/material/TextField';
import userIcon from '../../assets/usericon.png';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../features/Student/studentSlicer';
import { addActivity } from '../../features/RecentActivities/recentActivitiesSlicer';
import { nanoid } from '@reduxjs/toolkit';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { Confirm } from '../../components/Confirm';
import { StudentDetail } from '../Students/StudentDetails/StudentDetail';
import './styles.css';
import { StudentData } from '../../features/Student/models';

export const AddStudent = () => {
  const [confirmMessage, setConfirmMessage] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<StudentData>();

  const onFormSubmit = (data: StudentData) => {
    const id = nanoid();
    const finalData = { ...data, id: id, image: userIcon };
    dispatch(addStudent(finalData));
    dispatch(
      addActivity({
        id: id,
        title: 'New student is added',
        date: new Date().toISOString(),
        to: 'student',
      }),
    );
    setConfirmMessage(true);
    reset();
  };

  if (confirmMessage) {
    return (
      <Confirm linkName='Home'>
        You have successfully added the student.
      </Confirm>
    );
  }

  return (
    <form
      className='login-form add-student-form'
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className='welcome-section'>
        <h4>Add your student's information.</h4>
      </div>
      <div className='add-student-input-area'>
        <div className='add-student-input'>
          <TextField
            fullWidth
            type='text'
            id='firstName'
            label='First Name'
            variant='standard'
            {...register('firstName', {
              required: true,
            })}
            error={!!errors.firstName}
            helperText={errors.firstName && "Please enter student's first name"}
          />
          <TextField
            fullWidth
            type='text'
            id='lastName'
            label='Last Name'
            variant='standard'
            {...register('lastName', {
              required: true,
            })}
            error={!!errors.lastName}
            helperText={errors.lastName && "Please enter student's last name"}
          />
          <TextField
            fullWidth
            type='text'
            id='grade'
            label='Grade'
            variant='standard'
            {...register('grade', {
              required: true,
            })}
            error={!!errors.grade}
            helperText={errors.grade && "Please enter student's grade"}
          />
          <TextField
            type='text'
            id='attendance'
            label='Attendance'
            variant='standard'
            {...register('attendance', {
              required: true,
            })}
            error={!!errors.attendance}
            helperText={
              errors.attendance &&
              "Please enter student's attendance percentage"
            }
          />
          <TextField
            type='text'
            id='phoneNumber'
            label='Phone Number'
            variant='standard'
            {...register('phoneNumber', {
              required: true,
            })}
            error={!!errors.phoneNumber}
            helperText={
              errors.phoneNumber && "Please enter student's phone number"
            }
          />
          <TextField
            type='text'
            id='address'
            label='Address'
            variant='standard'
            {...register('address', {
              required: true,
            })}
            error={!!errors.address}
            helperText={errors.address && "Please enter student's address"}
          />
          <FormControl>
            <FormLabel id='selectiveLesson'>Selective Lesson</FormLabel>
            <RadioGroup
              aria-labelledby='selectiveLesson'
              defaultValue='Spanish'
              name='radio-buttons-group'
            >
              <FormControlLabel
                value='Spanish'
                control={<Radio />}
                label='Spanish'
                {...register('selectiveLesson')}
              />
              <FormControlLabel
                value='Italian'
                control={<Radio />}
                label='Italian'
                {...register('selectiveLesson')}
              />
              <FormControlLabel
                value='French'
                control={<Radio />}
                label='French'
                {...register('selectiveLesson')}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='add-student-input'>
          <p className='grades'>Grades:</p>
          <TextField
            type='text'
            id='math'
            label='Math'
            variant='standard'
            {...register('grades.math', {
              required: true,
            })}
            error={!!errors.grades}
            helperText={errors.grades && "Please enter student's grade point"}
          />
          <TextField
            type='text'
            id='science'
            label='Science'
            variant='standard'
            {...register('grades.science', {
              required: true,
            })}
            error={!!errors.grades}
            helperText={errors.grades && "Please enter student's grade point"}
          />
          <TextField
            type='text'
            id='english'
            label='English'
            variant='standard'
            {...register('grades.english', {
              required: true,
            })}
            error={!!errors.grades}
            helperText={errors.grades && "Please enter student's grade point"}
          />
          <TextField
            type='text'
            id='socialStudies'
            label='Social Studies'
            variant='standard'
            {...register('grades.socialStudies', {
              required: true,
            })}
            error={!!errors.grades}
            helperText={errors.grades && "Please enter student's grade point"}
          />
          <TextField
            type='text'
            id='physicalEducation'
            label='Physical Education'
            variant='standard'
            {...register('grades.physicalEducation', {
              required: true,
            })}
            error={!!errors.grades}
            helperText={errors.grades && "Please enter student's grade point"}
          />
          <TextField
            type='text'
            id='visualArts'
            label='Visual Arts'
            variant='standard'
            {...register('grades.visualArts', {
              required: true,
            })}
            error={!!errors.grades}
            helperText={errors.grades && "Please enter student's grade point"}
          />
        </div>
      </div>
      <Button className='form-btn--submit add-student-btn'>Add Student</Button>
    </form>
  );
};
