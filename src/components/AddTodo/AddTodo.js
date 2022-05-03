import React, {useState} from 'react';
import uuid from 'uuid';
import {Row, Col, Button, FormControl} from 'react-bootstrap';
import s from './AddTodo.module.css';

function AddTodo({todo, setTodo}) {
    const [value, setValue] = useState('')

    function saveTodo() {
        if(value) {
                    setTodo(
                    [...todo, {
                        id: 4,
                        title: value,
                        status:true
                    }]
                    )
                    setValue('')
                }
    }
    return(
        
            <Row>
                <Col className={s.addTodoForm}>
                  <FormControl placeholder='put the task' value={value} onChange={ (e)=> setValue(e.target.value)}/>
                  <Button onClick={saveTodo} className={s.btn}>Save</Button>
                </Col>
            </Row>
        
    )
}

export default AddTodo;