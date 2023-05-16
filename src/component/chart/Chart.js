

import React from "react";
//import "./style.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Row, Col, Card } from "antd";

import drilldown from "highcharts/modules/drilldown.js";
import HighchartsExporting from "highcharts/modules/exporting";

drilldown(Highcharts);
HighchartsExporting(Highcharts);


const ColumnChart = ({ title, y, dataList, widthVal, type }) => {
  
  var options = {
    chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Medical Report'
      },
      subtitle: {
        text: 'Hospital'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Patient (Count)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'In-Patient',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 17.5, 51.5, 34.5, 81.5,
        39.5, 97.5, 76.5],
        color: '#aaff99'
      }, {
        name: 'Out-patient',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
          106.6, 92.3],
        color:'#15a049'
      } ]
    }
      
    

  
  return (
    <>
      <HighchartsReact
        highcharts={Highcharts} containerProps={{ style: { width: widthVal < 600 && (widthVal - 100), height: 300 , overflow:"hidden" } }} options={options} />
    </>
  );
};

export default ColumnChart;