# Marathon Check Bot

## Introduction

Marathon Check Bot is a specialized tool designed to monitor the availability of applications. It periodically checks the status of your application and sends alerts through Telegram messaging if any issues are detected. This ensures timely response to potential downtime or service disruptions.

## Features

- **Application Monitoring**: Continuously checks the availability of the specified application.
- **Telegram Alerts**: Sends notifications through Telegram in case of any issues.
- **Easy Management with PM2**: Utilizes PM2 process manager for easy start, stop, and monitoring of the bot.

## Installation and Setup

To get started with Marathon Check Bot, you need to have Node.js and PM2 installed on your system.

1. **Clone the repository**:

   ```
   git clone https://github.com/your-repository/marathon_check_bot.git
   cd marathon_check_bot
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Configure the bot** (refer to the Configuration section below).

## Usage Instructions

Marathon Check Bot is managed via PM2, making it straightforward to start, stop, and monitor the application.

- **Start the bot**:

  ```
  pm2 start index.js
  ```

- **View logs**:

  ```
  pm2 logs
  ```

- **List PM2 processes**:

  ```
  pm2 list
  ```

- **Stop the bot**:

  ```
  pm2 stop index.js
  ```

- **Restart the bot**:
  ```
  pm2 restart index.js
  ```

## Configuration

Configure the bot by editing the `config.json` file. You need to set the application URL to monitor and your Telegram Bot API details.

## Troubleshooting and Common Issues

If you encounter any issues, first check the PM2 logs with `pm2 logs`. Common problems might include network issues, incorrect configuration settings, or issues with the Telegram API.
