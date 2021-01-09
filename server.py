from flask import Flask, render_template,abort,url_for,request
import csv
app = Flask(__name__)
print(__name__)

@app.route('/')
def hello_world():
    return render_template("homehome.html")

@app.route('/homehome.html')
def home_page():
    return render_template("homehome.html")

@app.route('/projects.html')
def projects_page():
    return render_template("projects.html")


@app.route('/gallery.html')
def gallery_page():
    return render_template("gallery.html")


@app.route('/education.html')
def education_page():
    return render_template("education.html")
    
