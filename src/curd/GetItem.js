import React from 'react';
import axios from 'axios';

const  GetItem =  async () => {
    const baseUrl = 'http://localhost/InnovatorServer22/server/odata/Part(\'B4C77048157C4A87BEA616DBB1CF103F\')?$select=item_number,name,description,classification,keyed_name';
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
