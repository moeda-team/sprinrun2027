# Color Palette

An energetic, sporty, and fresh color system built around deep forest green with hot pink and golden yellow accents.

## Palette Overview

| Role | Color | Hex | Suggested use |
| --- | --- | --- | --- |
| Primary | Forest Green | `#0F5C34` | Main background, hero sections, headers, and primary buttons |
| Primary | Hot Pink | `#F0509B` | Primary calls to action, highlights, badges, brush strokes, and domes |
| Supporting dark | Deep Green | `#0A4526` | Dark sections, footers, hover states, and navigation backgrounds |
| Accent | Golden Yellow | `#F2C230` | Secondary accents, icons, jersey stripes, warnings, and highlights |
| Neutral | Off-White | `#F4FBF6` | Page backgrounds, cards, and text on dark green |
| Neutral | Soft Mint | `#CDEBD6` | Pale surfaces, dividers, cards, and subtle backgrounds |
| Neutral | Blush Pink | `#F7C6D9` | Tags, light hover states, and soft decorative accents |
| Optional | Warm Tan | `#C98A63` | Illustrations and warm supporting accents |

## Color Swatches

### Primary Colors

<table>
  <tr>
    <td style="background-color:#0F5C34;color:#F4FBF6;padding:24px;text-align:center"><strong>Forest Green</strong><br><code>#0F5C34</code></td>
    <td style="background-color:#F0509B;color:#0A4526;padding:24px;text-align:center"><strong>Hot Pink</strong><br><code>#F0509B</code></td>
  </tr>
</table>

### Supporting and Accent Colors

<table>
  <tr>
    <td style="background-color:#0A4526;color:#F4FBF6;padding:24px;text-align:center"><strong>Deep Green</strong><br><code>#0A4526</code></td>
    <td style="background-color:#F2C230;color:#0A4526;padding:24px;text-align:center"><strong>Golden Yellow</strong><br><code>#F2C230</code></td>
  </tr>
</table>

### Neutral Colors

<table>
  <tr>
    <td style="background-color:#F4FBF6;color:#0A4526;padding:24px;text-align:center"><strong>Off-White</strong><br><code>#F4FBF6</code></td>
    <td style="background-color:#CDEBD6;color:#0A4526;padding:24px;text-align:center"><strong>Soft Mint</strong><br><code>#CDEBD6</code></td>
    <td style="background-color:#F7C6D9;color:#0A4526;padding:24px;text-align:center"><strong>Blush Pink</strong><br><code>#F7C6D9</code></td>
    <td style="background-color:#C98A63;color:#0A4526;padding:24px;text-align:center"><strong>Warm Tan</strong><br><code>#C98A63</code></td>
  </tr>
</table>

## Suggested Usage Ratio

Use a 60–30–10 balance to keep the design bold without becoming visually noisy:

- **60% — Forest Green and Off-White:** primary backgrounds, surfaces, hero areas, and readable text.
- **30% — Deep Green and Soft Mint:** supporting sections, cards, dividers, navigation, and footer areas.
- **10% — Hot Pink and Golden Yellow:** primary calls to action, badges, icons, highlights, and key moments.

## Accessibility and Contrast

- Off-white text on Forest Green provides strong readability for dark sections.
- Use Deep Green text on Hot Pink buttons for improved readability.
- Hot Pink on Forest Green is vibrant, but is best reserved for large text, buttons, and prominent UI elements.
- Avoid Golden Yellow text on Off-White or other light backgrounds because the contrast is too low.
- Always verify text and interactive elements against the final background using an accessibility contrast checker.

## Recommended UI Pairings

| Component | Background | Text / icon color |
| --- | --- | --- |
| Primary button | Hot Pink | Deep Green |
| Secondary button | Golden Yellow | Deep Green |
| Dark hero section | Forest Green | Off-White |
| Footer | Deep Green | Off-White or Soft Mint |
| Card | Soft Mint | Deep Green |
| Tag or badge | Blush Pink | Deep Green |
| Warning or highlight | Golden Yellow | Deep Green |

## CSS Variables

```css
:root {
  --color-forest-green: #0F5C34;
  --color-deep-green: #0A4526;
  --color-hot-pink: #F0509B;
  --color-golden-yellow: #F2C230;
  --color-off-white: #F4FBF6;
  --color-soft-mint: #CDEBD6;
  --color-blush-pink: #F7C6D9;
  --color-warm-tan: #C98A63;
}
```
