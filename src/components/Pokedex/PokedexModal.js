import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Modal, Button } from "react-bootstrap";

function PokedexModal(props) {
  const user = useContext(UserContext);

  return (
    <Modal show = {props.open} onHide = {props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Gotta Catch 'em all!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Name:
        <span>
            {props.name}
        </span>
        Image:
        <span>
            <img src = {props.front_normal_image}/>
        </span>
        Abilities:
        <span>
            Ability One: {props.ability_One}<br/>
            Ability Two: {props.ability_Two}<br/>
            Ability Three: {props.ability_Three}
        </span>
        Types:
        <span>
            Type One: {props.type_One}<br/>
            Type Two: {props.type_Two}<br/>
                    </span>


      </Modal.Body>
      <Modal.Footer>
          <Button variant = "secondary" onClick = {props.handleclose}>
              Close
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PokedexModal