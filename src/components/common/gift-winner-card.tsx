import { censorUsername } from "@/common/helpers/censor-username";
import { UsersRaffleNumber } from "@/common/interfaces/users-raffle-number.interface";

export default function GiftWinnerCard({
  userRaffleNumber,
}: {
  userRaffleNumber: UsersRaffleNumber;
}) {
  return (
    <div className="flex flex-row">
      <div className="p-2 ">
        <img src="/logo.svg" className="h-12 w-12" />
      </div>
      <div className="flex justify-evenly flex-col py-2 textxl">
        <span>
          {censorUsername(userRaffleNumber.common_user.name).toUpperCase()}
        </span>
        <span className="font-bold text-tiny md:text-medium">
          Com o número da sorte: 🎫
          {<span className="text-green-500">{userRaffleNumber.number}</span>}
        </span>
      </div>
    </div>
  );
}
