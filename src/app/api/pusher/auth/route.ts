import { pusher } from "@/lib/pusher";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
const formDataEntries = formData.entries();
    const { socket_id, channel_name, username } = Object.fromEntries(formDataEntries);
    const randomString = Math.random().toString(36).slice(2);

    const presenceData = {
      user_id: randomString,
      user_info: {
        username: "@" + username,
      },
    };

    const socketId = socket_id.toString();
    const channelName = channel_name.toString();
    const auth = pusher.authorizeChannel(socketId, channelName, presenceData);
    return new Response(JSON.stringify(auth), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("something is wrong", { status: 500 });
  }
}

export async function GET() {
 try {
    // You can add any logic you need here, e.g., fetching data from a database.
    const message = "Hello, this is a GET request!";
    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
