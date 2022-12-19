import { Hono } from "hono";

const QUOTES = [
  {
    quote: "The only way to do great work is to love what you do.",
    by: "Steve Jobs",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    by: "Alan Kay",
  },
  {
    quote:
      "There are only two hard things in Computer Science: cache invalidation and naming things.",
    by: "Phil Karlton",
  },
];

const app = new Hono();

app.get("/", (c) => {
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  return c.json(quote);
});

export default app;
