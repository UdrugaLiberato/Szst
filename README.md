# SZST – Studentski zbor Sveučilišta u Splitu

Moderni redizajn web-stranice [szst.unist.hr](https://www.szst.unist.hr/) –
statična stranica izrađena čistim HTML-om, CSS-om i JavaScriptom, bez ovisnosti
o vanjskim bibliotekama.

## Struktura

```
index.html      – glavna stranica (semantički HTML, SEO meta oznake, JSON-LD)
css/style.css   – dizajn (responzivan, pristupačan, animacije)
js/main.js      – interakcije (mobilni izbornik, reveal animacije, aktivna navigacija)
robots.txt      – upute za tražilice
sitemap.xml     – mapa stranice
```

## Pokretanje

Otvorite `index.html` u pregledniku ili poslužite lokalno:

```bash
python3 -m http.server 8000
```

zatim posjetite <http://localhost:8000>.

## SEO

- Semantički HTML5 (header, main, section, article, footer)
- Meta description, Open Graph i Twitter Card oznake
- JSON-LD strukturirani podaci (schema.org Organization)
- Kanonski URL, robots.txt i sitemap.xml
- Pristupačnost: skip-link, ARIA atributi, fokus stilovi, `prefers-reduced-motion`

---

Izradila [Udruga Liberato](https://udruga-liberato.hr/).
