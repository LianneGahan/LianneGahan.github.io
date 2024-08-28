from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/')
def home():
    return "Welcome to the Flask backend!"

# Endpoint to handle simulation requests
@app.route('/api/run-simulation', methods=['POST'])
def run_simulation():
    data = request.json

    # Extract bonds, sgRatio, and dp from the request
    bonds = data.get('bonds', {})
    sg_ratio = data.get('sgRatio', 0)
    dp = data.get('dp', '')

    # Here you would run your simulation logic using the provided data
    # For demonstration, we just return a dummy image URL

    # Dummy response
    response = {
        'imageUrl': 'https://via.placeholder.com/150',  # Replace with actual logic
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
