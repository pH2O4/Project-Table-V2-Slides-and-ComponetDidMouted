const express = require("express");
const Puppeteer = require('puppeteer');
const cors = require('cors');
const { ConsoleMessage } = require("puppeteer");
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get("/GettingDatasBarchart", async (req, res) => {


    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.barchart.com/futures/quotes/CTK20/futures-prices', {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });

    const GetingDatas = await page.evaluate(async () => {

        const TBODYBarchart = await document.querySelectorAll("tr")
        let TBODYBarchartArray = []
        for (let indexBODY = 0; indexBODY < TBODYBarchart.length; indexBODY++) {
            const elementsBODYBarchart = TBODYBarchart[indexBODY].textContent
            const elementsBODYBarchartClean = elementsBODYBarchart.replace(/(\r\n|\n|\r)/gm, " ")
            const elementsBODYBarchartSpliting = elementsBODYBarchartClean.replace(/\s{2,}/g, ' ')
            const elementsBODYBarchartSplitingMore = elementsBODYBarchartSpliting.split(" ")
            TBODYBarchartArray.push(elementsBODYBarchartSplitingMore)
        }
        const JsonTBODYBarchartArray = JSON.stringify(TBODYBarchartArray)
        return (JsonTBODYBarchartArray)

    })

    res.send(GetingDatas)
    await browser.close()

});

app.get("/GettingDatasB3", async (req, res) => {


    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    //B3 API
    await page.goto('https://www2.bmf.com.br/pages/portal/bmfbovespa/lumis/lum-ajustes-do-pregao-ptBR.asp', {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });


    //  await page.mouse.click(381, 749, { button: 'right' })
    //  await page.mouse.click(437, 732, { button: 'left' })
    //  await page.mouse.click(381, 749, { button: 'right' })
    //    await page.mouse.click(437, 732, { button: 'left' })
    // const screenshot =  await page.screenshot({'clip':{'x': 15, 'y': 400, 'height': 506, 'width': 1562}})
    //  await page.mouse.click( 284, 920, {button: 'right'})
    // await page.mouse.click( 337, 904, {button: 'left'})
    const GetingDatas = await page.evaluate(async () => {

        /*    function storePosition(e) {
                lastClickPosition = { x: e.pageX, y: e.pageY };
                console.log(lastClickPosition);
            } 
            document.addEventListener('mouseover', storePosition, true);*/
        const TBODYB3 = await document.querySelectorAll('tr')
        let TBODYB3Array = []
        for (let indexB3 = 0; indexB3 < TBODYB3.length; indexB3++) {
            const elementB3TR = await TBODYB3[indexB3]
            const getingTDSB3 = await elementB3TR.querySelectorAll("td")
            const GetingTextContentTDsB3 = (getingTDSB3) => {
                let ArrayForFluxe = []
                for (let index = 0; index < getingTDSB3.length; index++) {
                    const getingTDSB3Continue = getingTDSB3[index].textContent
                    ArrayForFluxe.push(getingTDSB3Continue)

                }
                return (ArrayForFluxe)
            }
            TBODYB3Array.push(GetingTextContentTDsB3(getingTDSB3))
        }
        const JsonTBODYB3Array = JSON.stringify(TBODYB3Array)
        console.log(TBODYB3Array)
        return (JsonTBODYB3Array)

    })

    res.send(GetingDatas)
    await browser.close()

});

