# Color Palette

An energetic, sporty, and fresh color system built around deep forest green and hot pink.

## Palette Overview

| Role | Color | Hex | Suggested use |
| --- | --- | --- | --- |
| Primary | Forest Green | `#0F5C34` | Main background, hero sections, headers, and hover state for primary actions |
| Primary action | Hot Pink | `#CC286F` | Calls to action, highlights, badges, dividers, map markers, and domes |
| Supporting dark | Deep Green | `#0A4526` | Dark sections, footers, hover states, and navigation backgrounds |
| Supporting dark | Night Green | `#062B19` | Rich, high-contrast backgrounds for feature sections |
| Neutral | Off-White | `#F4FBF6` | Page backgrounds, cards, and text on dark green |
| Neutral | Soft Mint | `#CDEBD6` | Pale surfaces, dividers, cards, and subtle backgrounds |
| Neutral | Blush Pink | `#F7C6D9` | Tags, light hover states, and soft decorative accents |
| Optional | Warm Tan | `#C98A63` | Illustrations and warm supporting accents |

## Color Swatches

### Primary Colors

<table>
  <tr>
    <td style="background-color:#0F5C34;color:#F4FBF6;padding:24px;text-align:center"><strong>Forest Green</strong><br><code>#0F5C34</code></td>
    <td style="background-color:#CC286F;color:#F4FBF6;padding:24px;text-align:center"><strong>Hot Pink</strong><br><code>#CC286F</code></td>
  </tr>
</table>

### Supporting Colors

<table>
  <tr>
    <td style="background-color:#0A4526;color:#F4FBF6;padding:24px;text-align:center"><strong>Deep Green</strong><br><code>#0A4526</code></td>
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

Use a 60–30–10 balance as a direction rather than a strict per-page target:

- **60% — Forest Green and Off-White:** primary backgrounds, surfaces, hero areas, and readable text.
- **30% — Deep Green and Soft Mint:** supporting sections, cards, dividers, navigation, and footer areas.
- **10% — Hot Pink:** calls to action, badges, icons, highlights, and key moments.

## Accessibility and Contrast

- Off-white on Forest Green is 7.68:1 and on Deep Green is 10.56:1; both meet WCAG AA for normal text.
- Off-White on Hot Pink is 4.87:1 and is the standard pairing for buttons and controls.
- Hot Pink on Forest Green is 1.58:1. Use it for non-text accents on dark green surfaces, not normal-sized text.
- For muted Off-White text on a Deep Green surface, use at least 60% opacity for normal-sized text.

## Recommended UI Pairings

| Component | Background | Text / icon color |
| --- | --- | --- |
| Primary button | Hot Pink | Off-White |
| Secondary button | Soft Mint | Deep Green |
| Dark hero section | Forest Green | Off-White |
| Footer | Deep Green | Off-White or Soft Mint |
| Card | Soft Mint | Deep Green |
| Tag or badge | Blush Pink | Deep Green |
| Warning or highlight | Hot Pink | Off-White |
| 5K route indicator | Hot Pink | Off-White |
| 10K route indicator | Forest Green | Off-White |

## CSS Variables

```css
:root {
  --color-forest-green: #0F5C34;
  --color-deep-green: #0A4526;
  --color-night-green: #062B19;
  --color-hot-pink: #CC286F;
  --color-off-white: #F4FBF6;
  --color-soft-mint: #CDEBD6;
  --color-blush-pink: #F7C6D9;
  --color-warm-tan: #C98A63;
}
```
