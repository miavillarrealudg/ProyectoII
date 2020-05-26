/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table, Button, FormGroup, ControlLabel, FormControl,  } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

import { FormInputs } from "components/FormInputs/FormInputs.jsx";

import CustomButton from "components/CustomButton/CustomButton.jsx";


class Clientes extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>


    
                    <Row>
                        <Col md={12}>
                            
                            <Card
                                title="Listado de clientes"
                                category=""
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {thArray.map((prop, key) => {
                                                    return <th key={key}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tdArray.map((prop, key) => {
                                                return (
                                                    <tr key={key}>
                                                        {prop.map((prop, key) => {
                                                            return <td key={key}>{prop}</td>;
                                                        })}
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>

                        <Col md={12}>
                        </Col>
                    </Row>
                   
                <Button bbsStyle="default"> NUEVO </Button>
                <br></br>
                <br></br>
                </Grid>
                
        <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Editar cliente"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Nombre",
                          type: "text",
                          bsClass: "form-control",
                    
                          
                          disabled: false,
                        },
                        {
                          label: "Apellido Paterno",
                          type: "text",
                          bsClass: "form-control",
                          
                          
                        },
                        {
                            label: "Apellido Materno",
                            type: "text",
                            bsClass: "form-control",
                           
                         
                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                            label: "Correo Electrónico",
                          type: "email",
                          bsClass: "form-control",
                         
                          
                        },
                        {
                          label: "Teléfono",
                          type: "text",
                          bsClass: "form-control",
                          
                          
                        }
                      ]}
                    />
                   

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Observaciones</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Col md={2} mdOffset={3}>
                    <Button
                      bsStyle="default"
                      block 
                    >
                      Grabar
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      
                    >Cancelar
                    </Button>
                  </Col>
                    
                 

                    <div className="clearfix" />
                  </form>
                }
              />
        
            </Col>
          </Row>
        </Grid>
      </div>
                
            </div>
        );
    }
}

export default Clientes;
