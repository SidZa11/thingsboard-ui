import { useState, useEffect, useCallback, useRef } from 'react';
import AlarmLiveTableAPI from '../../../api/Alarm/AlarmLiveTableAPI';

interface APIData {
    column : string[];
    dataFromAPI : string[][]; 
  }

const UseAlarmLiveTable = (searchDev: string, timeWindow: { startTs: number, endTs: number, aggregate: string, interval: number }) => {
    const [data, setData] = useState<APIData[] | null>(null);

    const fetchTelemetryData = useCallback(async () => {

        try {
            const response = await AlarmLiveTableAPI(searchDev, timeWindow);
            setData(response?.data);
        } catch (error) {
            console.error('Error fetching telemetry data:', error);
        }
    }, [timeWindow]);

    useEffect(() => {
        
        fetchTelemetryData();
        
        // const interval = setInterval(fetchTelemetryData, 300000); // 5-minute interval
        // return () => clearInterval(interval);
    }, [fetchTelemetryData]);

    return data;
};

export default UseAlarmLiveTable;
