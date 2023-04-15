import json
import requests

with open('./src/backend/test.json', 'r') as f:
    test_data = json.load(f)


API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b"
headers = {"Authorization": f"Bearer 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"}

def query(payload):
    response = requests.post(API_URL, headers = headers, json=payload)
    data = response.json()
    return data


member_data = test_data["members"]

def getMatches(input):

    top_matches = []

    for member in member_data:
        name = member["name"]
        phone = member["number"]
        interests = member["interests"]

        data = query(
            {
                "inputs": {
                    "source_sentence": input,
                    "sentences": interests
                }
            })

        max_val = max(data)
        current = (max_val, name, phone, interests)
        top_matches = isTopMatch(top_matches, current)

    return top_matches

def isTopMatch(top, member):
    top.append(member)
    if len(top) > 3:
        top.sort(key=lambda t: t[0])
        top.pop()
    
    return top

def print_matches(matches):
    print("Top Matches:")
    print()

    for match in matches:
        print(match[1] + " with a matching score of: " + str(match[0]))
        print("Contact: " + match[2])
        print("Interests: " + str(match[3]))
        print()

top = getMatches("Cook Out")
print_matches(top)
