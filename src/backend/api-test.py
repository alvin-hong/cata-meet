import json
import requests

API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b"
headers = {"Authorization": f"Bearer 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"}

def query(payload):
    response = requests.post(API_URL, headers = headers, json=payload)
    return response.json()

data = query(
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
## [0.853, 0.981, 0.655]

print(data)
