"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function LoginForm() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(user);
    try {
      const response = await fetch(
        "https://hackaton-test.fanteam.fr/api/books",
        {
          method: "GET",
          body: JSON.stringify(user),
          // headers: {
          //   authorization:
          //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTcxMDI3ODAsImV4cCI6MTY5NzEwNjM4MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFwaS5jb20ifQ.ViyN7YQUH1ekZvL3Gvyho28IT9ILlC4b3-yN4CRVaGtXQticNZDotvlPNsKzBwVWQY2ZSCsQzlMPrROW_Kr6Sc3pMgHSE9Pey00B4oSqEY880PUMdX0PIyID8QReOsv8t0OZQn8e7UELcGG9HzQV4rQLLA1Yy3u5mTVWFd1H4mnEywZfPQpDNvghXFw_WKLGu-rjI6NAUY4d9BTgkCtr-6-zm2HA7y8c7-w_JK-XNcIhzXEXJ_fP54-PxRlW9ZkaPfkV-uujGYw8xBMKH7P82GKt3Hb2j4h1tZszH0qd_klM1ajrarawW7v2J2KXPGXOED_PE2FSBtRPXNvWtgA6mWMw4EWe4_J0Q2WYHFBeMvyx68rAJTpoUqgB1mTeJJzEi5FYH1rSvt4t1QqhQ3JuEe1tFac9arqTnIhv0ONnXv5HP0Ubh6_zOWKQhGrK04AY_e0jX8MFGT8Nhmk8flCKEgHRt1Wxw-wmiHj58cZJWyCBxaFHETk3XRRrwvk50WwtBv3yFhvK3YWCcBusHLutD5GOp27Epdp1LqV7KXYBS7XLS6wwCoB1llvMrdHuOqrg5qB3ZsO7SHj35tmPy9fcJXLRzIcYp16ITO9p84wgx3HmbEeHJ7XYiN21JyGRkwdaoMJM4NfuEct_N9tDP9f48rimcVCwo_g6Ijs9Ka8U4g0",
          //   "Content-Type": "application/json",
          // },
        }
      );
      const data = await response.json();
      console.log(response, data);
    } catch (error) {
      console.log(error);
    }
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
