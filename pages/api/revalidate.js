// Note can only test in production mode and only for getStaticProps()
// $ npm run build && npm run start
// Then visit:
// https://<your-site.com>/api/revalidate?secret=<token>&id=<post_id>

export default async function handler(req, res) {
    const query = req.query;
    const { id, secret } = query;

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  
    try {
      // This should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      await res.revalidate(`/post/${id}`);
      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating');
    }
  }
  