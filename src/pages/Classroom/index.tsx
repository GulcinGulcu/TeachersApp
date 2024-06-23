import { useForm } from 'react-hook-form';
import { List } from './List';
import { getMonthAndDay } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addItem, deleteItem } from '../../features/List/listSlicer';
import {
  addActivity,
  deleteActivity,
} from '../../features/RecentActivities/recentActivitiesSlicer';
import { Button } from '../../components/Button';
import { useSearchParams } from 'react-router-dom';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { selectorList } from '../../features/List/listSlicer';
import { ListData } from '../../features/List/models';
import './styles.css';

export const Classroom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ListData>();

  const list = useSelector(selectorList);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilterLinks, setShowFilterLinks] = useState(false);
  const typeFilter = searchParams.get('type');

  const onSubmit = (data: ListData) => {
    const id = nanoid();
    dispatch(addItem({ ...data, id: id, date: getMonthAndDay() }));
    dispatch(
      addActivity({
        id: id,
        title:
          data.type === 'Announcement'
            ? 'An announcement is shared with your students.'
            : 'An assignment is given to your students.',
        date: new Date().toISOString(),
        to: 'myclassroom',
      }),
    );
    reset();
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
    dispatch(deleteActivity(id));
  };

  const handleFilter = (e: React.BaseSyntheticEvent) => {
    setSearchParams({ type: e.target.textContent });
    setShowFilterLinks(false);
  };

  return (
    <div className='content-wrapper'>
      <form className='classroom__form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='content' className='sr-only'></label>
        {errors.content && <p>{errors.content.message}</p>}
        <textarea
          id='content'
          {...register('content', {
            required: 'Please, fill the message area',
          })}
          rows={4}
          cols={50}
          placeholder='Share  with your class...'
        ></textarea>
        <div className='select-and-btn-area'>
          {errors.type && <p>{errors.type.message}</p>}
          <select
            id='type'
            {...register('type', { required: 'Please, select an option.' })}
          >
            <option value=''>Type</option>
            <option value='Assignment'>Assignment</option>
            <option value='Announcement'>Announcement</option>
          </select>
          <Button className='classroom__submit-btn'>
            Share
          </Button>
        </div>
      </form>
      <div className='classroom__timeline'>
        <h3>Classroom Timeline</h3>
        <div>
          <div className='classroom__filter'>
            <Button
              className='classroom__filter-btn'
              onClick={() => setShowFilterLinks(!showFilterLinks)}
            >
              {typeFilter ? (
                <>{typeFilter}</>
              ) : (
                <>
                  Filter by <IoIosArrowDown />
                </>
              )}
            </Button>
            {typeFilter && (
              <Button
                onClick={() => {
                  setSearchParams('');
                }}
                className='classroom__clear-filter-btn'
              >
                Clear Filter
              </Button>
            )}
          </div>
          {showFilterLinks && (
            <ul>
              <li>
                <Button onClick={(e: React.SyntheticEvent) => handleFilter(e)}>Assignment</Button>
              </li>
              <li>
                <Button onClick={(e: React.SyntheticEvent) => handleFilter(e)}>Announcement</Button>
              </li>
            </ul>
          )}
        </div>
      </div>
      {list && (
        <List list={list} handleDelete={handleDelete} typeFilter={typeFilter} />
      )}
    </div>
  );
};
