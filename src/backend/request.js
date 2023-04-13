import fetch from 'node-fetch';
globalThis.fetch = fetch;

const API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b"

async function getData(payload){

    let options = {
        method: 'POST',
        body: JSON.stringify(payload),
        
    };

    let response = await fetch(API_URL,options)
    let data = await response.json().then(data => console.log(data)) //JSON.stringify(response)
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

// // data.then(data => console.log(data))

// console.log(data)