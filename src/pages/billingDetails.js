import React, { useEffect, useState } from 'react';
// import BillGenerate from './billGenerate';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import BillGenerate from './billGenerate';
// import jsPDF from 'jspdf';
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";
import { PDFDownloadLink } from "@react-pdf/renderer";


function BillingDetails(props) {
    const {showBill, cart, qValue,setQValue} = props;
    console.log(cart,"carttttt");
    const [qty,setQty] = useState([]);
    // const [qValue,setQValue] = useState([]);
    var count = [];

    const storeQuantity = () => {
      // setQValue([]);
      // alert("add")
      // console.log(typeof(count),typeof(arr),"beforeConverting");
      // var arr = Array.from(count);
      // console.log(typeof(count),typeof(arr),"afterConverting");
      {console.log(cart,"first")}
      {cart.map((item,i)=> {
        // console.log(qValue,arr,"qValue");
        setQValue(qValue => [...qValue,item.qty]);
        // setQty([...qty,4,3,2,1]);
        // arr.push(item.qty);
        // console.log(typeof(item));
        // console.log(typeof(arr),item.qty,arr,"second");
        // count++;
      })}
    }

    const quantity = qValue.reduce((preValue,item)=> preValue+item,0);

    {console.log(quantity,"quantity")}

    useEffect(()=> {
      // setQValue(()=>[...qty,qValue]);
      // setTimeout(()=> storeQuantity(),2000)
      // count = 1;
      storeQuantity()
    },[cart])
    // const generatePDF = () => {
    //   var doc = new jsPDF("p","pt","a5");
    //   doc.html(document.querySelector("#billingDetail"),{
    //     callback: function(pdf){
    //       pdf.save("MyBill.pdf");
    //     }
    //   });
    // };


   
  
  

    const itemPrice = cart.reduce((preValue,item) => preValue+item.qty*item.price,0);

    // const pdfExportComponent = React.useRef(null);

    // const exportPDFWithComponent = () => {
    //   if(pdfExportComponent.current) {
    //     pdfExportComponent.current.save();
    //   }
    // }

    // const exportPdf = () => {
    //   return <PDFExport
    //     ref={pdfExportComponent}
    //     paperSize="auto"
    //     margin={40}
    //     fileName=""
    //   >
    //     <h1> Hello PDF </h1>
    //   </PDFExport>
    // }

  return (
    <div className={`billingDetailPage ${showBill ? "showBillingPage open" : "hideBillingPage close"}`}>
        <div className={`insideBillingPage colorWhite ${showBill?"showBillContent":"HideBillContent"}`}>
      {console.log(qty,"qty")}
        <div className='savePDFBill'>
        <p className='billHeading'> Billing Details -------- </p>
        <div className='outerProductPrice'>
        {cart && cart.map((item,index)=>
        
        <div className='productPrice' key={index}>
            <div className='productName'>
            <p> {item.name} </p>
            </div>
           <div>
           <p> x {item.qty} </p>
            </div>
            <div>
            <p> {item.price} </p>
            </div>
        </div>
        
        )}
        </div>
        <hr className='horizontalLine'/>
        <div className='totalPrice'>
            <p> Total </p>
            <p> {itemPrice} </p>
        </div>
        </div>
        <div className='buttonContainer'>
          <PDFDownloadLink document={<BillGenerate cart={cart} total={itemPrice} quantity={quantity}/>} fileName="Bill" >
            {({loading}) => (loading ? <button className='saveBillButton colorWhite cursorPointer'> Loading... </button> : 
            <button className='saveBillButton colorWhite cursorPointer'> Save Bill </button>)}
          </PDFDownloadLink>
        </div>
        </div>
        {console.log(qValue,"qValue")}
        {console.log(qValue,"UpdatedQValue")}
    </div>
  )
}

export default BillingDetails