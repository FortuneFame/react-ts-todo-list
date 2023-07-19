import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Typography variant="h2" component="h2">Добро пожаловать в наш Todo List</Typography>
            <Typography variant="body1" component="p">Здесь вы сможете управлять своими задачами, следить за их выполнением и редактировать описание задач.</Typography>
            <Typography variant="body1" component="p">Преимущества нашего приложения:</Typography>
            <ul>
                <li>Управление задачами</li>
                <li>Отслеживание выполнения</li>
                <li>Редактирование описания задачи</li>
                <li>Удаление задач</li>
                <li>Фильтрация задач</li>
                <li>И многое другое...</li>
            </ul>
            <Link to="/start">
                <Button variant="contained" color="primary">Начать</Button>
            </Link>
        </div>
    );
}

export default Home;
