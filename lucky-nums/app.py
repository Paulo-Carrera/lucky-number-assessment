from flask import Flask, render_template, request, jsonify
from forms import LuckyForm
import random
import requests

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'  # Set a secret key for Flask

colors = ['Red, Green, Orange, Blue']
year_min = 1900 
year_max = 2100

@app.route('/')
def home_page():
    """Show homepage."""
    return render_template('index.html')

@app.route('/api/get-lucky-num', methods=['POST'])
def get_lucky_num():
    """Get lucky number."""
    form = LuckyForm(data=request.json)

    if form.validate():
        # Extract validated data
        lucky_num = random.randint(1, 100)
        year = form.year.data

        # Fetch facts from numbersapi
        try:
            num_fact_response = requests.get(f"http://numbersapi.com/{lucky_num}")
            year_fact_response = requests.get(f"http://numbersapi.com/{year}/year")

            num_fact = num_fact_response.text if num_fact_response.status_code == 200 else "No fact available."
            year_fact = year_fact_response.text if year_fact_response.status_code == 200 else "No fact available."

        except requests.RequestException as e:
            num_fact = "No fact available due to a network error."
            year_fact = "No fact available due to a network error."
            print(f"Error fetching facts: {e}")

        response_data = {
            "num": {
                "fact": num_fact,
                "num": lucky_num
            },
            "year": {
                "fact": year_fact,
                "year": year
            }
        }

        return jsonify(response_data)
    else:
        errors = {field: [str(error) for error in errors] for field, errors in form.errors.items()}
        print(f"Validation errors: {errors}")
        return jsonify({'errors': errors}), 400

if __name__ == '__main__':
    app.run(debug=True)


