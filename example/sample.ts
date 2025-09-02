import { createLog, createLogConfig, writeSqlQuery } from "../src";

createLogConfig({
  logging: {
    enabled: 0,
    enableSqlQuery: 0,
  },
});

interface User {
  name: string;
  age: number;
  email: string;
}

createLog({
  title: "Users",
  message: [
    {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
    },
    {
      name: "Jane Doe",
      age: 25,
      email: "jane.doe@example.com",
    },
  ] as Array<User>,
  type: "table",
});

writeSqlQuery("query.sql", "SELECT * FROM users");
