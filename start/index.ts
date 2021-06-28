import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const gameData = req.body;
  console.log("START");
  context.res = { status: 200, statusText: "ok" } as ResponseInit;
};

export default httpTrigger;
