import { NextResponse } from "next/server";
import publicEvents from "@/data/public-events.json";
import futureEvents from "@/data/future-events.json";

export function GET() {
  return NextResponse.json({
    futureEvents: futureEvents.map(({ id }) => ({ id })),
    ongoingEvents: publicEvents.ongoingEvents,
    pastEvents: publicEvents.pastEvents,
  });
}