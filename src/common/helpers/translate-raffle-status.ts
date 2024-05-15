import { RaffleStatus } from "../enum/raffle-status.enum";

export default function translateRaffleStatus(status: RaffleStatus): string {
  switch (status) {
    case RaffleStatus.OPEN:
      return "Aberta";
    case RaffleStatus.FINISHED:
      return "Finalizada";
    case RaffleStatus.CANCELLED:
      return "Cancelada";
    default:
      return "Desconhecido";
  }
}
