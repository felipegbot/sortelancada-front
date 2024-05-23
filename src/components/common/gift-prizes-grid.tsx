import { UsersRaffleNumber } from "@/common/interfaces/users-raffle-number.interface";
import { Card } from "@nextui-org/card";
import { useState } from "react";
import GiftWinnerCard from "./gift-winner-card";

export default function GiftPrizesGrid({
  prizeNumbers,
  urnWinners,
}: {
  prizeNumbers: string[];
  urnWinners: UsersRaffleNumber[];
}) {
  const [showWinners, setShowWinners] = useState(false);
  const numberLength = prizeNumbers[0].length;
  const alreadyDrawn = urnWinners.map((urnWinner) =>
    urnWinner.number.toString().padStart(numberLength, "0"),
  );
  const prizeNumbersArray: { number: string; isDrawn: boolean }[] = [];
  prizeNumbers.forEach((i) => {
    prizeNumbersArray.push({
      number: i,
      isDrawn: alreadyDrawn.includes(i),
    });
  });

  return (
    <div className="bg-black/65 rounded-xl">
      <Card isBlurred className="p-8">
        <div className="text-center flex flex-col w-full">
          <div className="font-bold"> Números premiados da nossa ação.</div>
          <div>Encontrou? Ganhou 💵</div>
          <div>
            Os números em CINZA já foram encontrados por algum outro sortudo 🍀
          </div>
        </div>
        <div className="flex flex-row my-3 cursor-pointer self-center">
          <span
            className={`${showWinners ? "bg-gray-600" : "bg-green-600"} transition-colors duration-300 rounded-s-xl px-2`}
            onClick={() => setShowWinners(false)}
          >
            Números
          </span>

          <span
            className={`${showWinners ? "bg-green-600" : "bg-gray-600"} transition-colors duration-300 rounded-e-xl px-2`}
            onClick={() => setShowWinners(true)}
          >
            Ganhadores
          </span>
        </div>
        {showWinners ? (
          <div className="flex space-y-4 flex-col items-center">
            {urnWinners.map((winner: UsersRaffleNumber) => (
              <Card className="px-4 py-2 max-w-sm w-full">
                <GiftWinnerCard userRaffleNumber={winner} />
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap">
            {prizeNumbersArray.map(({ number, isDrawn }) => (
              <div
                key={number}
                className={`${isDrawn ? "bg-gray-600" : "bg-green-600"} mx-auto my-1 rounded-xl px-2 py-1`}
              >
                {number}
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
