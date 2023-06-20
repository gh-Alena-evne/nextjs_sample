import { NextApiRequest, NextApiResponse } from 'next';
import { api } from '@REST/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await api.get({
      endpoint: `${req.headers.url}`,
      unsafe: true,
      direct: true,
      headers: {
        authorization: req.headers.authorization,
        'content-type': 'application/json',
        accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      //TODO handle not ok
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
