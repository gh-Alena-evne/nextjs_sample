import { NextApiRequest, NextApiResponse } from 'next';
import { api } from '@REST/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await api.put({
      endpoint: `authorize/change-user-info`,
      unsafe: true,
      headers: {
        authorization: req.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const json = await response.json();

    if (!response.ok) {
      //TODO handle not ok
      res.status(response.status).json(json);
    }

    if (response.ok) {
      res.status(200).json(json.message);
    }
  } catch (error) {
    //TODO handle other errors
    res.status(500);
  }
}
