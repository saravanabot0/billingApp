import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";

  

function BillGenerate(props) {

    const {cart,total,quantity} = props;
    console.log(cart,"billing")
    // const styles = StyleSheet.create({
    //     page: {
    //       backgroundColor: "#fff",
    //       color: "black",
    //     },
    //     section: {
    //       margin: 10,
    //       padding: 10,
    //     },
    //   });

    const styles = StyleSheet.create({
      overAllHeader :{
        // fontFamily:'Ubuntu',
        letterSpacing: 5,
        padding:10,
        paddingBottom:20,
      },
      headerOne :{
        fontSize:30,
        fontWeight:"bold",
        color:"#FF4C29",
      },
      headerTwo :{
        fontSize:30,
      },
      tableContainer : {
        width:"100%",
        // backgroundColor: '#bff0fd',
        display:"flex",
        alignContent:"center",
        alignItems:"center",
        paddingTop:5,
      },
      table: {
        width: '90%',
        // padding: 5,
        border: '1px solid #EEE',
        borderRight:"none",
        fontSize: 12,
      },
      row: {
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid #EEE',
        // paddingTop: 8,
        // paddingBottom: 8,
        textAlign: 'center',
      },
      header: {
        // borderTop: 'none',
        backgroundColor: '#EEE',
        fontWeight:"black",
      },
      bold: {
        fontWeight: 'bold',
      },
      // So Declarative and unDRY 👌
      row1: {
        width: '40%',
        borderRight: '1px solid #EEE',
        paddingTop: 8,
        paddingBottom: 8,
        fontWeight: 'bold',
      },
      row2: {
        width: '30%',
        borderRight: '1px solid #EEE',
        paddingTop: 8,
        paddingBottom: 8,
      },
      row3: {
        width: '30%',
        borderRight: '1px solid #EEE',
        paddingTop: 8,
        paddingBottom: 8,
      },
      // row4: {
      //   width: '20%',
      //   borderRight: '1px solid #EEE',
      //   paddingTop: 8,
      //   paddingBottom: 8,
      // },
      // row5: {
      //   width: '27%',
      //   borderRight: '1px solid #EEE',
      //   paddingTop: 8,
      //   paddingBottom: 8,
      //   // borderBottom: '1px solid #EEE',
      // },
    })

  return (
    <>
    {/* Start of the document*/}
    <Document>
      {/*render a single page*/}
      <Page size="A5" style={styles.page}>
        {/* <View style={styles.section}>
          {cart.map((item,index)=> 
          <>
          <Text> {item.name} </Text>
          <Text> {item.qty} </Text>
          <Text> {item.price} </Text>
          </>
          )}
        </View>
        <View style={styles.section}>
          <Text>World</Text>
        </View> */}
        <View style={styles.tableContainer}> 
          <Text style={styles.overAllHeader}>
            <Text style={styles.headerOne}> Tasty </Text>
            <Text style={styles.headerTwo}> Deserts </Text>
          </Text>
        </View>
<View style={styles.tableContainer}>
<View style={styles.table}>
      <View style={[styles.row, styles.bold, styles.header]}>
        <Text style={[styles.row1,styles.header]}>Desert</Text>
        <Text style={styles.row2}>Quantity</Text>
        <Text style={styles.row3}>Price</Text>
        {/* <Text style={styles.row4}>Days</Text>
        <Text style={styles.row5}>Info</Text> */}
      </View>
      {cart.map((row, i) => (
        <View key={i} style={styles.row} wrap={false}>
          <Text style={styles.row1}>
            <Text style={styles.bold}>{row.name}</Text>
          </Text>
          <Text style={styles.row2}> x {row.qty}</Text>
          <Text style={styles.row3}>{row.price}</Text>
          {/* <Text style={styles.row4}>
            <Text style={styles.bold}>{row.name}</Text> 
          </Text>
          <Text style={styles.row5}>{row.name}</Text> */}
        </View>
      ))}
    </View>
    <View style={styles.table}>
      <View style={[styles.row, styles.bold, styles.header]}>
        <Text style={styles.row1}> Total </Text>
        <Text style={styles.row2}> x {quantity} </Text>
        <Text style={styles.row3}> {total} </Text>
        {/* <Text style={styles.row4}> Total </Text>
        <Text style={styles.row5}> 2500 </Text> */}
      </View>
      {/* {cart.map((row, i) => (
        <View key={i} style={styles.row} wrap={false}>
          <Text style={styles.row1}>
            <Text style={styles.bold}>{row.name}</Text>
          </Text>
          <Text style={styles.row2}>{row.name}</Text>
          <Text style={styles.row3}>{row.name}</Text>
          <Text style={styles.row4}>
            <Text style={styles.bold}>{row.name}</Text> 
          </Text>
          <Text style={styles.row5}>{row.name}</Text>
        </View>
      ))} */}
    </View>
    </View>

      </Page>
    </Document>
</>
  )
}

export default BillGenerate;