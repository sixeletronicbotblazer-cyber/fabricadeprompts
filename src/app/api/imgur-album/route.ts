import { NextResponse } from "next/server";

const ALBUM_ID = "WQDSFRP";

export async function GET() {
  try {
    const res = await fetch(`https://imgur.com/a/${ALBUM_ID}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        Accept: "text/html",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Imgur returned ${res.status}` },
        { status: 502 }
      );
    }

    const html = await res.text();

    const getMeta = (prop: string) => {
      const pattern = prop.startsWith("og:")
        ? `property="${prop}" content="([^"']+)"`
        : `name="${prop}" content="([^"']+)"`;
      const match = html.match(new RegExp(pattern, "i"));
      return match ? match[1] : null;
    };

    let videoUrl = getMeta("og:video");
    const videoType = getMeta("og:video:type");
    const imageUrl = getMeta("og:image");
    const twitterPlayer = getMeta("twitter:player:stream");

    if (!videoUrl) {
      const mp4Match = html.match(/https:\/\/i\.imgur\.com\/[a-zA-Z0-9]+\.mp4/);
      if (mp4Match) videoUrl = mp4Match[0];
    }

    let directImage = imageUrl;
    if (!directImage) {
      const imgMatch = html.match(/https:\/\/i\.imgur\.com\/[a-zA-Z0-9]+\.(jpg|png|jpeg|webp)/);
      if (imgMatch) directImage = imgMatch[0];
    }

    return NextResponse.json({
      videoUrl: videoUrl || twitterPlayer || null,
      videoType,
      imageUrl: directImage,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch album data" },
      { status: 500 }
    );
  }
}
