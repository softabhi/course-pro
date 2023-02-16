import React from 'react'
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
    Title, Tooltip, ArcElement, Legend
} from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'
import { background, border } from '@chakra-ui/react';

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement,
    Title, Tooltip, ArcElement, Legend
);

export const LineChart = () => {
    const labels = getLastYearMonth();

    const options = {
        responsive: true,
        plugins: {
            legend: {
                positon: "bottom",
            },
            title: {
                display: true,
                text: "Yearly Views"
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: "Views",
                data: [1, 2, 3, 4],
                borderColor: 'rgba(107,93,193,0.5)',
                backgroundColor: '#6b46c1'
            },
        ],

    };

    return <Line options={options} data={data} />
}

export const DoughnutChart = ()=>{
    const data = {
        labels:['Subscribe','Not Subscribe'],
        datasets: [
            {
                lable: "Views",
                data: [3, 20],
                borderColor: ['rgb(62,12,172)','rgba(214,43,129)'],
                backgroundColor: ['rgba(62,12,172,0.3)','rgba(214,43,129,0.3)'],
                borderWidth:"1",
            }
        ]

    }

    return <Doughnut data={data}/>
}

function getLastYearMonth(){
    const labels=[]

    const month=[
       'january',
       'february',
       'march',
       'april',
       'may',
       'june',
       'july',
       'august',
       'september',
       'october',
       'nuvmber',
       'december'
    ];

    const currentmonth = new Date().getMonth();
    console.log(currentmonth);
    const remain = 11-currentmonth;

    for(let i=currentmonth; i<month.length;i--){
          const element = month[i];
          labels.unshift(element);
          if(i===0) break;
    }

    console.log(labels);

    for(let i=11; i>remain;i--){
        if(i=== currentmonth) break;
        const element = month[i];
        labels.unshift(element);

        // console.log(element);
    }
    return labels;
}

