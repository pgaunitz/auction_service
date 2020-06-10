// async function createAuction(event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: 'Hello from https://codingly.io' }),
//   };
// }

const createAuction = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ event, context }),
  };
}

export const handler = createAuction;


