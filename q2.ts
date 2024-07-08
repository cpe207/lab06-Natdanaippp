// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const  bbb=res.data;
    const  users=res.data.userId;

    const aaa = await axios.get(`https://jsonplaceholder.typicode.com/users/${users}`);
    //return users;
        return {
            owner:aaa.data.name,
            title:bbb.title,
            completed : bbb.completed,
        };
    }
    catch(err){
      return "INVALID TODO ID" ;
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
