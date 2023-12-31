import CardWithActionButton from "./CardWithActionButton";
import { FestivalObject } from "@/types/FestivalObject";



export default function FestivalsList({ festivals } : { festivals: Array<FestivalObject>}) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[167px] mb-4">
        {
          festivals.map((f: FestivalObject) => {
            return(
              <div key={f.id}>
                <CardWithActionButton festival={f}/>
              </div>
            )
          })
        }
      </div>
    )
}