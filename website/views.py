from flask import Blueprint,render_template,request
from flask_login import login_required, current_user
from . import db
import pickle
import numpy as np
views = Blueprint('views', __name__)



@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    return render_template("home.html", user=current_user)

def predict(values, dic):
    print("succesfully initiated predict function")
    print("VALUES IN DEF",values)
    if len(values) == 8:
        print("succesfully initiated predict function")
        model = pickle.load(open('models/diabetes.pkl','rb'))
        values = np.asarray(values)
        return model.predict(values.reshape(1, -1))[0]
    elif len(values) == 26:
        model = pickle.load(open('models/breast_cancer.pickle','rb'))
        values = np.asarray(values)
        return model.predict(values.reshape(1, -1))[0]
    elif len(values) == 13:
        model = pickle.load(open('models/heart.pkl','rb'))
        values = np.asarray(values)
        return model.predict(values.reshape(1, -1))[0]
    elif len(values) == 18:
        model = pickle.load(open('models/kidney.pkl','rb'))
        values = np.asarray(values)
        return model.predict(values.reshape(1, -1))[0]
    elif len(values) == 10:
        model = pickle.load(open('models/liver.pkl','rb'))
        values = np.asarray(values)
        return model.predict(values.reshape(1, -1))[0]

diabetes = ["Number of Pregnancies", "Glucose (mg/dL)", "Blood Pressure (mmHg)", "Skin Thickness (mm)", "Insulin Level (IU/mL)", "Body Mass Index (kg/m²)", "Diabetes Pedigree Function", "Age (years)"]

breast_cancer = ["Radius Mean", "Texture Mean", "Perimeter Mean", "Area Mean", "Smoothness Mean", "Compactness Mean", "Concavity Mean", "Concave Points Mean", "Symmetry Mean", "Mean Fractal Dimension", "Radius Error", "Texture Error", "Perimeter Error", "Area Error", "Smoothness Error", "Compactness Error", "Concavity Error", "Concave Point Error", "Symmetry Error", "Fractal Dimension Error", "Worst Radius", "Worst Texture", "Worst Perimeter", "Worst Area", "Worst Smoothness", "Worst Compactness", "Worst Concavity", "Worst Concave Points", "Worst Symmetry", "Worst Fractal Dimension"]

heart = ["Age", "Sex(Male:1, female:0)", "Chest Pain Type", "Resting Blood Pressure (mmHg)", "Serum Cholestoral (mg/dl)", "Fasting Blood Sugar 120 (mg/dl)(1 = true; 0 = false)", "Resting Electrocardiographic Results", "Maximum Heart Rate Achieved", "Exercise Induced Angina (1 = yes; 0 = no)", "ST Depression Induced by Exercise Relative to Rest", "The Slope of the Peak Exercise ST Segment", "Number of Major Vessels (0-3) Colored by Flourosopy", "3 = Normal; 6 = Fixed Defect; 7 = Reversable Defect"]


@views.route("/diabetes", methods=['GET', 'POST'])
def diabetesPage():
    return render_template('diabetes.html', user=current_user)

@views.route("/cancer", methods=['GET', 'POST'])
def cancerPage():
    return render_template('breast_cancer.html', user=current_user)

@views.route("/heart", methods=['GET', 'POST'])
def heartPage():
    return render_template('heart.html', user=current_user)

@views.route("/predict", methods = ['POST', 'GET'])
def predictPage():
    try:
        if request.method == 'POST':
            to_predict_dict = request.form.to_dict()
            to_predict_list = list(map(float, list(to_predict_dict.values())))
            print(to_predict_list,to_predict_dict)
            print(len(to_predict_list))
            pred = predict(to_predict_list, to_predict_dict)
            print("to_predict_dict",to_predict_dict)
            print("to_predict_list",to_predict_list)

    except:
        message = "Please enter valid Data"
        return render_template("home.html", message = message, user=current_user)

    return render_template('predict.html', pred = pred, values = to_predict_list, diabetes_arr = diabetes, breast_cancer_arr = breast_cancer, heart_arr = heart, user=current_user)