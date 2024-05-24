import { censorUsername } from "@/common/helpers/censor-username";
import { UsersRaffleNumber } from "@/common/interfaces/users-raffle-number.interface";

export default function GiftWinnerCard({
  userRaffleNumber,
  censor = true,
}: {
  userRaffleNumber: UsersRaffleNumber;
  censor?: boolean;
}) {
  return (
    <div className="flex flex-row">
      <div className="p-2 ">
        <img src="/logo.svg" className="h-12 w-12" />
      </div>
      <div className="flex justify-evenly flex-col py-2 textxl">
        <span>
          {censor
            ? censorUsername(userRaffleNumber.common_user.name).toUpperCase()
            : userRaffleNumber.common_user.name.toUpperCase()}
        </span>
        <span className="font-bold md:text-medium">
          Com o número da sorte: 🎫
          {<span className="text-green-500">{userRaffleNumber.number}</span>}
        </span>
        {!censor && (
          <span>
            Telefone para contato: {userRaffleNumber.common_user?.phone}
          </span>
        )}
      </div>
    </div>
  );
}
