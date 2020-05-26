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
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

class Menu extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Proyecto II"
                category="Producto Integrador"
                content={
                  <div>
                  <h4>Actividades realizadas en el curso</h4>
                  <ul>
                  <li>Metodología ágil SCRUM</li>
                  <li>Planear Backlog y Sprint backlog del proyecto</li>
                  <li>Estimaciones de Backlog y Sprints</li>
                  <li>Desarrollar las fases de Sprints (desarrollo, revisión y ajuste)</li>
                  <li>Establecer reuniones de revisión y retrospectiva para ajustes finales</li>
                  </ul>

                  <h4>Sistema implementado</h4>
                  <ul>
                  <li>Metodología ágil SCRUM</li>
                  <li>React (nivel básico)</li>
                  <li>GitHub (nivel básico)</li>

                  </ul>

                  <h4>Código fuente (comprimido)</h4>
                  <ul>
                    <li>Se aloja código fuente en GitHub. </li>
                  </ul>

                  <h4>Reporte de las modificaciones realizadas </h4>
                  <ul>
                  <li>Se realiza prototipo de las pantallas principales de la aplicación. </li>
                  </ul>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Menu;
