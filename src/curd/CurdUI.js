import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GetItem from './GetItem';
import './CurdUI.css';

const CurdUI = () => {
    const [itemData, setItemData] = useState({
        item_number: '',
        name: '',
        description: '',
        classification: '',
        keyed_name: ''
    });

    const [editMode, setEditMode] = useState(false); // State to track edit mode

    const handleFetch = (data) => {
        console.log("Fetched data:", data);
        setItemData(data);
    };

    const getPart = async () => {
        console.log("GET button clicked");
        const result = await GetItem();
        console.log("Result: ", result);
        setItemData(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setEditMode(true); // Enable edit mode
    };

    const handleSave = () => {
        setEditMode(false); // Disable edit mode
        // Perform save operation or any other necessary action
    };

    return (
        <div style={{ backgroundColor: 'rgba(135, 206, 235, 0.5)' }} className='container'>
            <form>
                <div className='buttons'>
                    <Button onClick={handleEdit} className='btn btn-success' type='button'>Edit</Button>
                    <Button className='btn btn-primary' type='submit' disabled={!editMode}>Refresh</Button>
                    <Button className='btn btn-danger' type='submit' disabled={!editMode}>Discard</Button>
                    <Button onClick={getPart} className='btn btn-primary' type='button'>GET</Button>
                    {editMode && <Button onClick={handleSave} className='btn btn-success' type='button'>Save</Button>}
                </div>

                <div className='input'>
                    <div className="form-group">
                        <label> Item_Number:   </label>
                        <input type='text' id="Item_Number" className="form-control" placeholder='Enter your Item_Number' name='item_number' value={itemData.item_number} onChange={handleChange} disabled={!editMode} />
                    </div>
                    <div className="form-group">
                        <label> Name:   </label>
                        <input type='text' id="Name" className="form-control" placeholder='Enter your Name' name='name' value={itemData.name} onChange={handleChange} disabled={!editMode} />
                    </div>
                    <div className="form-group">
                        <label> Keyed_Name:   </label>
                        <input type='text' id="Keyed_Name" className="form-control" placeholder='Enter your Keyed_Name' name='keyed_name' value={itemData.keyed_name} onChange={handleChange} disabled={!editMode} />
                    </div>
                    <div className="form-group">
                        <label> Description:   </label>
                        <input type='txtarea'  txtarea id="Description" className="form-control" placeholder='Enter your Description' name='description' value={itemData.description} onChange={handleChange} disabled={!editMode} />
                    </div>
                    <div className="form-group">
                        <label> Type:   </label>
                        <input type='text' id="Type" className="form-control" placeholder='Enter your Type' name='classification' value={itemData.classification} onChange={handleChange} disabled={!editMode} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CurdUI;
