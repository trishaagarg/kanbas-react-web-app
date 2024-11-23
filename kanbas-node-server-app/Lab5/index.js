import PathParameters from './PathParameters.js';
import QueryParameters from './QueryParameters.js';
import WorkingWithObjects from './WorkingWithObjects.js';
import WorkingWithArrays from './WorkingWithArrays.js';

export default function Lab5(app) {
  const module = {
    id: "1",
    name: "React Basics",
    description: "Introduction to React.js",
    course: "Web Development",
  };

  const assignment = {
    id: "1",
    name: "Module 1 Assignment",
    score: 85,
    completed: false,
  };

  app.get('/lab5/welcome', (req, res) => {
    res.send('Welcome to Lab 5');
  });

  app.get('/lab5/module', (req, res) => res.json(module));
  app.get('/lab5/module/name', (req, res) => res.json({ name: module.name }));
  app.put('/lab5/module/name', (req, res) => {
    const { name } = req.body;
    if (name) {
      module.name = name;
      res.json(module);
    } else {
      res.status(400).send("Name is required");
    }
  });

  app.put('/lab5/module/description', (req, res) => {
    const { description } = req.body;
    if (description) {
      module.description = description;
      res.json(module);
    } else {
      res.status(400).send("Description is required");
    }
  });

  app.put('/lab5/assignment/score', (req, res) => {
    const { score } = req.body;
    if (score !== undefined) {
      assignment.score = parseInt(score, 10);
      res.json(assignment);
    } else {
      res.status(400).send("Score is required");
    }
  });

  app.put('/lab5/assignment/completed', (req, res) => {
    const { completed } = req.body;
    if (completed !== undefined) {
      assignment.completed = completed === "true";
      res.json(assignment);
    } else {
      res.status(400).send("Completed is required");
    }
  });

  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);
}