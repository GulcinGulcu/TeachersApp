import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import './styles.css';

interface ConfirmProps {
  children: React.ReactNode;
  linkName: string;
}

export const Confirm = ({ children, linkName }: ConfirmProps) => {
  return (
    <div className='confirm'>
      <h4>
        <TiTick className='confirm-icon' /> Successful!
      </h4>
      <p>{children}</p>
      <Link to={linkName === 'Home' ? '/' : '/Login'} className='confirm__link'>
        Go to {linkName} Page
      </Link>
    </div>
  );
};
