// Externals
import { join } from "path";

// Internals
import { LogType } from "../src";

export const logsPath = join(__dirname, "logs.json");

export const setUpConsoleSpy = (type?: LogType) => {
  let spy: jest.SpyInstance;

  if (type === "warn") {
    spy = jest.spyOn(global.console, "warn").mockImplementation();
  } else if (type === "error") {
    spy = jest.spyOn(global.console, "error").mockImplementation();
  } else {
    spy = jest.spyOn(global.console, "log").mockImplementation();
  }

  return spy;
};