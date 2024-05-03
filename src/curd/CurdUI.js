import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Save from './save'; // Import the Save component
import { useLocation } from 'react-router-dom';
import './CurdUI.css';
import { useItemDataContext } from './DataItemCon';

const CurdUI = () => {
    const location = useLocation();

    // Load item data from localStorage if available, or use default state
    const [itemData, setItemData] = useState(() => {
        const savedData = localStorage.getItem('itemData');
        return savedData ? JSON.parse(savedData) : {
            id: '',
            item_number: '',
            name: '',
            description: '',
            classification: '',
            keyed_name: ''
        };
    });

    // State to hold the original item data
    const [originalItemData, setOriginalItemData] = useState({});

    // State to manage edit mode
    const [editMode, setEditMode] = useState(false);

    // Function to handle changes in input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItemData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to enter edit mode
    const handleEdit = () => {
        // Save the current item data as original data
        setOriginalItemData(itemData);
        setEditMode(true); 
    };

    // Function to handle refreshing the page
    const handleRefresh = () => {
        // Reset itemData to its original value
        setItemData(originalItemData);
    };

    // Function to exit edit mode and discard changes
    const handleDiscard = () => {
        // Reset itemData to its original value
        setItemData(originalItemData);
        setEditMode(false); 
    };

    useEffect(() => {
        if (location.state) {
            console.log("Location state:", location.state);
            const { id, item_number, name, description, classification, keyed_name } = location.state;
            setItemData({ id, item_number, name, description, classification, keyed_name });
        }
    }, [location.state]);

    useEffect(() => {
        localStorage.setItem('itemData', JSON.stringify(itemData));
    }, [itemData]);

    // Function to update itemData with new ID
    const updateItemId = (newId) => {
        setItemData(prevData => ({
            ...prevData,
            id: newId
        }));
    };

    return (
        <div style={{ backgroundColor: 'rgba(135, 206, 235, 0.5)' }} className='container'>
            <form>
                <div className='buttons'>
                    {!editMode && <Button className='btn btn-success' type='button' onClick={handleEdit}>Edit</Button>}
                    <Button className='btn btn-primary' type='button' onClick={handleRefresh} disabled={!editMode}>Refresh</Button>
                    <Button className='btn btn-danger' type='button' onClick={handleDiscard} disabled={!editMode}>Discard</Button>
                    <Save itemData={itemData} setEditMode={setEditMode} updateItemId={updateItemId} />
                </div>
                <div className='input'>
                    <div className="form-group">
                        <label> Item_Number:   </label>
                        <input type='text' id="Item_Number" className="form-control" placeholder='Enter your Item_Number' name='item_number' value={itemData.item_number} onChange={handleInputChange} disabled={!editMode} />
                    </div>
                    <div className="form-group">
                        <label> Name:   </label>
                        <input type='text' id="Name" className="form-control" placeholder='Enter your Name' name='name' value={itemData.name} onChange={handleInputChange} disabled={!editMode} />
                    </div>
                    <div className="form-group">
                        <label> Keyed_Name:   </label>
                        <input type='text' id="Keyed_Name" className="form-control" placeholder='Enter your Keyed_Name' name='keyed_name' value={itemData.keyed_name} onChange={handleInputChange} disabled={!editMode} />
                    </div>
                    <div className="form-group">
                        <label> Description:   </label>
                        <input type='textarea' id="Description" className="form-control" placeholder='Enter your Description' name='description' value={itemData.description} onChange={handleInputChange} disabled={!editMode} />
                    </div>
                    <div className="form-group">
                        <label> Type:   </label>
                        <input type='text' id="Type" className="form-control" placeholder='Enter your Type' name='classification' value={itemData.classification} onChange={handleInputChange} disabled={!editMode} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CurdUI;
