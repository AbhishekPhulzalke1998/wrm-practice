import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const PartsTable = ({ parts, propertyNames }) => {
  const navigate = useNavigate();

  const propertyLabelMapping = {
    created_on: 'Created_On',
    'current_state@aras.name': 'Current_State',
    'config_id@aras.id': 'Config_ID', // Changed to config_id@aras.id
    description: 'Description',
    generation: 'Generation',
    has_change_pending: 'Changes',
    id: 'ID',
    is_current: 'Is_Current',
    is_released: 'Released',
    keyed_name: 'Keyed Name',
    major_rev: 'Revision',
    make_buy: 'Make/Buy',
    mc_uom: 'Unit Of Measure',
    modified_on: '',
    name: 'Name',
    new_version: 'New Version',
    not_lockable: 'Not Lockable',
    state: 'State',
    unit: 'Unit',
    item_number: 'Part Number',
    itemtype: 'Item Type',
    classification: 'Classification',
    mc_weight: 'Weight',
    cost: 'Cost',
    cost_basis: 'Cost Basis',
    thumbnail: 'Thumbnail',
    weight: 'Weight',
    weight_basis: 'Weight Basis',
    effective_date: 'Effective Date',
    release_date: 'Release Date',
    config_id: 'Config ID',
  };

  const handleRowClick = (selectedItem) => {
    navigate(`/curd/${selectedItem['config_id@aras.id']}`, { state: selectedItem });
    console.log("Data to be sent: ", selectedItem);
  };

  if (!parts || !propertyNames) {
    return <div>Unable to fetch the parts</div>;
  }

  return (
    <div className="table-responsive">
      <Table striped bordered hover variant="dark">
        <thead className="thead-light">
          <tr>
            <th>{propertyLabelMapping['keyed_name']}</th> 
            {propertyNames.map(property => (
              property !== 'keyed_name' && <th key={property}>{propertyLabelMapping[property]}</th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {parts.map((item, index) => (
            <tr key={index} onClick={() => handleRowClick(item)} style={{ cursor: 'pointer' }}>
              <td>{item['config_id@aras.id']}</td> {/* Changed to config_id@aras.id */}
              {propertyNames.map(property => (
                property !== 'keyed_name' && <td key={property}>{item[property]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PartsTable;
