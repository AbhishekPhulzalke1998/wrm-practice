import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Save = ({ itemData, setEditMode, updateItemId }) => {
    const token = localStorage.getItem('token');

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
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log('Data updated successfully:', response.data);
            // Update item data with the new ID
            updateItemId(response.data.id);
            Swal.fire('success!','your action has been completed','success');
            setEditMode(false); // Disable edit mode after successful update
        })
        .catch(error => {
            console.error('Error updating data:', error);
            Swal.fire('Error','something went wroong.','error');
        });
    };

    return (
        <button className='btn btn-success' type='button' onClick={handleSave}>Save</button>
    );
};

export default Save;
