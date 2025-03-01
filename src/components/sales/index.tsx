import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos Clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4"/>
                </div>
            <CardDescription>
                Novos clientes nas últimas 24 hoas
            </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://img.freepik.com/vetores-gratis/circulo-azul-com-usuario-branco_78370-4707.jpg?t=st=1740788652~exp=1740792252~hmac=7985385bc04f28c428488d519521ea5da71783be57b31569f94ad15c54c82d47&w=740"/>
                    <AvatarFallback>JV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Cliente 1</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">cliente1@email.com</span>
                    </div>

                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://img.freepik.com/vetores-gratis/circulo-azul-com-usuario-branco_78370-4707.jpg?t=st=1740788652~exp=1740792252~hmac=7985385bc04f28c428488d519521ea5da71783be57b31569f94ad15c54c82d47&w=740"/>
                    <AvatarFallback>JV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Cliente 2</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">cliente2@email.com</span>
                    </div>

                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://img.freepik.com/vetores-gratis/circulo-azul-com-usuario-branco_78370-4707.jpg?t=st=1740788652~exp=1740792252~hmac=7985385bc04f28c428488d519521ea5da71783be57b31569f94ad15c54c82d47&w=740"/>
                    <AvatarFallback>JV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Cliente 3</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">cliente3@email.com</span>
                    </div>

                </article>
            </CardContent>
        </Card>
    );
}