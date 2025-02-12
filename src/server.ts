import app from './app.js';

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log(`Server running at ${port} closed`);

    process.exit();
  });
});
