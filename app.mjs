// Libraries
import express from 'express';

// Configuration and Instantiation
const app = express();
const port = process.env.PORT || 3000;

// Server Endpoints
app.get('/', (req, res) => {
    res.status(200).send("This is The Yay Company API! It stores data and makes things not possible on the client, possible!")
});

app.get('/xmas', (req, res) => {
    const christmas = new Date('December 25, 2024 00:00:00');
    const dec20th = new Date('December 20, 2024 00:00:00');
    const now = new Date();

    const getDaysHoursMinutesSeconds = (endDate) => {
        const diffMs = Math.max(endDate - new Date(), 0);
        const days = Math.floor(diffMs / 86400000);
        const hours = Math.floor((diffMs % 86400000) / 3600000);
        const minutes = Math.floor((diffMs % 3600000) / 60000);
        const seconds = Math.floor((diffMs % 60000) / 1000);
        return { days, hours, minutes, seconds };
    };

    const christmasCountdown = getDaysHoursMinutesSeconds(christmas);
    const dec20thCountdown = getDaysHoursMinutesSeconds(dec20th);

    res.status(200).json({
        christmas: christmasCountdown,
        dec20th: dec20thCountdown
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});