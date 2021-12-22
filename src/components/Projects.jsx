import React from "react"


export default function Projects(props) {
    return (
        <>
            <button type="button" className="btn btn-primary mt-4">New Entry</button>
            <table className="table table-bordered mt-5">
                <thead>
                    <tr>
                        <th>idProject</th>
                        <th>Name</th>
                        <th>Entries</th>
                        <th >IdAmin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>CoffeeApp</td>
                        <td>[1,2,3]</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>TimeReporter</td>
                        <td>[1,2,3]</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}