export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
  
      const numA = parseInt(a);
      const numB = parseInt(b);
      let result;
  
      switch (operation) {
        case "add":
          result = numA + numB;
          break;
        case "subtract":
          result = numA - numB;
          break;
        case "multiply":
          result = numA * numB;
          break;
        case "divide":
          if (numB === 0) {
            res.status(400).send("Cannot divide by zero");
            return;
          }
          result = numA / numB;
          break;
        default:
          result = "Invalid operation";
      }
  
      res.send(result.toString());
    });
  }