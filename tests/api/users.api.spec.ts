import {test,expect, APIResponse} from '@playwright/test';
import { request } from 'node:http';

//to supply token
let AUTH_TOKEN = {
    Autorization : 'Bearer 1d845aa4beb'
};


test('get all users api test', async({request})=>
{//reqest destructured has all calls like get put delete post
    //get need full url and token supplied in form of objectas 2nd parameter
    //get call hit the url with bearer token and give response back


     let response : APIResponse= await request.get('https://gorest.co.in/public/v2/users',{
        headers:AUTH_TOKEN
    });

    console.log(response); // full data dispalyed

    //to fetch spec info, use json which return a promise
    let jsonBody = await response.json();
    console.log(jsonBody);

    //to get status
    console.log(response.status());  //200

    //to get status text
    console.log(response.statusText());

    //assertion
    expect(response.status()).toBe(200);
});


//post API , to create  anew user


test('create a new user', async({request})=>
{
//js object
let userData = {
    name : 'manju',
    email : `automation_${Date.now()}.@opencart.com`,  //random email based on date and timestamp
    gender : 'female',
    status : 'active'
}
//js obj to json called seria lization but this conversion happend internaly

//now,

     let response : APIResponse= await request.post('https://gorest.co.in/public/v2/users',{
        headers:AUTH_TOKEN,
        data:userData

     });

     let jsonBody = await response.json()
     console.log(jsonBody);

//to get status
    console.log(response.status());  //201

    //to get status text
    console.log(response.statusText());

    //assertion
    expect(response.status()).toBe(201);
    });



    //update a user

    test('update a user', async({request})=>
    {

    //js object
let userData = {
    name : 'manju',
    email : 'manju@abcv.com',
    gender : 'female',
    status : 'active'
}

let response : APIResponse= await request.put('https://gorest.co.in/public/v2/users/8616224',{
        headers:AUTH_TOKEN,
        data:userData
 });
    
 let jsonBody = await response.json()
     console.log(jsonBody);

//to get status
    console.log(response.status());  //200

    //to get status text
    console.log(response.statusText());

    //assertion
    expect(response.status()).toBe(200);    
    
    });


    //delete the user


    test('Delete a user', async({request})=>
    {


let response : APIResponse= await request.delete('https://gorest.co.in/public/v2/users/8616224',{
        headers:AUTH_TOKEN
    
 });
    
 

//to get status
    console.log(response.status());  //204

    //to get status text
    console.log(response.statusText());

    //assertion
    expect(response.status()).toBe(204);    
    
    });
    