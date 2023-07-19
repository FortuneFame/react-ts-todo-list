import { User } from '../../../store/types/user.types';
import { RootState } from '../../../store/types/state.types';
import { setCurrentUser } from '../../../store/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MenuUsers: React.FC = () => {
  const { allUsers } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const handleUserChange = (user: User) => {
    dispatch(setCurrentUser(user));
  };

  return (
    <nav>
      <ul>
        {allUsers.map((user: User) => (
          <li key={user.id}>
            <Link to="/todos" onClick={() => handleUserChange(user)}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default MenuUsers;
