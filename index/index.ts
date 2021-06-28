import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const battlesnakeInfo = {
    apiversion: "1",
    author: "Oliver Flint",
    color: "#888888",
    head: "tongue",
    tail: "bolt",
  };
  context.res = {
    status: 200,
    statusText: "ok",
    body: JSON.stringify(battlesnakeInfo),
  } as ResponseInit;
};

export default httpTrigger;
