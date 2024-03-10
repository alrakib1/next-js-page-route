import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";
import Head from "next/head";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Head>
        <title>Next Event</title>
      </Head>
      
      <EventList items={featuredEvents} />
    </>
  );
}
