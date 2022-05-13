import { Component, React } from "react";
import { Table } from 'react-bootstrap'
import './TABLES.css'
import LOGO from './LogoDec.png'
import Axios from 'axios'

class Main extends Component {


  async componentDidMount() {
    const response = await Axios.get('http://localhost:8080/GettingDatasBarchart')
    const ArrayTableBarchart = await response.data
    const firtTableBarchart = async (ArrayTableBarchart) => {
      const firstrow = async () => {
        for (let index0 = 0; index0 < 10; index0++) {
          let element0 = ArrayTableBarchart[0]
          const table0 = await document.getElementById("0")
          table0.insertAdjacentHTML('beforeend', `
        <td><b>${element0[index0]}</b></td>
        `)
        }
        for (let index0C = 11; index0C < 12; index0C++) {
          let element0C = ArrayTableBarchart[0]
          const table0 = await document.getElementById("0")
          table0.insertAdjacentHTML('beforeend', `
        <td><b>${element0C[index0C]}</b></td>
        `)
        }
      }
      const secondrow = async () => {
        for (let index1 = 0; index1 < 3; index1++) {
          let element1 = ArrayTableBarchart[1]
          const table1 = await document.getElementById("1TD")
          table1.insertAdjacentHTML('beforeend', `
          ${element1[index1]}
          `)
        }
        for (let index1C = 3; index1C < 12; index1C++) {
          let element1C = ArrayTableBarchart[1]
          const table1C = await document.getElementById("1")
          table1C.insertAdjacentHTML('beforeend', `
          <td> ${element1C[index1C]} </td>
          `)
        }
      }
      const Thirdrow = async () => {
        for (let index2 = 0; index2 < 4; index2++) {
          let element2 = ArrayTableBarchart[2]
          const table2 = await document.getElementById("2TD")
          table2.insertAdjacentHTML('beforeend', `
          ${element2[index2]}
          `)
        }
        for (let index2C = 4; index2C < 13; index2C++) {
          let element2C = ArrayTableBarchart[2]
          const table2C = await document.getElementById("2")
          table2C.insertAdjacentHTML('beforeend', `
            <td>  ${element2C[index2C]}</td> 
            `)
        }
      }
      const Fouthrow = async () => {
        for (let index3 = 0; index3 < 4; index3++) {
          let element3 = ArrayTableBarchart[3]
          const table3 = await document.getElementById("3TD")
          table3.insertAdjacentHTML('beforeend', `
          ${element3[index3]}
          `)
        }
        for (let index3C = 4; index3C < 13; index3C++) {
          let element3C = ArrayTableBarchart[3]
          const table3C = await document.getElementById("3")
          table3C.insertAdjacentHTML('beforeend', `
            <td>  ${element3C[index3C]}</td> 
            `)
        }
      }
      const Fifthrow = async () => {
        for (let index4 = 0; index4 < 4; index4++) {
          let element4 = ArrayTableBarchart[4]
          const table4 = await document.getElementById("4TD")
          table4.insertAdjacentHTML('beforeend', `
          ${element4[index4]}
          `)
        }
        for (let index4C = 4; index4C < 13; index4C++) {
          let element4C = ArrayTableBarchart[4]
          const table4C = await document.getElementById("4")
          table4C.insertAdjacentHTML('beforeend', `
            <td>  ${element4C[index4C]}</td> 
            `)
        }
      }
      const sixthrow = async () => {
        for (let index5 = 0; index5 < 4; index5++) {
          let element5 = ArrayTableBarchart[5]
          const table5 = await document.getElementById("5TD")
          table5.insertAdjacentHTML('beforeend', `
          ${element5[index5]}
          `)
        }
        for (let index5C = 4; index5C < 13; index5C++) {
          let element5C = ArrayTableBarchart[5]
          const table5C = await document.getElementById("5")
          table5C.insertAdjacentHTML('beforeend', `
            <td>  ${element5C[index5C]}</td> 
            `)
        }
      }
      const seventhrow = async () => {
        for (let index6 = 0; index6 < 4; index6++) {
          let element6 = ArrayTableBarchart[6]
          const table6 = await document.getElementById("6TD")
          table6.insertAdjacentHTML('beforeend', `
          ${element6[index6]}
          `)
        }
        for (let index6C = 4; index6C < 13; index6C++) {
          let element6C = ArrayTableBarchart[6]
          const table6C = await document.getElementById("6")
          table6C.insertAdjacentHTML('beforeend', `
            <td>  ${element6C[index6C]}</td> 
            `)
        }
      }
      const eighthrow = async () => {
        for (let index7 = 0; index7 < 4; index7++) {
          let element7 = ArrayTableBarchart[7]
          const table7 = await document.getElementById("7TD")
          table7.insertAdjacentHTML('beforeend', `
          ${element7[index7]}
          `)
        }
        for (let index7C = 4; index7C < 13; index7C++) {
          let element7C = ArrayTableBarchart[7]
          const table7C = await document.getElementById("7")
          table7C.insertAdjacentHTML('beforeend', `
            <td>  ${element7C[index7C]}</td> 
            `)
        }
      }
      const ninthrow = async () => {
        for (let index8 = 0; index8 < 4; index8++) {
          let element8 = ArrayTableBarchart[8]
          const table8 = await document.getElementById("8TD")
          table8.insertAdjacentHTML('beforeend', `
          ${element8[index8]}
          `)
        }
        for (let index8C = 4; index8C < 13; index8C++) {
          let element8C = ArrayTableBarchart[8]
          const table8C = await document.getElementById("8")
          table8C.insertAdjacentHTML('beforeend', `
            <td>  ${element8C[index8C]}</td> 
            `)
        }
      }
      const tenthrow = async () => {
        for (let index9 = 0; index9 < 4; index9++) {
          let element9 = ArrayTableBarchart[9]
          const table9 = await document.getElementById("9TD")
          table9.insertAdjacentHTML('beforeend', `
          ${element9[index9]}
          `)
        }
        for (let index9C = 4; index9C < 13; index9C++) {
          let element9C = ArrayTableBarchart[9]
          const table9C = await document.getElementById("9")
          table9C.insertAdjacentHTML('beforeend', `
            <td>  ${element9C[index9C]}</td> 
            `)
        }
      }
      const eleventh = async () => {
        for (let index10 = 0; index10 < 4; index10++) {
          let element10 = ArrayTableBarchart[10]
          const table10 = await document.getElementById("10TD")
          table10.insertAdjacentHTML('beforeend', `
          ${element10[index10]}
          `)
        }
        for (let index10C = 4; index10C < 13; index10C++) {
          let element10C = ArrayTableBarchart[10]
          const table10C = await document.getElementById("10")
          table10C.insertAdjacentHTML('beforeend', `
            <td>  ${element10C[index10C]}</td> 
            `)
        }
      }
      const twelfth = async () => {
        for (let index11 = 0; index11 < 4; index11++) {
          let element11 = ArrayTableBarchart[11]
          const table11 = await document.getElementById("11TD")
          table11.insertAdjacentHTML('beforeend', `
          ${element11[index11]}
          `)
        }
        for (let index11C = 4; index11C < 13; index11C++) {
          let element11C = ArrayTableBarchart[11]
          const table11C = await document.getElementById("11")
          table11C.insertAdjacentHTML('beforeend', `
            <td>  ${element11C[index11C]}</td> 
            `)
        }
      }
      const thirteenth = async () => {
        for (let index12 = 0; index12 < 4; index12++) {
          let element12 = ArrayTableBarchart[12]
          const table12 = await document.getElementById("12TD")
          table12.insertAdjacentHTML('beforeend', `
          ${element12[index12]}
          `)
        }
        for (let index12C = 4; index12C < 13; index12C++) {
          let element12C = ArrayTableBarchart[12]
          const table12C = await document.getElementById("12")
          table12C.insertAdjacentHTML('beforeend', `
            <td>  ${element12C[index12C]}</td> 
            `)
        }
      }
      const fourteenth = async () => {
        for (let index13 = 0; index13 < 4; index13++) {
          let element13 = ArrayTableBarchart[13]
          const table13 = await document.getElementById("13TD")
          table13.insertAdjacentHTML('beforeend', `
          ${element13[index13]}
          `)
        }
        for (let index13C = 4; index13C < 13; index13C++) {
          let element13C = ArrayTableBarchart[13]
          const table13C = await document.getElementById("13")
          table13C.insertAdjacentHTML('beforeend', `
            <td>  ${element13C[index13C]}</td> 
            `)
        }
      }
      const fifteenth = async () => {
        for (let index14 = 0; index14 < 4; index14++) {
          let element14 = ArrayTableBarchart[14]
          const table14 = await document.getElementById("14TD")
          table14.insertAdjacentHTML('beforeend', `
          ${element14[index14]}
          `)
        }
        for (let index14C = 4; index14C < 13; index14C++) {
          let element14C = ArrayTableBarchart[14]
          const table14C = await document.getElementById("14")
          table14C.insertAdjacentHTML('beforeend', `
            <td>  ${element14C[index14C]}</td> 
            `)
        }
      }
      const sixteenth = async () => {
        for (let index15 = 0; index15 < 4; index15++) {
          let element15 = ArrayTableBarchart[15]
          const table15 = await document.getElementById("15TD")
          table15.insertAdjacentHTML('beforeend', `
          ${element15[index15]}
          `)
        }
        for (let index15C = 4; index15C < 13; index15C++) {
          let element15C = ArrayTableBarchart[15]
          const table15C = await document.getElementById("15")
          table15C.insertAdjacentHTML('beforeend', `
            <td>  ${element15C[index15C]}</td> 
            `)
        }
      }
      const seventeenth = async () => {
        for (let index16 = 0; index16 < 4; index16++) {
          let element16 = ArrayTableBarchart[16]
          const table16 = await document.getElementById("16TD")
          table16.insertAdjacentHTML('beforeend', `
          ${element16[index16]}
          `)
        }
        for (let index16C = 4; index16C < 13; index16C++) {
          let element16C = ArrayTableBarchart[16]
          const table16C = await document.getElementById("16")
          table16C.insertAdjacentHTML('beforeend', `
            <td>  ${element16C[index16C]}</td> 
            `)
        }
      }
      seventeenth()
      sixteenth()
      fifteenth()
      fourteenth()
      thirteenth()
      twelfth()
      eleventh()
      tenthrow()
      ninthrow()
      eighthrow()
      seventhrow()
      sixthrow()
      Fifthrow()
      Fouthrow()
      Thirdrow()
      secondrow()
      firstrow()

    }
    firtTableBarchart( ArrayTableBarchart)
    
  }

