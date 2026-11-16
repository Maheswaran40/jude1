import { useState } from "react"

function UseState() {


    // let[var_name , var_fun_name] = useState(default_value)

    let [count, setCount] = useState(0)
    let [statement, SetStatement] = useState("")
    function addFun() {
        if (count < 10) {
            setCount(count + 1);
            SetStatement("");
        } else {
            SetStatement("You reached max limit");
        }
    }

    function subFun() {
        if (count > 0) {
            setCount(count - 1);
            SetStatement("");
        } else {
            SetStatement("You reached min limit");
        }
    }

    return (
        <>
            <button onClick={addFun}>+</button>
            <h1>{count}</h1>
            <h3>{statement}</h3>
            <button onClick={subFun}>-</button>
        </>
    )
}

export default UseState