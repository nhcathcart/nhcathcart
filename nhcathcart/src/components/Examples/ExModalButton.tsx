import { Fragment, useState } from 'react'
import { ExModal } from "./ExModal"
import "./exCss/ExModal.css"
export function ExModalButton () {
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            <button className="ex-modal-button" onClick={() => setShowModal(true)}>Open Modal</button>
            <ExModal isVisible={showModal} onClose={()=> setShowModal(false)}>
                <h1>hello</h1>
            </ExModal>
        </Fragment>
    )
}