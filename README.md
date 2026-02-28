# Enoca Mini Landing + Bilesen Kutuphanesi

Bu repo, verilen gorev dokumanina uygun olarak React + TypeScript + SCSS ile
hazirlanmis tek sayfa landing ve kucuk bir bilesen kutuphanesi icerir.

## Teknoloji

- Vite
- React 19
- TypeScript
- SCSS (zorunlu)
- ESLint + Prettier

## Kurulum

```bash
npm install
npm run dev
```

## Scriptler

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run format:check
```

## Klasor Yapisi

```txt
src/
  components/
    Accordion.tsx
    Button.tsx
    Card.tsx
    Input.tsx
    Modal.tsx
  sections/
    Contact.tsx
    Faq.tsx
    Features.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    Pricing.tsx
  styles/
    _mixins.scss
    _variables.scss
    global.scss
```

## Gereksinim Karsiligi

- Tek sayfa landing bolumleri: Hero, Ozellikler, Fiyat, SSS, Iletisim.
- Bilesen kutuphanesi: Button, Input, Card, Modal, Accordion.
- Responsive: 3 breakpoint (`<=640`, `641-1024`, `>=1025`).
- Tema: Light/Dark toggle (CSS variables).
- Form dogrulama: bos alan + e-posta format kontrolu.
- Erisilebilirlik: semantik HTML, label-for, aria nitelikleri, klavye erisimi.

## Mimari Notlar

- Bilesenler yeniden kullanilabilir olacak sekilde izole edildi.
- Section katmani sayfa kompozisyonu icin ayrildi.
- Tema yonetimi `data-theme` attribute ile dokuman seviyesinde uygulanir.
- Modal'da Escape kapatma ve focus trap bulunur.
- Accordion'da ArrowUp/ArrowDown/Home/End klavye destegi vardir.

## Lighthouse

Lighthouse hedefi en az 90/100 olacak sekilde optimize edildi.
Canli deploy sonrasi rapor ekran goruntusu bu repo'ya eklenebilir.

## Dokumantasyon

- [CHANGELOG.md](./CHANGELOG.md)
- [ADR-0001](./docs/adr-0001.md)
- [Ilerleme Notu](./docs/progress.md)