app.get("/GettingDatasCmegroup", async (req, res) => {
    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.cmegroup.com/markets/agriculture/oilseeds/soybean.quotes.html', {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });

    const GetingDatas = await page.evaluate(async () => {

        const TBODYCmegroup = await document.querySelectorAll("table")
        let TBODYCmegroupArray = []
        for (let indexTD = 0; indexTD < TBODYCmegroup.length; indexTD++) {
            const GetingTDSBYArray = await TBODYCmegroup[indexTD]
            const GetingTDSBYArrayContinue = await GetingTDSBYArray.querySelectorAll("td")

            const ForInside = (GetingTDSBYArrayContinue) => {
                let ArrayForFluxe = []
                for (let index = 0; index < GetingTDSBYArrayContinue.length; index++) {
                    const elementFROMGetingTDSBYArrayContinue = GetingTDSBYArrayContinue[index].textContent
                    ArrayForFluxe.push(elementFROMGetingTDSBYArrayContinue)

                }
                return (ArrayForFluxe)
            }
            TBODYCmegroupArray.push(ForInside(GetingTDSBYArrayContinue))
        }
        /*   const TBODYCmegroupFirst = await document.querySelectorAll("tr")[1]
           const TBODYCmegroupFirstGeting = await TBODYCmegroupFirst.querySelectorAll("td")
           
           for (let indexBODY = 0; indexBODY < TBODYCmegroup.length; indexBODY++) {
               const elementsBODYCmegroup = TBODYCmegroup[indexBODY].textContent
               const elementsBODYCmegroupClean = elementsBODYCmegroup.replace(/'/g, ",")
               TBODYCmegroupArray.push(elementsBODYCmegroup)
           }*/
        return (TBODYCmegroupArray)

    })

    res.send(GetingDatas)
    await browser.close()

});

app.get("/GettingDatasGettingDatasBCBGOV", async (req, res) => {
    
    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://ptax.bcb.gov.br/ptax_internet/consultaBoletim.do?method=exibeFormularioConsultaBoletim', {
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2'],
        // Remove the timeout
        timeout: 0
    });
    await page.click('input[class="botao"]')
    await page.waitForTimeout(5000);
    const GetingDatas = await page.evaluate(async () => {

        const TBODYBCBGOV = await document.querySelectorAll("tr")
        let TBODYBCBGOVArray = []
        for (let indexBODY = 0; indexBODY < TBODYBCBGOV.length; indexBODY++) {
            const elementsBODYBCBGOV = TBODYBCBGOV[indexBODY].querySelectorAll("td")
            const getingTDS = (elementsBODYBCBGOV) => {
                let arrayforfluxe = []
                for (let index = 0; index < elementsBODYBCBGOV.length; index++) {
                    const element = elementsBODYBCBGOV[index].textContent
                    arrayforfluxe.push(element)
                }
                return (arrayforfluxe)
            }
            await TBODYBCBGOVArray.push(getingTDS(elementsBODYBCBGOV))

        }
        const JsonTBODYBCBGOVArray = await JSON.stringify(TBODYBCBGOVArray)

        return (JsonTBODYBCBGOVArray)

    })
    await res.send(GetingDatas)
    await browser.close()
});

app.get("/GettingDatasUOU", async (req, res) => {

try {
    
} catch (error) {
    
}
    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://economia.uol.com.br/cotacoes/', {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
    await page.waitForTimeout(5000);
    const GetingDatas = await page.evaluate(async () => {

        const TBODYUOU = await document.querySelectorAll("tr")
        const GtingATAG = await document.querySelectorAll("a")
        let TBODYUOUArray = []
        for (let index = 0; index < GtingATAG.length; index++) {
            const GetingATAG = GtingATAG[index].textContent
            TBODYUOUArray.push(GetingATAG)
        }
    /*    for (let indexBODY = 0; indexBODY < TBODYUOU.length; indexBODY++) {
            const TBODYUOUTD = await TBODYUOU[indexBODY].querySelectorAll("td")
            const getingTDS = (TBODYUOUTD) => {
                 let arrayFluxUOU = []
                for (let index = 0; index < TBODYUOUTD.length; index++) {
                    const GettingTDSUOU = TBODYUOU[index].textContent
                    arrayFluxUOU.push(GettingTDSUOU)
                }
                return (arrayFluxUOU)
            }
            TBODYUOUArray.push(getingTDS(TBODYUOUTD))
            console.log(TBODYUOUArray)
        }*/
        const JsonTBODYUOUArray = JSON.stringify(TBODYUOUArray)
        return (JsonTBODYUOUArray)

    })

    res.send(GetingDatas)
    await browser.close()

});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})