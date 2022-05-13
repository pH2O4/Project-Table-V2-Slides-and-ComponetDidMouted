import { Component, React } from "react";
import { Table } from 'react-bootstrap'
import './TABLES.css'
import LOGO from './LogoDec.png'
import Axios from 'axios'

import Barchart from "./BarchartTable";

class Main extends Component {


  
  render() {


  
   

    return (
        <div className="TABLESAPIIComponent">

      <Barchart/>
          <div className="CmegroupTable">
            <h1>Soja Cmegroup</h1>

            <Table id="SecondTableCmegroup" striped bordered hover variant="light">
              <tbody>
                <tr>
                  <td ><b>Month</b></td>
                  <td><b>Options</b></td>
                  <td><b>Chart</b></td>
                  <td><b>Last</b></td>
                  <td><b>Change</b></td>
                  <td><b>Prior Settle</b></td>
                  <td><b>Open</b></td>
                  <td><b>High</b></td>
                  <td><b>Low</b></td>
                  <td><b>Volume</b></td>
                  <td><b>Updated</b></td>
                </tr>
                <tr id="0C"></tr>
                <tr id="2C"></tr>
                <tr id="3C"></tr>
                <tr id="4C"></tr>
                <tr id="5C"></tr>
                <tr id="6C"></tr>
                <tr id="7C"></tr>
                <tr id="8C"></tr>
                <tr id="9C"></tr>
                <tr id="10C"></tr>
                <tr id="11C"></tr>
                <tr id="12C"></tr>
                <tr id="13C"></tr>
                <tr id="14C"></tr>
                <tr id="15C"></tr>
                <tr id="16C"></tr>
                <tr id="17C"></tr>
                <tr id="18C"></tr>
              </tbody>
            </Table>
            <p><b>Fonte:</b>https://www.cmegroup.com/markets/agriculture/oilseeds/soybean.quotes.html</p>

          </div>

          <div className="TableB3">
            <h1>B3 Milho</h1>

            <Table id="B3TABLEX" striped bordered hover variant="dark">
              <tbody id="BodyTableB3">
                <tr><td><b>Mercadoria</b></td>  <td><b>Vencimento</b></td>
                  <td><b>Preço de Ajuste Anterior</b></td>
                  <td><b>Preço de Ajuste Atual	</b></td>
                  <td><b>Variação</b></td>
                  <td><b>Valor do Ajuste Por Contrato (R$)</b></td></tr>
                <tr id="B3TR1"></tr>
                <tr id="B3TR2"><td></td> </tr>
                <tr id="B3TR3"><td></td></tr>
                <tr id="B3TR4"><td></td></tr>
                <tr id="B3TR5"><td></td></tr>
                <tr id="B3TR6"><td></td></tr>
                <tr id="B3TR7"><td></td></tr>
                <tr id="B3TR8"><td></td></tr>
                <tr id="B3TR9"><td></td></tr>
                <tr id="B3TR10"><td></td></tr>
                <tr id="B3TR11"></tr>
                <tr id="B3TR12"><td></td></tr>
                <tr id="B3TR13"><td></td></tr>
                <tr id="B3TR14"><td></td></tr>
                <tr id="B3TR15"><td></td></tr>
                <tr id="B3TR16"><td></td></tr>
                <tr id="B3TR17"><td></td></tr>
                <tr id="B3TR18"><td></td></tr>
                <tr id="B3TR19"><td></td> </tr>
                <tr id="B3TR20"><td></td></tr>
                <tr id="B3TR21"><td></td></tr>
                <tr id="B3TR22"></tr>
                <tr id="B3TR23"><td></td></tr>
                <tr id="B3TR24"><td></td></tr>
                <tr id="B3TR25"><td></td></tr>
                <tr id="B3TR26"><td></td></tr>
                <tr id="B3TR27"><td></td></tr>
                <tr id="B3TR28"><td></td></tr>
                <tr id="B3TR29"><td></td></tr>
                <tr id="B3TR30"><td></td></tr>
                <tr id="B3TR31"><td></td></tr>
                <tr id="B3TR32"><td></td></tr>
                <tr id="B3TR33"><td></td></tr>
                <tr id="B3TR34"><td></td></tr>
                <tr id="B3TR35"><td></td></tr>
                <tr id="B3TR36"><td></td></tr>
                <tr id="B3TR37"><td></td></tr>
                <tr id="B3TR38"><td></td></tr>
              </tbody>
            </Table>
            <p><b>Fonte:</b>https://www2.bmf.com.br/pages/portal/bmfbovespa/lumis/lum-ajustes-do-pregao-ptBR.asp</p>

          </div>

          <div className="bcbgovTablefourth">
            <h1 id="fourthTableTitle">USD Cotação</h1>

            <Table id="Fourthtable" striped bordered hover variant="light">
              <tbody >
                <tr>
                  <td> <b>Data</b></td>
                  <td> <b>tipo</b></td>
                  <td colSpan={2}><b>Cotações em Real1/</b> </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td> <b>Compra</b>	</td>
                  <td> <b>Venda</b></td>
                </tr>
                <tr id="0GOVROW"></tr>
                <tr id="1GOVROW"></tr>
                <tr id="2GOVROW"></tr>
                <tr id="3GOVROW"></tr>
                <tr id="4GOVROW"></tr>
                <tr id="5GOVROW"></tr>
                <tr id="6GOVROW"></tr>
                <tr id="7GOVROW"></tr>
                <tr id="8GOVROW"></tr>
                <tr id="9GOVROW"></tr>
                <tr id="10GOVROW"></tr>
                <tr id="11GOVROW"></tr>
                <tr id="12GOVROW"></tr>
                <tr id="13GOVROW"></tr>
                <tr id="14GOVROW"></tr>
                <tr id="15GOVROW"></tr>
                <tr id="16GOVROW"></tr>
                <tr id="17GOVROW"></tr>
                <tr id="18GOVROW"></tr>
                <tr id="19GOVROW"></tr>
              </tbody>
            </Table>
            <p><b>Fonte:</b>https://ptax.bcb.gov.br/</p>
          </div>

        </div>
    
    )
  }



}


export default Main