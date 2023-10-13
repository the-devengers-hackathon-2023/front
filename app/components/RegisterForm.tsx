"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [user, setUser]: any = useState();

  async function handleSubmit(event: any) {
    event.preventDefault();
    // TODO à enlever
    console.log(JSON.stringify(user));
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Error fetching data");
    }

    console.log("User added.");
  }
  return (
    <form
      className="flex max-w-md md:w-1/2 lg:w-1/3 flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nom2" value="Votre nom de fêtard" />
        </div>
        <TextInput
          id="nom2"
          required
          shadow
          type="text"
          onChange={(e) =>
            setUser({ ...user, name: e.target.value, roles: ["ROLE_USER"] })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Votre email" />
        </div>
        <TextInput
          id="email2"
          placeholder="moi@helloworld.com"
          required
          shadow
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Votre mot de passe" />
        </div>
        <TextInput
          id="password2"
          required
          shadow
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="flex items-center gap-2">
        {/* <Checkbox id="agree" />
        <Label className="flex" htmlFor="agree">
          <p>J'accepte </p>
          <Link
            className="text-cyan-600 hover:underline dark:text-cyan-500"
            href="/forms"
          >
            <p>les conditions d'utilisation.</p>
          </Link>
        </Label> */}
      </div>
      <Button type="submit">S'enregistrer</Button>
    </form>
  );
}
