from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import csv
import logging

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Load the CSV file and create a dictionary of question-response pairs
def load_responses():
    responses = {}
    try:
        with open('responses.csv', mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                question = row['question'].lower().strip()
                response = row['response'].strip()
                responses[question] = response
                logging.debug(f"Loaded question: '{question}' with response: '{response}'")
    except Exception as e:
        logging.error(f"Error loading CSV file: {e}")
    return responses

responses = load_responses()  # Load responses when the server starts

@app.route('/api/message', methods=['POST', 'OPTIONS'])  # Add OPTIONS method
def handle_message():
    try:
        if request.method == 'OPTIONS':
            # Handle preflight request
            response = jsonify({"message": "Preflight request successful"})
            response.headers.add("Access-Control-Allow-Origin", "*")
            response.headers.add("Access-Control-Allow-Headers", "Content-Type")
            response.headers.add("Access-Control-Allow-Methods", "POST")
            return response

        data = request.get_json()  # Get the JSON request
        message = data.get('message', '').lower().strip()  # Normalize input
        logging.debug(f"Received message: '{message}'")

        # Check if message exists in predefined responses
        if message in responses:
            logging.debug(f"Found response for message: '{message}'")
            return jsonify({"response": responses[message]})
        
        logging.debug(f"No response found for message: '{message}'")
        return jsonify({"response": "I'm sorry, I don't understand that question."})
    except Exception as e:
        logging.error(f"Error handling message: {e}")
        return jsonify({"response": "Sorry, something went wrong. Please try again later."})

if __name__ == '__main__':
    app.run(debug=True, port=5000)