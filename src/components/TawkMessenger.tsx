import Script from 'next/script';

export default function TawkMessenger() {
  return (
    <Script id="tawk-messenger" strategy="lazyOnload">
      {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a99a3c2ce478f34475b720c/1k1k2fc8g';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
    </Script>
  );
}
