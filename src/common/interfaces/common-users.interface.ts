import { UsersRaffleNumber } from "./users-raffle-number.interface";

export interface CommonUser {
  id: string;
  name: string;
  phone: string;
  created_at: Date;
  raffles_numbers_bought: UsersRaffleNumber[];
  updated_at: Date;
}
