import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const gameData = req.body;

  const possibleMoves = ["up", "down", "left", "right"];
  const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

  console.log("MOVE: " + move);
  context.res = {
    status: 200,
    statusText: "ok",
    body: `{move: ${move}}`,
  } as ResponseInit;
};

export default httpTrigger;
