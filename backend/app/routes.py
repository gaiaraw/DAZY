from flask import render_template

from app import app

@app.route('/')
@app.route('/index.html')
def home():
    return render_template("index.html")

@app.route('/about.html')
def about():
    return render_template("about.html")
 