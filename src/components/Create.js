import React, { useState } from 'react';
import { Form, Container, Nav } from 'react-bootstrap';
import { Header } from './common';

const Create = ({ setNotes }) => {
    const [form, setForm] = useState({ date: '', text: '' });

    function handleChange(event) {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
        console.log(form);
    }

    function addNote(e) {
        e.preventDefault();
        setNotes(note => [...note, form]);
        setForm({ date: '', text: '' });
    }

    return (
        <Container>
            <div class="text-center" ><h2 > UC Center</h2></div>
            <Header />
            <Form className='mt-3' style={{ width: "50%" }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange={handleChange} value={form.date} name="date" type="email" placeholder="Enter date" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Text</Form.Label>
                    <Form.Control onChange={handleChange} value={form.text} name="text" type="text" placeholder="Enter text" />
                </Form.Group>

            </Form>
            <button onClick={addNote} className='btn btn-dark'>Add note</button>
        </Container>
    )
}

export default Create
