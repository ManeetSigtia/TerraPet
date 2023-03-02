import requests
import json

# helper function to write data to json
def write_json(file_name: str, data: dict):
    with open(file_name,"w+") as json_file:
        json.dump(dict(data), json_file, indent=4)

# helper function to read data from json
def read_json(file_name: str):
    with open(file_name) as json_file:
        return json.load(json_file)

# read the data from TERRA API's exmaple user
url = "https://api.tryterra.co/v2/daily?user_id=d30a9528-7473-444b-ad66-e067d553f56a&start_date=2023-02-01&end_date=2023-03-01&to_webhook=false&with_samples=true"

headers = {
    "accept": "application/json",
    "dev-id": "health-web-app-dev-bFtjnKGwHO",
    "x-api-key": "87341223a82c4de431e6821285f68ad0b2bdaa60cc9c20a2c1d020c6e4472586"
}

response_text = requests.get(url, headers=headers).text.replace("null","None")

# convert the responsetext into a dictionary
dic = eval(response_text)

# write the coverted dictionary onto a local file (create it if necessary)
write_json("fitness-data.json",dic)

# collect required data and store into new json file
write_data = dict()
data = read_json("fitness-data.json")
write_data['steps_walked'] = data['data'][0]['distance_data']['steps']
write_data['activity_seconds'] = data['data'][1]['active_durations_data']['activity_seconds']
write_json("data.json",write_data)

