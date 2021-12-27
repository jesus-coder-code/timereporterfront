import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap"


export default function Projects(props) {
    const [modal, setModal] = React.useState(false)
    const toggle = () => setModal(!modal)
    return (
        <>
            <Button type="button" className="btn btn-primary mt-5" onClick={toggle}>New Project</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    New Project
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label for="project">Name</Label>
                        <Input type="text" id="project" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="project">IdAdmin</Label>
                        <Input type="text" id="project" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggle}>Create</Button>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
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