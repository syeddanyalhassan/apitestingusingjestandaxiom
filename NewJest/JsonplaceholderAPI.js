const axios=require('axios');

const newfunctions = {
    fetchuser : ()=> axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err=>error),
    fetchseconduser : ()=>axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(res=>res.data)
    .catch(err=>error),
    fetch100thuser : ()=>axios.get('https://jsonplaceholder.typicode.com/users/1/empty')
    .then(res=>res.data)
    .catch(err=>error)
};

module.exports=newfunctions;