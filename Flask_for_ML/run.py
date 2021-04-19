from flask import Flask, render_template , request
import pickle

app = Flask(__name__)


@app.route('/', methods =['GET','POST'])
def home():
    if request.method== 'POST':
        model = pickle.load(open('price_pred_model.pkl','rb'))
        user_input = request.form.get('size')
        print(user_input , type(user_input))
        user_input = float(user_input)
        prediction = model.predict([[user_input]])
        print(prediction)
    return render_template('index.html')


if __name__ =='__main__':
        app.run(debug=True)