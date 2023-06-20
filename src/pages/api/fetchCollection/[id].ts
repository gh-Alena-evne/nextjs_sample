import { NextApiRequest, NextApiResponse } from 'next';
// import db from '@REST/mocks/db.json';
import { api } from '@REST/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query;

    // res.json(db.orders.collections.data[Number(id)]);
    const response = await api.get({
      endpoint: `user-collection/products/get-product-collection/${id}`,
      unsafe: true,
      headers: {
        authorization: req.headers.authorization,
        'content-type': 'application/json',
        accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
      },
    });

    const json = await response.json();
    if (!response.ok) {
      // TODO handle not ok
      res.status(response.status).json(json);
    }
    if (response.ok) {
      res.status(200).json(json);
    }
  } catch (error) {
    //TODO handle other errors
    res.status(403);
  }
}
