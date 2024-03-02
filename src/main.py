from flask import Flask, render_template

app = Flask(__name__, static_folder="../assets", template_folder="../templates")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/play")
def play():
    return render_template("video.html")

@app.route("/login")
def login():
    return render_template("login.html")