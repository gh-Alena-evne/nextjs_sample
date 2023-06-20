import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const imageSrc = `${process.env.NEXT_PUBLIC_IMAGE_URL_SMALL}/${req.query.name}`;
  const fetchRes = await fetch(imageSrc);
  const buffer = Buffer.from(await fetchRes.arrayBuffer());
  res.setHeader('Content-Type', 'image/jpeg');
  res.status(200).send(buffer);
}