  render() {

    const CallFunctionsForEachOne = async () => {
      await this.componentDidMount()
    }

 
   setInterval(function () {
    CallFunctionsForEachOne();
    }, 900000) // 15 minutos
  
   

    window.onload = CallFunctionsForEachOne()
    return (
      <div className="App">
        <div className="TABLESAPIIComponent">
          <div className="logo">
            <img src={LOGO} height={50}></img>
          </div>
          <div className="BarchartTable">
            <h1 id="FirtTableTitle">Cotton Barchart</h1>

            <Table id="DinamicTable" striped bordered hover variant="dark">
              <tbody >
                <tr id="0"></tr>
                <tr id="1">
                  <td ></td>
                  <td id="1TD"></td>
                </tr>
                <tr id="2">
                  <td ></td>
                  <td id="2TD"></td>
                </tr>
                <tr id="3">
                  <td ></td>
                  <td id="3TD"></td>
                </tr>
                <tr id="4">
                  <td ></td>
                  <td id="4TD"></td>
                </tr>
                <tr id="5">
                  <td ></td>
                  <td id="5TD"></td>
                </tr>
                <tr id="6">
                  <td ></td>
                  <td id="6TD"></td>
                </tr>
                <tr id="7">
                  <td ></td>
                  <td id="7TD"></td>
                </tr>
                <tr id="8">
                  <td ></td>
                  <td id="8TD"></td>
                </tr>
                <tr id="9">
                  <td ></td>
                  <td id="9TD"></td>
                </tr>
                <tr id="10">
                  <td ></td>
                  <td id="10TD"></td>
                </tr>
                <tr id="11">
                  <td ></td>
                  <td id="11TD"></td>
                </tr>
                <tr id="12">
                  <td ></td>
                  <td id="12TD"></td>
                </tr>
                <tr id="13">
                  <td ></td>
                  <td id="13TD"></td>
                </tr>
                <tr id="14">
                  <td ></td>
                  <td id="14TD"></td>
                </tr>
                <tr id="15">
                  <td ></td>
                  <td id="15TD"></td>
                </tr>
              </tbody>
            </Table>
            <p><b>Fonte:</b> https://www.barchart.com/futures/quotes/CTK20/futures-prices</p>
            <h1 id="FirtTableTitle">UOL Cotações</h1>

            <Table id="UOUTable" striped bordered hover variant="dark">
              <tbody >
                <tr id="UOUROW1"></tr>
                <tr id="UOUROW2"></tr>
                <tr id="UOUROW3"></tr>
                <tr id="UOUROW4"></tr>
                <tr id="UOUROW5"></tr>
              </tbody>
            </Table>
            <p><b>Fonte:</b> https://economia.uol.com.br/cotacoes/</p>

          </div>

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
      </div>
    )
  }



}

export default Main