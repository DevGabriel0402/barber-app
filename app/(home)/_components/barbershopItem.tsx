import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {



    return (  

        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="p-0">
                <div className="p-1 relative">
                <div className="absolute top-2 left-2">
                <Badge variant='secondary' className="gap-1 flex opacity-80 items-center">
                            <StarIcon size={12} className="fill-primary text-primary"/>
                            <span className="text-sm font-normal">5,0</span>
                    </Badge>
                </div>
                <Image 
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-[159px] w-full object-cover rounded-2xl"

                    src={barbershop.imageUrl} alt={barbershop.name}
                />
                </div>
                <div className="px-3 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                     <Button variant='secondary' className="w-full mt-3" >Reservar</Button>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default BarbershopItem;