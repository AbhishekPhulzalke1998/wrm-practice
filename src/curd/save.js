import React from 'react';
import axios from 'axios';

const Save = ({ itemData, setEditMode }) => {
    // Function to handle save button click
    const handleSave = () => {
        axios.patch(`http://localhost/InnovatorServer22/server/odata/Part('${itemData.id}')`, {
            
            item_number: itemData.item_number,
            name: itemData.name,
            description: itemData.description,
            classification: itemData.classification,
            keyed_name: itemData.keyed_name
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            console.log('Data updated successfully:', response.data);
            setEditMode(false); // Disable edit mode after successful update
        })
        .catch(error => {
            console.error('Error updating data:', error);
        });
    };

    return (
        <button className='btn btn-success' type='button' onClick={handleSave}>Save</button>
    );
};

export default Save;
