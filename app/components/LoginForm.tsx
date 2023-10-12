"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export default function LoginForm() {
  const [user, setUser]: any = useState();

  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(user);
  }

  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Votre email" />
        </div>
        <TextInput
          id="email1"
          placeholder="moi@helloworld.com"
          required
          type="email"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Votre mot de passe" />
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
        <Label htmlFor="remember">Se souvenir de moi</Label>
      </div>
      <Button type="submit">Envoyer</Button>
    </form>
  );
}
