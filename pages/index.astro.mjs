import { c as createComponent, a as createAstro, r as renderHead, b as renderTemplate } from '../chunks/astro/server_BXg9EEsY.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`---
title: "和風のお店"
---
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">${renderHead()}</head> <body class="bg-gray-100 font-sans leading-normal tracking-normal"> <header class="bg-gray-800 text-white p-4"> <div class="max-w-7xl mx-auto flex justify-between items-center"> <h1 class="text-2xl font-semibold">和風のお店</h1> <nav class="space-x-4"> <a href="#" class="hover:text-yellow-400">ホーム</a> <a href="#about" class="hover:text-yellow-400">お店について</a> <a href="#menu" class="hover:text-yellow-400">メニュー</a> <a href="#contact" class="hover:text-yellow-400">お問い合わせ</a> </nav> </div> </header> <!-- メインビュー --> <section class="bg-cover bg-center h-screen text-white relative" style="background-image: url('/images/main-view.jpg');"> <div class="absolute inset-0 bg-black opacity-50"></div> <div class="relative z-10 max-w-7xl mx-auto text-center py-36"> <h2 class="text-4xl font-bold">和の美しい空間で</h2> <p class="text-lg mt-4">伝統的な和の料理をお楽しみください。</p> <a href="#menu" class="mt-8 inline-block px-6 py-3 bg-yellow-500 text-black rounded-full text-lg">メニューを見る</a> </div> </section> <!-- お店について --> <section id="about" class="py-16 bg-white"> <div class="max-w-7xl mx-auto text-center"> <h2 class="text-3xl font-semibold mb-6">お店について</h2> <p class="text-xl text-gray-700">当店は、伝統的な和風の料理を提供することに誇りを持っています。旬の食材を使用し、心を込めて料理を作り上げています。</p> </div> </section> <!-- メニュー --> <section id="menu" class="py-16 bg-gray-50"> <div class="max-w-7xl mx-auto text-center"> <h2 class="text-3xl font-semibold mb-6">メニュー</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-white p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">和風定食</h3> <p class="text-gray-600">ダミーの料理説明がここに入ります。季節ごとの新鮮な食材を使用した定食です。</p> </div> <div class="bg-white p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">お寿司</h3> <p class="text-gray-600">ダミーの料理説明がここに入ります。職人が手作りで提供する本格的なお寿司です。</p> </div> <div class="bg-white p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">天ぷら</h3> <p class="text-gray-600">ダミーの料理説明がここに入ります。カラッと揚げた天ぷらをお楽しみください。</p> </div> </div> </div> </section> <!-- お問い合わせ --> <section id="contact" class="py-16 bg-white"> <div class="max-w-7xl mx-auto text-center"> <h2 class="text-3xl font-semibold mb-6">お問い合わせ</h2> <p class="text-xl text-gray-700 mb-6">ご質問やご予約は、お気軽にお問い合わせください。</p> <a href="mailto:info@wafushop.com" class="px-8 py-3 bg-yellow-500 text-black rounded-full text-lg">メールで連絡</a> </div> </section> <footer class="bg-gray-800 text-white py-6"> <div class="max-w-7xl mx-auto text-center"> <p>© 2025 和風のお店. All Rights Reserved.</p> </div> </footer> </body>`;
}, "C:/Users/break/Desktop/website/folderall/wafu-shop/src/pages/index.astro", void 0);

const $$file = "C:/Users/break/Desktop/website/folderall/wafu-shop/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
