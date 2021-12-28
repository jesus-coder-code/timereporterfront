import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap"


export default function Entries(props) {
    const [modal, setModal] = React.useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <Button type="button" className="btn btn-primary mt-5" onClick={toggle}>New Entry</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    New Entry
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label for="project">Project</Label>
                        <Input type="text" id="project" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="project">ProjectId</Label>
                        <Input type="text" id="project" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="timeworked">TimeWorked</Label>
                        <Input type="text" id="timeworked" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="notes">Notes</Label>
                        <Input type="text" id="notes" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="employee">Employee</Label>
                        <Input type="text" id="employee" />
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="success">Create</Button>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <table className="table table-bordered mt-5">
                <thead>
                    <tr>
                        <th>idEntry</th>
                        <th>Date</th>
                        <th>Project</th>
                        <th >TimeWorked(hrs)</th>
                        <th>Notes</th>
                        <th>Employee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2021-12-22</td>
                        <td>TimeReporter</td>
                        <td>4.5</td>
                        <td>working in frontend</td>
                        <td>jesus</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2021-12-22</td>
                        <td>TimeReporter</td>
                        <td>3.5</td>
                        <td>working in backend</td>
                        <td>naren</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2021-12-22</td>
                        <td>CoffeeApp</td>
                        <td>4.5</td>
                        <td>working in frontend</td>
                        <td>jesus</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}