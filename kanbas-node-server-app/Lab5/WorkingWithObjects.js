const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  app.put("/lab5/assignment/score", (req, res) => {
    const { score } = req.body;
    if (score !== undefined) {
      assignment.score = parseInt(score, 10);
      res.json(assignment);
    } else {
      res.status(400).send("Score is required");
    }
  });

  app.put("/lab5/assignment/completed", (req, res) => {
    const { completed } = req.body;
    if (completed !== undefined) {
      assignment.completed = completed === "true";
      res.json(assignment);
    } else {
      res.status(400).send("Completed is required");
    }
  });
}