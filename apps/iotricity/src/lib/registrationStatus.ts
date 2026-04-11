import { event } from "../../constants";

export interface RegistrationStatus {
  closed: boolean;
  registrationEnd: string;
  serverTime: number;
}


export function getRegistrationStatus(): RegistrationStatus {
  const serverTime = Date.now();
  const targetedDate = new Date(event.registrationEnd).getTime();

  return {
    closed: serverTime >= targetedDate,
    registrationEnd: event.registrationEnd,
    serverTime,
  };
}
