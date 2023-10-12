import FestivalsList from "../components/FestivalsList";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/festivals`);
  
    if (!res.ok) {
      throw new Error("Error fetching data");
    }
  
    return res.json();
  }


export default async function Festivals() {
    const festivals = await getData();

    async function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    await wait(3000); 

    return (<FestivalsList festivals={festivals}/>
)
}