import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TikTok Shop Motion Prompts | Guias práticos + prompts prontos para vídeos UGC com IA",
  description:
    "Crie vídeos de roupas para TikTok Shop com modelos IA usando prompts prontos. InfoApp simples, acesso imediato por R$ 17,90.",
  keywords: [
    "TikTok Shop",
    "UGC",
    "modelos IA",
    "prompts prontos",
    "vídeos de roupa",
    "criação de conteúdo",
    "afiliados TikTok",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "TikTok Shop Motion Prompts",
    description:
      "Crie vídeos de roupas para TikTok Shop com modelos IA usando prompts prontos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3077945205929982');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=3077945205929982&ev=PageView&noscript=1" alt="" />
        </noscript>
        {/* TikTok Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};ttq.load('D96MDM3C77U79CKERS80');ttq.page();}(window, document, 'ttq');`,
          }}
        />
        {/* UTMify */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        />
        {/* UTMify Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.pixelId="6a51310fe21f6923f70dd7e6";var a=document.createElement("script");a.setAttribute("async","");a.setAttribute("defer","");a.setAttribute("src","https://cdn.utmify.com.br/scripts/pixel/pixel.js");document.head.appendChild(a);`,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "y7nwclyic4");`,
          }}
        />
        {/* Pixel tracking helper */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.trackCheckout = function(plan, value) {
  if (typeof fbq === 'function') {
    fbq('track', 'InitiateCheckout', {content_name: plan, currency: 'BRL', value: value});
  }
  if (typeof ttq !== 'undefined' && ttq.track) {
    ttq.track('ClickButton', {contents: [{content_name: plan, content_id: plan}]});
    ttq.track('InitiateCheckout', {contents: [{content_name: plan, content_id: plan, quantity: 1, price: value}], currency: 'BRL', value: value});
  }
};`,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
