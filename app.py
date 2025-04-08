from flask import Flask, send_from_directory
import os
import threading
from telegram_bot import run_bot  # если в той же папке

app = Flask(__name__)

# Путь к WebApp
WEBAPP_FOLDER = os.path.join(os.path.dirname(__file__), 'Web Appps')

@app.route('/')
def home():
    return send_from_directory(os.path.join(WEBAPP_FOLDER, 'Club'), 'info.html')

@app.route('/booking')
def booking():
    return send_from_directory(os.path.join(WEBAPP_FOLDER, 'Booking'), 'index.html')

@app.route('/admin')
def admin():
    return send_from_directory(os.path.join(WEBAPP_FOLDER, 'Booking'), 'admin.html')

@app.route('/catalog')
def catalog():
    return send_from_directory(os.path.join(WEBAPP_FOLDER, 'Game Catalog'), 'catalog.html')

# Для загрузки статических файлов (JS/CSS)
@app.route('/static/<folder>/<path:filename>')
def static_files(folder, filename):
    return send_from_directory(os.path.join(WEBAPP_FOLDER, folder), filename)

# Запуск Telegram-бота
def start_bot():
    run_bot()

if __name__ == '__main__':
    threading.Thread(target=start_bot).start()
    app.run(host='0.0.0.0', port=10000)
