import { courses } from '@/lib/courses';
import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  return [
    { url: `${SITE_URL}/` },
    ...courses.map(({ slug }) => ({ url: `${SITE_URL}/courses/${slug}` })),
  ];
}
