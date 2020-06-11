// async function createAuction(event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: 'Hello from https://codingly.io' }),
//   };
// }

const createAuction = async (event, context) => {
  const { title } = JSON.parse(event.body);
  const now = new Date();

  const auction = {
    title,
    status: "OPEN",
    createdAt: now.toISOString(),
  };

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
};

export const handler = createAuction;
