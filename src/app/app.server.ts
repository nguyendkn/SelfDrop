import { Application } from "express";
import express from "express";

export default class Server {
  public static port: number = 3000;
  public application: Application;

  constructor() {
    this.application = express();
  }
}

new Server().application.listen(Server.port, () => {
  console.log(`Server is running on port: ${Server.port}`);
});
