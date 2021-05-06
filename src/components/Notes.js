import React, { useState } from 'react';
import { Header } from './common';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Card, Container, Nav } from 'react-bootstrap';
import Create from './Create';
import {LinkContainer} from 'react-router-bootstrap'


const Notes = ({ notes }) => {

    const [progress, setProgress] = useState([]);

    const addProgress = prog => {
        if (!prog.text || /^\s*$/.test(prog.text)) {
            return
        }
        const newProgress = [prog, ...progress]
        setProgress(newProgress)
        console.log(...progress);
    }

    return (
        <div>
            <Container className='mt-3'>
                <div class="text-center" ><h2 > UC Center</h2></div>
                <Header />
                <br></br>
                <Nav className="mr-auto">
                    <LinkContainer to='/create' >
                        <Nav.Link>Add Progess</Nav.Link>
                    </LinkContainer>
                </Nav> 
            </Container>           
            
            <div>
                {notes.map((note) => {
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{note.date}</Card.Title>
                            <Card.Text>
                                {note.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}
            </div>


        </div>
    )
}

export default Notes

