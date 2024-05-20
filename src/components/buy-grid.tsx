import { Raffle } from "@/common/interfaces/raffles.interface";
import { InputMask } from "@react-input/mask";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

export default function BuyGrid({ raffle }: { raffle: Raffle }) {
  const options = [1, 5, 10, 50];
  const [quantity, setQuantity] = useState(raffle.min_quantity);

  const handleQuantityChange = (value: number) => {
    if (value > 99999) return;
    setQuantity(value);
  };

  const handleInputQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseInt(e.target.value);
    handleQuantityChange(isNaN(value) ? 0 : value);
  };

  return (
    <div className="bg-black/65 rounded-xl">
      <Card isBlurred className="p-8 space-y-4">
        <span className="text-xl text-center">
          Adicione quantidades fixas ou uma por uma se preferir!
        </span>
        <span className="text-tiny text-center uppercase">
          é possível comprar de {raffle.min_quantity} até 99999 cotas por vez
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {options.map((option) => (
            <Button
              key={option}
              variant="solid"
              className="flex bg-black p-6 text-white rounded-2xl m-2 flex-col items-center justify-center space-y-2"
              onClick={() => handleQuantityChange(option + quantity)}
            >
              <span className="font-bold">
                + {option} cota{option > 1 ? "s" : ""}
              </span>
            </Button>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <span>Você está comprando</span>
          <div className="w-full flex flex-row mt-4 mb-6 space-x-2 items-center">
            <CircleMinus
              className="cursor-pointer h-full w-12"
              onClick={() => handleQuantityChange(quantity - 1)}
            />
            <InputMask
              value={quantity}
              onChange={handleInputQuantityChange}
              mask="_____"
              showMask={false}
              className="bg-green-800 w-full py-2 rounded-xl text-center text-xl"
              replacement={{ _: /\d/ }}
            />
            <CirclePlus
              className="cursor-pointer h-full w-12"
              onClick={() => handleQuantityChange(quantity + 1)}
            />
          </div>
          <Button variant="ghost" color="success">
            Finalizar Compra!
          </Button>
        </div>
      </Card>
    </div>
  );
}
