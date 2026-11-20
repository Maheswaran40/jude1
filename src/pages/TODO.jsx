import { useState } from "react"

function TODO() {
    let [input, setInput] = useState("")
    let [list, setList] = useState([])

    let [viewModal, setViewModal] = useState(false)
    let [modalInput, setModalInput] = useState("")

    let [edit, setEdit] = useState("")
    let [editText, setEditText] = useState("")

    console.log(list, input);

    function formSubmit(e) {
        e.preventDefault()
        setList(list.concat(input))
        setInput("")
    }


    function shoeModal(index) {
        setViewModal(true)
        setModalInput(list.find((v, i) => i == index))
    }
    function editFun(index) {
        setEdit(index)
        setEditText(list[index])
    }


    function editInputFun(e) {
        setEditText(e.target.value)
    }

    function updateFun() {
        setList(list.map((value, index) => (edit === index ? editText : value)));
        setEdit("");
    }
    const deleteFun = (index) => {
        setList(list.filter((value, i) => i !== index));
    };

    return (
        <>

            <div className="container">

                <form className="input-group mt-5" onSubmit={formSubmit}>
                    <input type="name" value={input} className="form-control" onChange={(e) => setInput(e.target.value)} />
                    <input type="submit" className="btn btn-primary" />
                </form>

                <br /><br /><br />


                {list.length == 0 ? <h1 className="text-danger text-center">No data</h1> : <table className="table">
                    <thead>
                        <tr><th>Names</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((v, i) => (
                            <tr key={i}>
                                <td>{edit === i ? <input type="text" value={editText} onChange={editInputFun} /> : v}</td>
                                <td className="d-flex justify-content-between">
                                    <button className="btn btn-info" onClick={() => shoeModal(i)}>view</button>
                                    {edit === i ? <button className="btn btn-warning" onClick={updateFun}>update</button> :
                                        <button className="btn btn-warning" onClick={() => editFun(i)}>Edit</button>}


                                    <button className="btn btn-danger" onClick={() => deleteFun(i)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}

            </div>

            {viewModal && <div className="modal fade show d-block modal-backdrop" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Your List</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setViewModal(false)}
                            ></button>
                        </div>

                        <div className="modal-body">
                            <h5>{modalInput}</h5>
                        </div>
                    </div>
                </div>
            </div>}



        </>
    )
}

export default TODO