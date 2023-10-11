"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { stringify } from "querystring";
import { useState } from "react";

export default function DefaultForm() {
  const [user, setUser]: any = useState();

  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(user);
    try {
      const response = await fetch(
        "https://hackaton-test.fanteam.fr/api/login_check",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );
      const data = await response.json();
      console.log(response, data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          required
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
