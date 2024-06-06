import Pusher from "pusher";

const getPusher = () => {
  return {
    appId: process.env.PUSHER_APP_ID || "1796432",
    key: process.env.PUSHER_KEY || "28d7c6ea0748479af232",
    secret: process.env.PUSHER_SECRET || "cd721c43a8f63d87ee66",
    cluster: process.env.PUSHER_CLUSTER || "ap2",
  };
};

export const pusherDetails = getPusher();

export const pusher = new Pusher({
  appId: "1796432",
  key: "28d7c6ea0748479af232",
  secret: "cd721c43a8f63d87ee66",
  cluster: "ap2",
  useTLS: true,
});
