const axios = require("axios");
const cheerio = require("cheerio");
const TelegramBot = require("node-telegram-bot-api");

const marathonUrl = process.env.MARATHON_URL;
const telegramToken = process.env.TELEGRAMTOKEN;
const chatId = process.env.CHATID;
const testId = process.env.TESTID;

const bot = new TelegramBot(telegramToken, { polling: false });

async function checkRegistrationAvailability() {
  try {
    const response = await axios.get(marathonUrl);
    const $ = cheerio.load(response.data);
    const registrationButton = $(".soldout_"); // Select elements with the 'soldout_' class

    if (registrationButton.length === 0) {
      // If the 'soldout_' class is not found, registration might be open
      const msg = `${marathonUrl} + Marathon registration might be open! Check now!`;
      bot.sendMessage(testId, msg);
    } else {
      // If the 'soldout_' class is found, registration is still closed
      // const msg = `${marathonUrl} + Registration is still closed.`;
      console.log("Registration is still closed.");
      // bot.sendMessage(testId, msg);
    }
  } catch (error) {
    console.error("Error checking registration page:", error);
  }
}

// Check every minute (60000 milliseconds)
setInterval(checkRegistrationAvailability, 10000);
