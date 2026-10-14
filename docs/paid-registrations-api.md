# Kontrak API Direktori Peserta

Endpoint ini memasok daftar peserta yang sudah menyelesaikan pembayaran pada halaman `/peserta`.

## Request

```http
GET /api/v1/events/{event_id}/paid-registrations
```

Semua query parameter bersifat opsional:

| Parameter | Tipe | Default | Keterangan |
| --- | --- | --- | --- |
| `q` | string | kosong | Pencarian substring tanpa membedakan huruf besar/kecil pada nama peserta dan kategori. |
| `page` | integer | `1` | Nomor halaman, dimulai dari 1. |
| `page_size` | integer atau string | `24` | Jumlah item per halaman. Terima `12`, `24`, `36`, atau `all`. `all` mengembalikan seluruh hasil setelah filter dan pencarian, tanpa pembatasan pagination. |
| `category` | string | semua kategori | Nama kategori persis, saat ini `5K` atau `10K`. |
| `age_class` | string | semua kelas | Nilai kelas persis sebagaimana tersimpan. Berlaku untuk kelas pada kategori yang dipilih. |

Kombinasi kategori dan kelas yang tersedia:

| `category` | Label di UI (`age_class`) | Nilai `age_class` |
| --- | --- | --- |
| `5K` | Fun Run | `Fun Run` |
| `10K` | Open | `Open (Under 40th)` |
| `10K` | Master | `Master (40th to before 50th)` |
| `10K` | Master+ | `Master + (50th and up)` |

Filter `category` dan `age_class` harus diterapkan di server sebelum menghitung `total` dan membagi halaman. Jika `age_class` diberikan tanpa `category`, server dapat menolaknya dengan `400 invalid_filter`.

## Response berhasil

Status `200 OK`:

```json
{
  "data": [
    {
      "name": "Nama Peserta",
      "category": "10K",
      "age_class": "Master + (50th and up)",
      "city": "Jakarta Selatan"
    }
  ],
  "total": 1,
  "page": 1,
  "page_size": "all",
  "total_pages": 1
}
```

`data` hanya berisi registrasi berstatus lunas. `total` adalah jumlah hasil setelah pencarian dan filter diterapkan, sebelum pagination. Jika `page_size` berupa angka, `total_pages` adalah jumlah halaman dan `data` hanya memuat halaman yang diminta. Jika `page_size=all`, `data` memuat semua hasil dan server mengembalikan `page_size: "all"`, `page: 1`, serta `total_pages: 1` (termasuk saat tidak ada hasil).

## Validasi dan error

- `page` harus bilangan bulat positif.
- `page_size` harus salah satu dari `12`, `24`, `36`, atau `all`. Jika dihilangkan, gunakan `24`.
- `category` harus salah satu dari `5K` atau `10K`.
- `age_class` harus cocok dengan kategori menurut tabel di atas.
- Parameter tidak valid menghasilkan `400 Bad Request` dengan bentuk berikut:

```json
{ "error": "invalid_filter", "message": "age_class tidak berlaku untuk category ini" }
```

- Event tidak ditemukan menghasilkan `404 Not Found`.
- Kegagalan server menghasilkan `500 Internal Server Error`.

## Contoh

```http
GET /api/v1/events/sprin-run-2027/paid-registrations?category=10K&age_class=Master%20%2B%20%2850th%20and%20up%29&page=1&page_size=24
```
