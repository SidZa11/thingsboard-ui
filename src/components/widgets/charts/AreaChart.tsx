import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface AreaChartProps {
    apiData? : Object[];
    height? : Number;
    bg ? : string;
}

const AreaChart : React.FC <AreaChartProps> = ({apiData, height=290, bg}) => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'area',
            backgroundColor : bg || "transparent",
            height : height,
            zoomType : "x"
        },
        title: {
            text: ''
        },
        xAxis: {
            type : 'datetime'
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        series: [] as Object[]
    });

    useEffect(() => {
        if (apiData) {
            setChartOptions({
                ...chartOptions,
                series: apiData
            });
        }
    }, [apiData]);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
        />
    );
};

export default AreaChart;