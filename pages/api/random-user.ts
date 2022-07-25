import { NextApiHandler } from 'next';
import { parseNumber } from '~/lib/query-lib';
import { getRandomUsers } from '~/lib/random-user';

// Cache API response to keep values static, whilst revalidating every minute
const CACHE_CONTROL_VALUES = 'public, s-maxage=10, stale-while-revalidate=59';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const {results } = req.query;
      const users = await getRandomUsers({
        results: parseNumber(results),
      });

      res.setHeader('Cache-Control', CACHE_CONTROL_VALUES);

      if (users.results.length) {
        return res.status(200).json(users);
      } else {
        return res.status(200).json({ results: [] });
      }
    } catch (err: unknown) {
      return res.status(200).json({ results: [] });
    }
  }

  return res.status(404).json({ error: 'Page not found' });
};

export default handler;
