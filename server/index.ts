import { Hono } from 'hono';
import { google } from 'googleapis';
// import bodyParser from 'hono/body-parser';

const app = new Hono();
// app.use('*', bodyParser()); // Middleware for parsing JSON body

const SHEET_ID = '1jJRBPJQruotoB7zWT1npmjsULmk2oAo09AxjcGpXFEo'; // Replace with your Google Sheet ID
const SERVICE_ACCOUNT_KEY = Bun.env.GOOGLE_SERVICE_ACCOUNT_KEY; // Load service account key from .env
// console.log(JSON.parse(SERVICE_ACCOUNT_KEY || '{}'));

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(SERVICE_ACCOUNT_KEY || '{}'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

app.get('/', (c) => c.text('Hono!'))


app.post('/contact', async (c) => {
  try {
    const { name, email, message, phone } = await c.req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Append data to Google Sheets
   // Get the current data in the sheet to find the last row with data
   const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'Sheet1!A:A', // Only get the first column to check for filled rows
  });

  // Find the last row with data
  const rows = res.data.values || [];
  const lastRow = rows.length;
  const now = new Date();

  // Convert to human-readable format
  const humanReadableDate = now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true, // 12-hour format (true) or 24-hour (false)
  });
  // Append the new data to the next available row
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `Sheet1!A${lastRow + 1}`, // Append to the next available row
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[name, phone, email, message, humanReadableDate]],
    },
  });


    return c.json({ success: true, message: 'Data saved successfully!' });
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to save data' }, 500);
  }
});

export default app
console.log('Server started successfully.');
