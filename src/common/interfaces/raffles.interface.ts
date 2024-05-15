import { RaffleStatus } from "../enum/raffle-status.enum";

export interface Raffle {
  id: string;
  name: string;
  description: string;
  medias_url: string[];
  prize_name: string;
  status: RaffleStatus;
  prize_number: number;
  gift_numbers: number[];
  gift_numbers_winners: string;
  available_numbers: number[];
  available_numbers_qtd: number;
  initial_numbers_qtd: number;
  price_number: number;
  created_at: Date;
  updated_at: Date;
}
