from flask import Flask, jsonify, request
import json
import pickle


from numpy.core.arrayprint import printoptions

import numpy as np
import pickle
from flask_cors import CORS
from flask import jsonify
from flask import request,json

def load_models():
    file_name = "F:\Flask_for_ML\model_file.p"
    with open(file_name, 'rb') as pickled:
        data = pickle.load(pickled)
        model = data['model']
    return model

app = Flask(__name__)


@app.route('/predict', methods=['GET'])
def predict():
    # stub input features
    # request_json = request.get_json()
    # x = request_json['input']

    ata_in=[1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    
    x_in =np.array(ata_in).reshape(1,-1)
    # load model
    model = load_models()
    prediction = model.predict(x_in)[0]
    # response = json.dumps({'response': prediction})
    response = json.dumps([{"id": 1,
    "response": prediction}])
    
    return response


if __name__ =='__main__':
        app.run(debug=True)