"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [user, setUser]: any = useState();

  async function handleSubmit(event: any) {
    event.preventDefault();
    // TODO à enlever
    console.log(user);
    const res = await fetch(`https://hackathon.fanteam.fr/api/login_check`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Error fetching data");
    }

    // return res.json();
    console.log(res.json());
  }

  return (
    <form
      className="flex max-w-md md:w-1/2 lg:w-1/3 flex-col gap-4"
      onSubmit={handleSubmit}
    >
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
      <div className="flex py-6">
        <p className="dark:text-white">Pas de compte ? </p>
        <Link
          className="text-cyan-600 hover:underline dark:text-cyan-500"
          href="/register"
        >
          <p>Enregistrez-vous !</p>
        </Link>
      </div>
    </form>
  );
}
