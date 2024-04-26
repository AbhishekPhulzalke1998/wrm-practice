import React from 'react';
import axios from 'axios';

const  GetItem =  async () => {
    const baseUrl = 'http://localhost/InnovatorServer22/server/odata/Part(\'4AC554FF87564361BDD1AAB1DCFC9052\')?$select=item_number,name,description,classification,keyed_name';
    const token = localStorage.getItem('token');
debugger;
          try{
              const response = await axios.get(baseUrl,{
                headers: { 'Authorization': `Bearer ${token}` }
              })
              console.log("response to be get in console :",response);
              
     return response.data
          }catch (error) {
            console.error(error);
          }

     

};

export default GetItem;
