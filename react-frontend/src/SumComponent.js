import { useState } from 'react';

const serverHost = process.env.NODE_ENV === "production" ? 
                    "" : process.env.REACT_APP_SERVER_HOST

console.log(process.env)
console.log(serverHost)

export function SumComponent() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [sumResult, setSumResult] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${serverHost}/api/sum`, {
            method: "POST",
            body: JSON.stringify(
                {a: Number(a),
                 b: Number(b)})
        }).then(r => r.json())
        .then(j => {
            setSumResult(j.result)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                A:
                <input 
                type="text" 
                name="a"
                value={a}
                onChange={(e) => setA(e.target.value)}/>
            </label>
            </div>
            <div>
            <label>
                B:
            <input 
                type="text" 
                name="b"
                value={b}
                onChange={(e) => setB(e.target.value)} />
            </label>
            </div>
            <input type="submit" value="Submit" />
            <div>
                <label>Sum: </label>
                {sumResult}
            </div>

        </form>
    )
}