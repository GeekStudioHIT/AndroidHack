from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def post():
    uid = request.form['uid']
    name = request.form['name']
    print('uid: %s, name: %s' % (uid, name))
    return 'OK.'

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)