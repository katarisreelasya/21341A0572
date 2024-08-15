import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzAwNDY3LCJpYXQiOjE3MjM3MDAxNjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE0ODE1YjdhLWVmMjItNGE3NC1hZDgwLTBlODdjYTExZDJmNCIsInN1YiI6IjIxMzQxQTA1NzJAZ21yaXQuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiJhNDgxNWI3YS1lZjIyLTRhNzQtYWQ4MC0wZTg3Y2ExMWQyZjQiLCJjbGllbnRTZWNyZXQiOiJjaHNSbXZZclFERkh0Q0h3Iiwib3duZXJOYW1lIjoiS2F0YXJpIFNyZWVMYXN5YSIsIm93bmVyRW1haWwiOiIyMTM0MUEwNTcyQGdtcml0LmVkdS5pbiIsInJvbGxObyI6IjIxMzQxQTA1NzIifQ.0JxtkQl58_iO1hQq9IbdIn262TbkuAehCT2g-RjotDw";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9876/numbers/e', {
                    headers: {
                        Authorization: token,
                    },
                });
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Average Calculator</h1>
            <p>Window Previous State: {JSON.stringify(data.windowPrevState)}</p>
            <p>Window Current State: {JSON.stringify(data.windowCurrState)}</p>
            <p>Numbers: {JSON.stringify(data.numbers)}</p>
            <p>Average: {data.avg}</p>
        </div>
    );
};

export default AverageCalculator;
