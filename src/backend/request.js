import fetch from 'node-fetch';
globalThis.fetch = fetch;
import test from "../data/test.json" assert { type: "json" };


const API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b"

async function getData(payload){

    let options = {
        method: 'POST',
        headers : {"Authorization": "Bearer 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"},
        body: JSON.stringify(payload),
        
    };

    let max_val;

    let response = await fetch(API_URL,options)
    let data = await response.json().then(data => {
        console.log(data);
        console.log(Math.max(...data));
        max_val = Math.max(...data);
        return max_val
    })
    // return await max_val
}


let member_data = test["members"]



function getMatches(input){



    for (let i in member_data){
        console.log(member_data[i])
        let name = member_data[i]["name"]
        let phone = member_data[i]["number"]
        let interests = member_data[i]["interests"]
    
        let data = getData(
        {
            "inputs": {
                "source_sentence": input,
                "sentences": interests
            }
        })


        // let max = Math.max(...data);
        // console.log('name: ' + name + ' phone: ' + phone + '\n')
        // console.log(data)
        

    }



}

function sortTopMatches(array){
    
}

getMatches("Cook Out")

// let arr = [0.32,0.3742623,0.887838]
// console.log(Math.max(...arr))

// data.then(data => console.log(data))

// console.log(data)