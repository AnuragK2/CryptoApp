import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ arr = [], currency, days }) => {

    const prices = [1, 2, 3, 4];
    const date = [];
    
    for (let i = 0; i < arr.length; i++){
        if (days === '24h')
            date.push(new Date(arr[i][0]).toLocaleTimeString());
        else
        date.push(new Date(arr[i][0]).toLocaleDateString());
        prices.push(arr[i][1]);
        
    }

    const data = {
        
                labels: date,
                datasets: [{
                    label: `Price in ${currency}`,
                    data: prices,
                    borderColor: 'rgb(201,41,139)',
                    backgroundColor: 'rgba(201,41,139,0.5)',
                },],
            
    }
    
    return (
        <Line options={{
            responsive: true,
        }}
            data={data}
    />
)
}

export default Chart