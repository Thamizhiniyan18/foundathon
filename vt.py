import sys
import requests

API_KEY = '87e122ab1051f2e0547a3d94d2aecdb619ddb13af8feeaaef83337c8a17c8c52'

SCAN_URL = 'https://www.virustotal.com/vtapi/v2/file/scan'


def main():
    # Check if the user provided a file path argument
    if len(sys.argv) != 2:
        print("Usage: python3 vt.py <file_path>")
        return

    # Extract the file path from the command-line argument
    file_path = sys.argv[1]

    try:
        with open(file_path, 'rb') as file:
            file_content = file.read()
    except FileNotFoundError:
        print("Error: File not found.")
        return

    # Define the parameters for the request
    params = {'apikey': API_KEY}

    # Make the POST request to scan the file
    response = requests.post(
        SCAN_URL, files={'file': file_content}, params=params)

    # Check the response status
    if response.status_code == 200:
        # If the request is successful, print the response JSON
        print(response.json())
    else:
        # If there's an error, print the status code and reason
        print(f'Error: {response.status_code} - {response.reason}')


if __name__ == "__main__":
    main()
