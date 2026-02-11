import { TfiAnnouncement } from 'react-icons/tfi';
import { MdOutlineAssignment } from 'react-icons/md';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { editItem } from '../../features/List/listSlicer';
import { FaCheck } from 'react-icons/fa';
import { ListData, ListSliceState } from '../../features/List/models';
import { selectorDarkMode } from '../../features/DarkMode/darkModeSlicer';

interface ListProps {
  list: ListData[];
  handleDelete: (arg: string) => void;
  typeFilter: string | null;
}

export const List = ({ list, handleDelete, typeFilter }: ListProps) => {
  const dispatch = useDispatch();
  const [editItemId, setEditItemId] = useState('');
  const editedItemFromStore = useSelector((state: ListSliceState) =>
    state.list.find((item) => item.id === editItemId),
  );

  const inputElement = useRef<HTMLInputElement>(null);
  const [editedItem, setEditedItem] = useState('');
  const { isDarkMode } = useSelector(selectorDarkMode);

  const displayedListItems = typeFilter
    ? list.filter((item) => item.type === typeFilter)
    : list;

  useEffect(() => {
    setEditedItem(editedItemFromStore?.content ?? '');
    inputElement.current?.focus();
  }, [editedItemFromStore]);

  const handleEdit = (id: string) => {
    dispatch(editItem({ id, editedItem }));
    setEditItemId('');
  };

  return (
    <ul className='classroom__list'>
      {displayedListItems.map((item) => {
        return (
          <li
            className={
              isDarkMode
                ? 'classroom__list__list-item dark'
                : 'classroom__list__list-item'
            }
            key={item.id}
          >
            <span>
              {item.type === 'Announcement' ? (
                <TfiAnnouncement className='icon home__report-icon blue' />
              ) : (
                <MdOutlineAssignment className='icon home__report-icon red' />
              )}
            </span>
            {editItemId !== item.id ? (
              <span className='classroom__list__list-content'>
                {item.content}
              </span>
            ) : (
              <input
                ref={inputElement}
                className='classroom__list__list-content'
                value={editedItem}
                onChange={(e) => setEditedItem(e.target.value)}
              />
            )}
            <div className='classroom__list__btn-area'>
              {editItemId === item.id ? (
                <button onClick={() => handleEdit(item.id)}>
                  <FaCheck />
                </button>
              ) : (
                <button onClick={() => setEditItemId(item.id)}>
                  <AiOutlineEdit />
                </button>
              )}
              <button
                className='classroom__list__delete-btn'
                onClick={() => handleDelete(item.id)}
              >
                <RiDeleteBinFill />
              </button>
            </div>
            <div className='classroom__list-date'>
              <span>{item.date.day}, </span>
              <span>{item.date.month}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
