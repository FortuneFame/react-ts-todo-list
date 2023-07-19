import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, LOAD_TODOS, SET_USER } from '../../store/constants';
import { TaskItem, TaskType } from '../../store/types/todo.types';
import { RootState } from '../../store/types/state.types';
import { getUserTasks } from '../../selectors/selectors';
import TaskList from './TaskList/TaskList';

const Todos: React.FC = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState<TaskType>(TaskType.WorkFromHome); // Здесь можно выбрать тип задания по умолчанию
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const todos = useSelector(getUserTasks);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (savedUser && savedUser.id) {
      dispatch({ type: SET_USER, payload: savedUser });
    }
  }, [dispatch]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatch({ type: LOAD_TODOS, payload: JSON.parse(savedTodos) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && title && content) {
      const newTask: TaskItem = {
        id: uuidv4(),
        userId: currentUser?.id,
        name,
        title,
        content,
        checked: false,
        type
      };
      dispatch({ type: ADD_TASK, payload: newTask });
      setName('');
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h1>Привет, {currentUser?.firstName} {currentUser?.lastName}!</h1>
      <h2>Список задач</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Заголовок:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Содержимое:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <label>
          Тип задания:
          <select value={type} onChange={(e) => setType(e.target.value as TaskType)}>
            <option value={TaskType.WorkFromHome}>Работа по дому</option>
            <option value={TaskType.Freelance}>Фриланс</option>
            <option value={TaskType.OfficeWork}>Работа по офису</option>
          </select>
        </label>
        <button type="submit">Добавить задачу</button>
      </form>
      <TaskList />
    </div>
  );
};

export default Todos;
