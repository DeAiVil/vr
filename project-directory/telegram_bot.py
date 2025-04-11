import os
from dotenv import load_dotenv
import pandas as pd
import numpy as np
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, CallbackContext, CallbackQueryHandler, MessageHandler, filters
from supabase import create_client, Client

# Загружаем переменные окружения из файла .env
load_dotenv()

# Получаем переменные окружения
TELEGRAM_TOKEN = os.getenv('TELEGRAM_TOKEN')
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY')

# Инициализация клиента Supabase
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Функция для начала бронирования
async def start_booking(update: Update, context: CallbackContext):
    keyboard = [
        [InlineKeyboardButton("Бронировать", callback_data="start_booking")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Выберите опцию для бронирования.", reply_markup=reply_markup)

# Функции для сбора данных о бронировании (имя, телефон, и т.д.)
async def booking_step_1(update: Update, context: CallbackContext):
    await update.message.reply_text("Введите ваше имя:")

async def handle_name(update: Update, context: CallbackContext):
    context.user_data['name'] = update.message.text  # Сохраняем имя
    await update.message.reply_text("Введите ваш телефон:")

async def handle_phone(update: Update, context: CallbackContext):
    context.user_data['phone'] = update.message.text  # Сохраняем телефон
    await update.message.reply_text("Введите количество игроков:")

async def handle_players(update: Update, context: CallbackContext):
    context.user_data['players_count'] = int(update.message.text)  # Сохраняем количество игроков
    await update.message.reply_text("Введите количество шлемов (1-4):")

async def handle_helmets(update: Update, context: CallbackContext):
    context.user_data['helmets_count'] = int(update.message.text)  # Сохраняем количество шлемов
    await update.message.reply_text("Введите время начала бронирования (формат HH:MM):")

async def handle_time(update: Update, context: CallbackContext):
    context.user_data['start_time'] = update.message.text  # Сохраняем время начала
    await update.message.reply_text("Введите время окончания бронирования (формат HH:MM):")

async def handle_end_time(update: Update, context: CallbackContext):
    context.user_data['end_time'] = update.message.text  # Сохраняем время окончания

    # Сохраняем все данные в базу данных
    booking_data = context.user_data
    response = supabase.table('bookings').insert(booking_data).execute()

    await update.message.reply_text("Ваше бронирование успешно создано!\nСпасибо за выбор нашего клуба!")

# Стартовое меню
async def start(update: Update, context: CallbackContext):
    keyboard = [
        [
            InlineKeyboardButton("Информация о клубе", web_app=WebAppInfo(url="https://legendary-lollipop-09c3c1.netlify.app/")),
            InlineKeyboardButton("Подобрать игру", web_app=WebAppInfo(url="https://yourdomain.com/booking")),
        ],
        [
            InlineKeyboardButton("Каталог игр", web_app=WebAppInfo(url="https://yourdomain.com/catalog")),
            InlineKeyboardButton("Цены", callback_data="prices"),
        ],
        [
            InlineKeyboardButton("Связаться с администратором", callback_data="contact"),
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Добро пожаловать в клуб виртуальной реальности!", reply_markup=reply_markup)

# Обработчики для кнопок (Цены и Контакт)
async def prices(update: Update, context: CallbackContext):
    await update.callback_query.answer(text="Обрабатываю запрос...")
    await update.callback_query.edit_message_text("Цены на наши услуги:\n- 1 час игры: 500 рублей\n- 2 часа игры: 900 рублей")

async def contact(update: Update, context: CallbackContext):
    await update.callback_query.answer()
    await update.callback_query.edit_message_text("Вы можете связаться с администратором по номеру: +7 123 456 78 90")

# Добавление обработчиков в основной код
application = Application.builder().token(TELEGRAM_TOKEN).build()

application.add_handler(CallbackQueryHandler(prices, pattern="prices"))
application.add_handler(CallbackQueryHandler(contact, pattern="contact"))
application.add_handler(CommandHandler("start", start))
application.add_handler(CommandHandler("start_booking", booking_step_1))  # Бронирование
application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_name))  # Обработка имени
application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_phone))  # Обработка телефона
application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_players))  # Обработка игроков
application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_helmets))  # Обработка шлемов
application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_time))  # Обработка времени начала
application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_end_time))  # Обработка времени окончания

# Запуск бота
def run_bot():
    application.run_polling()
