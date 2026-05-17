import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/posts';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0b0f14',
        color: '#f8fafc',
        padding: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top left, rgba(52,211,153,0.18), transparent 40%)',
        }}
      />

      {/* Top Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          zIndex: 1,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M12 13v8" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 3v3" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
            stroke="#34d399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div
          style={{
            fontSize: 28,
            color: '#94a3b8',
            letterSpacing: '-0.02em',
          }}
        >
          Blog
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 68,
          fontWeight: 700,
          lineHeight: 1.05,
          maxWidth: '88%',
          letterSpacing: '-0.05em',
          zIndex: 1,
        }}
      >
        {post.metadata.title}
      </div>

      {/* Footer */}
      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 24,
          color: '#64748b',
          zIndex: 1,
        }}
      >
        {/* LinkedIn */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#34d399"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>

          <span>linkedin.com/in/siddharthshringi</span>
        </div>

        {/* Website */}
        <span>siddharth-shringi.vercel.app</span>
      </div>
    </div>,
    size
  );
}
