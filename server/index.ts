import { Hono } from 'hono';
import { google } from 'googleapis';
import { handle } from 'hono/vercel';  // Import the Vercel-specific handler

const app = new Hono().basePath('/api');

const SHEET_ID = '1jJRBPJQruotoB7zWT1npmjsULmk2oAo09AxjcGpXFEo'; // Replace with your Google Sheet ID
const SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY; // Load service account key from .env

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(SERVICE_ACCOUNT_KEY || '{}'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow all methods
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

  if (c.req.method === 'OPTIONS') {
    c.json({}, 200);
    return;
  }

  await next();
});

app.get('/', (c) => {
  return c.json({ message: "Congrats! You've deployed Hono to Vercel" });
});

app.post('/contact', async (c) => {
  try {
    const { name, email, message, phone } = await c.req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Get current data in the sheet to find the last row with data
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:A', // Get the first column to check for filled rows
    });

    const rows = res.data.values || [];
    const lastRow = rows.length; // Last filled row

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
      hour12: true, // 12-hour format
    });

    // Append new data to the next available row
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
    console.error('Error saving data to Google Sheets:', error);
    return c.json({ error: 'Failed to save data' }, 500);
  }
});

// Vercel needs the handler to be exported, use `handle()` to wrap the app.
const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;