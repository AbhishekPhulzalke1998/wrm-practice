import React, { useState, useEffect } from 'react';    // all parts fetched 
import axios from 'axios';
import PartsTable from './PartsTable'; 
import './PartsTable.css'


const PartsFetch = () => {
    const baseUrl = 'http://localhost/InnovatorServer22/server/odata/Part?$select=config_id, item_number, name, description, classification, keyed_name,make_buy,is_released,cost,id'
    const token = localStorage.getItem('token');

    const [parts, setParts] = useState([]);
    const [propertyNames, setPropertyNames] = useState([]);

    useEffect(() => {
        fetchParts();
    }, []);

    const fetchParts = () => {
        axios.get(baseUrl,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setParts(response.data.value);
            setPropertyNames(getPropertyNames(response.data.value));
        })
        .catch(error => {
            console.error('Error fetching parts:', error);
        });
    };

    const getPropertyNames = (arr) => {
        const propertySet = new Set();
        arr.forEach(item => {
            Object.keys(item).forEach(key => propertySet.add(key));
        });
        return Array.from(propertySet);
    };

    console.log('Parts:', parts);
    console.log('Property Names:', propertyNames);

    return (
        <div>
            <h2 className='h2'>Parts Table</h2>
            <br></br>
            {parts && propertyNames ? (
                <PartsTable parts={parts} propertyNames={propertyNames} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PartsFetch;