import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

import './Home.scss';
import { Assignment, Delete, Done, Edit, FilterList, MoreHoriz } from '@mui/icons-material';

const welcome = require('../../assets/welcome.svg').default;
const toDo = require('../../assets/to-do-list.svg').default;
const advantages = require('../../assets/advantages.svg').default;

const Home: FC = () => {
    return (
        <div className="home">
            <div className='box-welcome'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography style={{ marginBottom: '30px', padding:'30px', textAlign: 'center' }} variant="h3" component="h3">Welcome to our app!</Typography>
                    <Link style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }} to="/start">
                        <Button variant="contained" color="primary">Get Started</Button>
                    </Link>
                </div>
                <img className='img-welcome' src={welcome} width={'40%'} alt={'img-welcome'} />
            </div>
            <div className='box-to-do'>
                <img className='img-to-do' src={toDo} width={'50%'} alt={'img-to-do'} />
                <div >
                    <Typography style={{ marginBottom: '30px', padding: '30px', textAlign: 'center' }} variant="h6" component="h6">
                        Here you can manage your tasks, track their completion, and edit task descriptions.
                    </Typography>
                    <Link style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }} to="/start">
                        <Button variant="contained" color="primary">Try It Out</Button>
                    </Link>
                </div>
            </div>
            <div className='box-advantages'>
                <Typography style={{ textAlign: "center" }} variant="h4" component="h4">Advantages of our application:</Typography>
                <div className='list'>
                    <div>
                        <List>
                            <ListItem >
                            <ListItemIcon className='icon-list'>
                                <Assignment />
                            </ListItemIcon>
                            <ListItemText primary="Task Management" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className='icon-list'>
                                <Done />
                            </ListItemIcon>
                            <ListItemText primary="Tracking Completion" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className='icon-list'>
                                <Edit />
                            </ListItemIcon>
                            <ListItemText primary="Task Description Editing" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className='icon-list'>
                                <Delete />
                            </ListItemIcon>
                            <ListItemText primary="Task Deletion" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className='icon-list'>
                                <FilterList />
                            </ListItemIcon>
                            <ListItemText primary="Task Filtering" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className='icon-list'>
                                <MoreHoriz />
                            </ListItemIcon>
                            <ListItemText primary="And much more..." />
                        </ListItem>
                        </List>
                        <Link style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }} to="/start">
                            <Button variant="contained" color="primary">Get Started</Button>
                        </Link>
                    </div>
                    <img src={advantages} alt={'img-advantages'} width={'40%'} />
                </div>
            </div>
        </div>
    );
};

export default Home;
