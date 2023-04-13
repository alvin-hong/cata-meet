import fetch from 'node-fetch';
globalThis.fetch = fetch;
import test from "../data/test.json" assert { type: "json" };
// import test from '../data/test.json';

const API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b"

async function getData(payload){

    let options = {
        method: 'POST',
        body: JSON.stringify(payload),
        
    };

    let response = await fetch(API_URL,options)
    let data = await response.json().then(data => console.log(data)) 
    console.log(Math.max(data))
    return data
}

let data = getData(
    {
        "inputs": {
            "source_sentence": "Cook Out",
            "sentences": [
                "Burgers - 112313",
                "Dinner",
                "Driving"
            ]
        }
    })

// let member_data = test["members"]

// for (m_data in member_data){
//     console.log(m_data)
// }
// // data.then(data => console.log(data))

// console.log(data)