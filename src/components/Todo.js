import React, { useState } from 'react'
import { Header } from "./common"
import { Card, Button, Form, CardDeck } from 'react-bootstrap';

const initialRed = [
    {
        id: 0,
        text: ""
    }
]
const initialYellow = [
    {
        id: 0,
        text: ""
    }
]
const initialGreen = [
    {
        id: 0,
        text: ""
    }
]

export default function Todo() {
    const [food, setFood] = useState("");
    const [tolerance, setTolerance] = useState("");
    const [red, setRed] = useState(initialRed);
    const [createRed, setCreateRed] = useState(false);
    const [yellow, setYellow] = useState(initialYellow);
    const [createYellow, setCreateYellow] = useState(false);
    const [green, setGreen] = useState(initialGreen);
    const [createGreen, setCreateGreen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (food === "" && tolerance==="") alert('Please enter a food and tolerance level');
        else if (food === "")  alert('Please enter a food');
        else if (tolerance === "")  alert('Please enter a tolerance level');
        
        if (tolerance==="Red Light") {
            const newRed = {id: Date.now(), text: food};
            setRed([...red, newRed]);
            setCreateRed(true);
            // setRed("");
        }

        if (tolerance==="Yellow Light") {
            const newYellow = {id: Date.now(), text: food};
            setYellow([...yellow, newYellow]);
            setCreateYellow(true);
            // setRed("");
        }

        if (tolerance==="Green Light") {
            const newGreen = {id: Date.now(), text: food};
            setGreen([...green, newGreen]);
            setCreateGreen(true);
            // setRed("");
        }
    }

    return (
        <div>
            <section>
                <h1 className="text-center mb-1">UC Center</h1>
                <Header />
            </section>
            <Card>
                <Form>
                    <Form.Group className="mb-3" controlId="redlight">
                        <Form.Control 
                        name="food"
                        placeholder="Enter Food"
                        value={food}
                        onChange = {(e) => setFood(e.target.value)}
                        />
                    </Form.Group>
                    <div className="btn-group mr-2">
                        <select
                            defaultValue="Select Tolerance"
                            onChange={(e) => setTolerance(e.target.value)}
                        >
                            <option value="Select Tolerance" disabled>Select Tolerance</option>
                            <option value="Red Light">Red Light</option>
                            <option value="Yellow Light">Yellow Light</option>
                            <option value="Green Light">Green Light</option>
                        </select>
                        <Button onClick={handleSubmit} variant="dark">
                            Add
                        </Button>
                    </div>
                </Form>
            </Card>
            <br></br>
           
           <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
            <Card style={{flex: 1}} bg="danger" text="light">
                    <Card.Body>
                        <Card.Title>Red Light Foods</Card.Title>
                        <Card.Text>
                            {(createRed === false) ? <></> : 
                            red.map((r) => (
                                <div key={r.id}>
                                    {r.text}
                                </div>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="warning" text="dark">
                    <Card.Body>
                        <Card.Title>Yellow Light Foods</Card.Title>
                        <Card.Text>
                            {(createYellow === false) ? <></> : 
                            yellow.map((y) => (
                                <div key={y.id}>
                                    {y.text}
                                </div>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="success" text="light">
                    <Card.Body>
                        <Card.Title>Green Light Foods</Card.Title>
                        <Card.Text>
                            {(createGreen === false) ? <></> : 
                            green.map((g) => (
                                <div key={g.id}>
                                    {g.text}
                                </div>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
           </CardDeck>


        </div>

        
    )

}
