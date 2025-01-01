import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const CommonChart = ({label, success, failed, skipped, total, className }) => {
    const options = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent', // Make background transparent
        style: {
          fontFamily: 'sans-serif', // Consistent font
        }
      },
      title: {
        text: label,
        align: 'left',
        style: {
          fontWeight: 'bold',
          fontSize: '16px',
          color: '#000' // Adjust color as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false // Hide default data labels
          },
          showInLegend: true, // Show legend
          innerSize: '60%', // Adjust inner size for donut effect
          borderColor: null, // Remove default border
        }
      },
      series: [
        {
          name: 'Tables',
          colorByPoint: true,
          data: [
            { name: 'Success', y: success, color: '#00A36C' }, // Green
            { name: 'Failed', y: failed, color: '#FF4500' },    // Red/Orange (you can adjust)
            { name: 'Skipped', y: skipped, color: '#673AB7' }   // Purple
          ]
        }
      ],
      legend: {
        align: 'center', // Center the legend
        verticalAlign: 'bottom',
        layout: 'horizontal', // Horizontal layout
        itemStyle:{
          color: '#000',
          fontWeight: 'normal'
        }
      },
      credits: {
        enabled: false // Hide Highcharts credits
      },
      // Adding the total count in the center
      subtitle: {
          text: `<span style="font-size:20px; font-weight: bold; color:#000">${total}</span><br><span style="font-size:12px; color:#000">Total Table</span>`,
          align: 'center',
          verticalAlign: 'middle',
          y: 5 // Adjust vertical position as needed
      }
    };
  
    return (
      <div className={className}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  };


