import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PartsTable = ({ parts, propertyNames }) => {

  // const history = useHistory();
  const navigate = useNavigate();

  const propertyLabelMapping = {
    created_on: 'Created_On',
    'current_state@aras.name': 'Current_State',
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
    name: 'name',
    new_version: 'new_version',
    not_lockable: 'Not Lockable',
    state: 'State',
    unit: 'Unit',
    item_number: 'Part Number',
    itemtype: 'item_type_id',
    classification: 'Type',
    mc_weight: 'Weight',
    cost: 'Cost',
    cost_basis: 'Cost Basis',
    thumbnail: 'Thumbnail',
    weight: 'Weight',
    weight_basis: 'Weight Basis',
    effective_date: 'Effective Date',
    release_date: 'Release Date',
  };

  const handleRowClick = (selectedItem) => {
    // debugger;
    navigate(`/curd/${selectedItem.keyed_name}`, { state: selectedItem });
    console.log("data to be send ",selectedItem);
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
          <tr key={index} onClick={() => handleRowClick(item)} style={{cursor: 'pointer'}}>
              {/* debugger; */}
              {/* console.log("data transfer to another component ",selectedItem); */}
              <td>{item['keyed_name']}</td> 
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
