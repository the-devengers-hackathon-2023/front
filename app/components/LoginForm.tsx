"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function LoginForm() {
  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Votre email" />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Votre mot de passe" />
        </div>
        <TextInput id="password1" required type="password" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Se souvenir de moi</Label>
      </div>
      <Button type="submit">Envoyer</Button>
    </form>
  );
}
