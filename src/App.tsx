import { useLayoutEffect, useState } from "react";
import ReactPDF, { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import MyDocument from "./pdf/MyDocument";

async function renderpdf() {
    await ReactPDF.render(<MyDocument />, `${import.meta.url}/example.pdf`);
}

function App() {
    const [instance, update] = usePDF({ document: <MyDocument /> });
    console.log(instance);

    return (
        <>
            {/* {instance} */}
            <PDFDownloadLink document={<MyDocument />} fileName="test.pdf">
                1234
            </PDFDownloadLink>
        </>
    );
}

export default App;
